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

function page() {
  return new Response(
    `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Meetango Social Benchmark — Pilot</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 12px;
      margin: 10px 0;
    }

    button {
      padding: 12px 20px;
      cursor: pointer;
    }

    pre {
      white-space: pre-wrap;
      word-break: break-word;
      background: #f4f4f4;
      padding: 16px;
      margin-top: 20px;
    }

    .warning {
      margin: 20px 0;
      padding: 12px;
      background: #fff4cc;
    }
  </style>
</head>

<body>

  <h1>Meetango Social Benchmark</h1>
  <h2>Piloto — 1 perfil × 5 fornecedores</h2>

  <div class="warning">
    Ao executar, serão feitas no máximo 5 chamadas:
    uma para cada fornecedor.
  </div>

  <label for="key">BENCHMARK_RUN_KEY</label>

  <input
    id="key"
    type="password"
    autocomplete="off"
    placeholder="Cole a chave aqui"
  >

  <button id="run">
    Executar piloto
  </button>

  <pre id="result">Aguardando...</pre>

<script>
const button = document.getElementById("run");
const result = document.getElementById("result");
const keyInput = document.getElementById("key");

button.addEventListener("click", async () => {
  const key = keyInput.value;

  if (!key) {
    result.textContent = "Informe a BENCHMARK_RUN_KEY.";
    return;
  }

  button.disabled = true;
  result.textContent = "Executando piloto...";

  try {
    const response = await fetch("/api/pilot", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ key })
    });

    const text = await response.text();

    try {
      const parsed = JSON.parse(text);
      result.textContent = JSON.stringify(parsed, null, 2);
    } catch {
      result.textContent = text;
    }
  } catch (error) {
    result.textContent = String(error);
  } finally {
    button.disabled = false;
  }
});
</script>

</body>
</html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      }
    }
  );
}

export default {
  async fetch(request) {

    if (request.method === "GET") {
      return page();
    }

    if (request.method !== "POST") {
      return json(
        { error: "method_not_allowed" },
        405
      );
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return json(
        { error: "invalid_json" },
        400
      );
    }

    const suppliedKey = body?.key;

    if (
      !RUN_KEY ||
      !suppliedKey ||
      suppliedKey !== RUN_KEY
    ) {
      return json(
        { error: "unauthorized" },
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

    const url = new URL(request.url);

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

          const text = await response.text();

          let responseBody;

          try {
            responseBody = JSON.parse(text);
          } catch {
            responseBody = {
              raw: text.slice(0, 3000)
            };
          }

          return {
            provider,
            http_status: response.status,
            elapsed_ms:
              Date.now() - providerStarted,
            body: responseBody
          };

        } catch (error) {

          return {
            provider,
            http_status: null,
            elapsed_ms:
              Date.now() - providerStarted,
            error: String(
              error?.message || error
            )
          };
        }
      })
    );

    const results = tests.map(
      (result, index) => {

        if (result.status === "fulfilled") {
          return result.value;
        }

        return {
          provider: providers[index],
          error: String(result.reason)
        };
      }
    );

    return json({
      ok: true,

      pilot: {
        profiles_per_provider: 1,
        providers: providers.length,
        total_provider_calls: 5
      },

      elapsed_ms:
        Date.now() - started,

      results
    });
  }
};
