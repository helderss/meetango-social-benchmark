const RUN_KEY = process.env.BENCHMARK_RUN_KEY;

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const suppliedKey = url.searchParams.get("key");

    if (!RUN_KEY || suppliedKey !== RUN_KEY) {
      return json(
        {
          error: "unauthorized"
        },
        401
      );
    }

    const providers = [
      "scrapecreators",
      "hiker",
      "brightdata",
      "apify_official",
      "apify_community"
    ];

    const started = Date.now();

    const tests = await Promise.allSettled(
      providers.map(async (provider) => {
        const target = new URL(
          "/api/benchmark",
          url.origin
        );

        target.searchParams.set(
          "provider",
          provider
        );

        target.searchParams.set(
          "offset",
          "0"
        );

        target.searchParams.set(
          "limit",
          "1"
        );

        target.searchParams.set(
          "concurrency",
          "1"
        );

        target.searchParams.set(
          "avatar",
          "1"
        );

        target.searchParams.set(
          "key",
          RUN_KEY
        );

        const providerStarted = Date.now();

        try {
          const response = await fetch(
            target.toString(),
            {
              cache: "no-store"
            }
          );

          const text =
            await response.text();

          let body;

          try {
            body = JSON.parse(text);
          } catch {
            body = {
              raw: text.slice(0, 3000)
            };
          }

          return {
            provider,
            http_status:
              response.status,
            elapsed_ms:
              Date.now() -
              providerStarted,
            body
          };
        } catch (error) {
          return {
            provider,
            http_status: null,
            elapsed_ms:
              Date.now() -
              providerStarted,
            error: String(
              error?.message ||
              error
            )
          };
        }
      })
    );

    const results =
      tests.map((result, index) => {
        if (
          result.status ===
          "fulfilled"
        ) {
          return result.value;
        }

        return {
          provider:
            providers[index],
          error: String(
            result.reason
          )
        };
      });

    return json({
      ok: true,

      pilot: {
        profiles_per_provider: 1,
        providers:
          providers.length,
        total_provider_calls: 5
      },

      elapsed_ms:
        Date.now() - started,

      results
    });
  }
};
