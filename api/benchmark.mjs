const RUN_KEY = process.env.BENCHMARK_RUN_KEY;

const SAMPLE = [{"username": "isalucia797", "group": "follower_only"}, {"username": "keniamaravasconcelos", "group": "follower_only"}, {"username": "crochetdacazeca", "group": "follower_only"}, {"username": "suskalecki", "group": "following_only"}, {"username": "dicildatrindade", "group": "follower_only"}, {"username": "rmonteir2", "group": "follower_only"}, {"username": "chestertonbrasil", "group": "following_only"}, {"username": "athaisfonsecaoficial", "group": "following_only"}, {"username": "cassiogontijo", "group": "follower_only"}, {"username": "quirogamarioluis", "group": "follower_only"}, {"username": "leticiamayara3", "group": "following_only"}, {"username": "jeanetvivian", "group": "follower_only"}, {"username": "moon_h_j_1529", "group": "mutual"}, {"username": "izadoramineira", "group": "following_only"}, {"username": "laryssa.santos.9461", "group": "follower_only"}, {"username": "deborah_felicio", "group": "following_only"}, {"username": "geisamachadogontijo", "group": "follower_only"}, {"username": "cdreher10", "group": "follower_only"}, {"username": "dristehling", "group": "following_only"}, {"username": "lubf77", "group": "follower_only"}, {"username": "softmarias", "group": "following_only"}, {"username": "carollmmagalhaes", "group": "following_only"}, {"username": "eupamelalucas", "group": "follower_only"}, {"username": "eiproducoesartisticas", "group": "follower_only"}, {"username": "oxeindia.0", "group": "following_only"}, {"username": "anabeatriz.fjmatos", "group": "following_only"}, {"username": "drinkculturepop", "group": "following_only"}, {"username": "ronner.ferreira", "group": "follower_only"}, {"username": "pierre_pnn", "group": "mutual"}, {"username": "jussarateixeiraemoreira", "group": "follower_only"}, {"username": "cynthyadiniz", "group": "following_only"}, {"username": "jessicakalfels", "group": "mutual"}, {"username": "poyareslaete", "group": "following_only"}, {"username": "juliavalenteortodontia", "group": "follower_only"}, {"username": "bicarletto", "group": "mutual"}, {"username": "tcpbrasil_oficial", "group": "follower_only"}, {"username": "denisemourao77", "group": "follower_only"}, {"username": "isvaryoga", "group": "mutual"}, {"username": "natalicio.rangel", "group": "follower_only"}, {"username": "brenda_rezendecosta", "group": "following_only"}, {"username": "rcrrodrigues", "group": "follower_only"}, {"username": "sylviamattiolipossatto", "group": "following_only"}, {"username": "cassiabarrosbeauty", "group": "following_only"}, {"username": "th3shan3fram3", "group": "mutual"}, {"username": "rodrigoleite.bc", "group": "follower_only"}, {"username": "jackie.kameoka", "group": "mutual"}, {"username": "vitrinesp.oficial", "group": "following_only"}, {"username": "carolinefragoso", "group": "following_only"}, {"username": "brazil_surreal", "group": "follower_only"}, {"username": "eduardopassoscf", "group": "follower_only"}, {"username": "luiznotinigreco", "group": "follower_only"}, {"username": "jessiemancini_", "group": "following_only"}, {"username": "rhyeenny", "group": "following_only"}, {"username": "debora.soutosantos", "group": "mutual"}, {"username": "gabrielebp_", "group": "following_only"}, {"username": "golden_autostudio", "group": "following_only"}, {"username": "cacamilaamaral", "group": "following_only"}, {"username": "anacarolinavieirx", "group": "following_only"}, {"username": "reflitaecompartilhe", "group": "follower_only"}, {"username": "kristianduris", "group": "mutual"}, {"username": "traducaojuramentadafrances.rio", "group": "follower_only"}, {"username": "kallifernandess", "group": "following_only"}, {"username": "sangela_cruz", "group": "mutual"}, {"username": "suelen_diaz", "group": "following_only"}, {"username": "mariagabriellesmadeira", "group": "following_only"}, {"username": "aline_rode", "group": "following_only"}, {"username": "ingrid_linhares_dgois", "group": "following_only"}, {"username": "sigagabi", "group": "following_only"}, {"username": "leolevysilva", "group": "follower_only"}, {"username": "umviralata_semdestino", "group": "following_only"}, {"username": "reflexao.martins.nayara", "group": "following_only"}, {"username": "adalberto_gp", "group": "follower_only"}, {"username": "rafaelgrasso", "group": "follower_only"}, {"username": "carmen.rose", "group": "following_only"}, {"username": "camilakk_", "group": "following_only"}, {"username": "danielapasty", "group": "following_only"}, {"username": "bittencourtlaurasouto", "group": "follower_only"}, {"username": "fernandacintrac", "group": "following_only"}, {"username": "carine_doreaa", "group": "following_only"}, {"username": "leomiranda.arq", "group": "follower_only"}, {"username": "partiful", "group": "following_only"}, {"username": "tatipolizzi", "group": "follower_only"}, {"username": "hdjunior", "group": "follower_only"}, {"username": "andtatiana", "group": "following_only"}, {"username": "dra.adriana.muniz.cordeiro", "group": "follower_only"}, {"username": "tabattachiavini", "group": "following_only"}, {"username": "rairechprof", "group": "following_only"}, {"username": "valeriaprates1972", "group": "follower_only"}, {"username": "fotocomia.mm", "group": "follower_only"}, {"username": "fabio_arte_pallets", "group": "following_only"}, {"username": "marfizasantana", "group": "following_only"}, {"username": "sanocristiane", "group": "follower_only"}, {"username": "stefani.als", "group": "following_only"}, {"username": "sabers_training", "group": "following_only"}, {"username": "lucasfboa", "group": "follower_only"}, {"username": "jessica.carolinasilva", "group": "following_only"}, {"username": "lucianavasconceloss00", "group": "following_only"}, {"username": "babifcosta_", "group": "following_only"}, {"username": "jeanne_srv", "group": "mutual"}, {"username": "marianamacaferri", "group": "mutual"}];

const ENV_NAMES = [
  "SCRAPECREATORS_API_KEY",
  "HIKER_API_KEY",
  "BRIGHTDATA_API_KEY",
  "APIFY_API_TOKEN",
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

function pick(obj, paths) {
  for (const path of paths) {
    let cur = obj;
    let ok = true;
    for (const p of path.split(".")) {
      if (cur == null || !(p in Object(cur))) { ok = false; break; }
      cur = cur[p];
    }
    if (ok && cur !== undefined && cur !== null) return cur;
  }
  return null;
}

function normalize(provider, username, raw, latencyMs, extra = {}) {
  let p = raw;
  if (provider === "scrapecreators") p = raw?.data?.user ?? raw?.data ?? raw;
  if (provider === "brightdata" && Array.isArray(raw)) p = raw[0] ?? {};
  if ((provider === "apify_official" || provider === "apify_community") && Array.isArray(raw)) p = raw[0] ?? {};

  const avatar = pick(p, [
    "profile_pic_url_hd", "profilePicUrlHD", "profile_pic_url", "profilePicUrl",
    "hd_profile_pic_url_info.url", "hd_profile_pic_versions.0.url"
  ]);
  const bio = pick(p, ["biography", "bio", "biography_with_entities.raw_text"]) || "";
  const fullName = pick(p, ["full_name", "fullName", "name"]);
  const followers = pick(p, ["edge_followed_by.count", "followers", "followersCount", "follower_count"]);
  const following = pick(p, ["edge_follow.count", "following", "followsCount", "following_count"]);
  const postsCount = pick(p, ["edge_owner_to_timeline_media.count", "posts_count", "postsCount", "media_count"]);
  const isPrivate = pick(p, ["is_private", "private"]);
  const isVerified = pick(p, ["is_verified", "verified"]);
  const returnedUsername = pick(p, ["username", "user_name"]);

  return {
    provider,
    requested_username: username,
    returned_username: returnedUsername,
    success: Boolean(returnedUsername || fullName || avatar || bio),
    latency_ms: latencyMs,
    avatar_url: avatar,
    avatar_present: Boolean(avatar),
    bio_present: Boolean(bio && String(bio).trim()),
    bio_chars: bio ? String(bio).length : 0,
    full_name: fullName,
    followers,
    following,
    posts_count: postsCount,
    private: isPrivate,
    verified: isVerified,
    raw_bytes: Buffer.byteLength(JSON.stringify(raw ?? null)),
    ...extra,
  };
}

async function fetchJson(url, options = {}, timeoutMs = 55000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  const started = Date.now();
  try {
    const r = await fetch(url, { ...options, signal: ac.signal });
    const txt = await r.text();
    let body;
    try { body = JSON.parse(txt); } catch { body = { _text: txt.slice(0, 2000) }; }
    return { ok: r.ok, status: r.status, body, latencyMs: Date.now() - started };
  } finally {
    clearTimeout(t);
  }
}

async function avatarCheck(url) {
  if (!url) return { avatar_downloadable: false, avatar_http_status: null, avatar_latency_ms: null };
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 7000);
  const started = Date.now();
  try {
    const r = await fetch(url, { method: "GET", redirect: "follow", headers: { Range: "bytes=0-0" }, signal: ac.signal });
    try { await r.body?.cancel(); } catch {}
    return { avatar_downloadable: r.ok || r.status === 206, avatar_http_status: r.status, avatar_latency_ms: Date.now()-started };
  } catch (e) {
    return { avatar_downloadable: false, avatar_http_status: null, avatar_latency_ms: Date.now()-started, avatar_error: String(e?.message || e) };
  } finally { clearTimeout(t); }
}

async function runScrapeCreators(username) {
  const key = process.env.SCRAPECREATORS_API_KEY;
  const u = new URL("https://api.scrapecreators.com/v1/instagram/profile");
  u.searchParams.set("handle", username);
  u.searchParams.set("trim", "false");
  u.searchParams.set("cache_max_age", "30d");
  const r = await fetchJson(u, { headers: { "x-api-key": key } });
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  return normalize("scrapecreators", username, r.body, r.latencyMs, {
    credits_charged: r.body?.credits_charged ?? null,
    cached: r.body?.cached ?? false,
  });
}

async function runHiker(username) {
  const key = process.env.HIKER_API_KEY;
  const u = new URL("https://api.hikerapi.com/v2/user/by/username");
  u.searchParams.set("username", username);
  u.searchParams.set("safe_int", "true");
  const r = await fetchJson(u, { headers: { "x-access-key": key } });
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  return normalize("hiker", username, r.body, r.latencyMs, { requests_charged_estimate: 1 });
}

async function runBrightData(username) {
  const key = process.env.BRIGHTDATA_API_KEY;
  const url = "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json";
  const r = await fetchJson(url, {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify([{ url: `https://www.instagram.com/${username}/` }]),
  }, 65000);
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  return normalize("brightdata", username, r.body, r.latencyMs, { records_charged_estimate: Array.isArray(r.body) ? r.body.length : 1 });
}

async function runApify(actor, provider, username, input) {
  const token = process.env.APIFY_API_TOKEN;
  const encodedActor = actor.replace("/", "~");
  const url = `https://api.apify.com/v2/acts/${encodedActor}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}&timeout=120`;
  const r = await fetchJson(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }, 125000);
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  return normalize(provider, username, r.body, r.latencyMs);
}

async function runProvider(provider, username) {
  if (provider === "scrapecreators") return runScrapeCreators(username);
  if (provider === "hiker") return runHiker(username);
  if (provider === "brightdata") return runBrightData(username);
  if (provider === "apify_official") return runApify(
    "apify/instagram-profile-scraper", "apify_official", username,
    { usernames: [username], includeAboutSection: false }
  );
  if (provider === "apify_community") return runApify(
    "dami_studio/instagram-profile-scraper", "apify_community", username,
    { usernames: [username], includeLatestPosts: false, maxItems: 1 }
  );
  throw new Error("Unknown provider");
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  async function worker() {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      try { out[i] = await fn(items[i], i); }
      catch (e) { out[i] = { username: items[i].username, group: items[i].group, error: String(e?.message || e) }; }
    }
  }
  await Promise.all(Array.from({length: Math.min(limit, items.length)}, () => worker()));
  return out;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.searchParams.get("key") !== RUN_KEY) return json({ error: "unauthorized" }, 401);

    const provider = url.searchParams.get("provider") || "env";
    if (provider === "env") {
      return json({
        ok: true,
        env: Object.fromEntries(ENV_NAMES.map(k => [k, Boolean(process.env[k])])),
        sample_size: SAMPLE.length,
        groups: SAMPLE.reduce((a,x) => (a[x.group]=(a[x.group]||0)+1,a),{}),
      });
    }
    if (provider === "sample") {
      return json({ sample: SAMPLE.map((x,i)=>({i,...x})) });
    }

    const allowed = ["scrapecreators","hiker","brightdata","apify_official","apify_community"];
    if (!allowed.includes(provider)) return json({ error: "unknown provider", allowed }, 400);

    const offset = Math.max(0, Number(url.searchParams.get("offset") || 0));
    const limit = Math.min(20, Math.max(1, Number(url.searchParams.get("limit") || 5)));
    const concurrency = Math.min(8, Math.max(1, Number(url.searchParams.get("concurrency") || 4)));
    const checkAvatar = url.searchParams.get("avatar") !== "0";
    const batch = SAMPLE.slice(offset, offset + limit);
    const started = Date.now();

    const results = await mapLimit(batch, concurrency, async (row) => {
      const result = await runProvider(provider, row.username);
      const av = checkAvatar ? await avatarCheck(result.avatar_url) : {};
      return { ...row, ...result, ...av };
    });

    const successes = results.filter(x => x.success).length;
    const avatarOk = results.filter(x => x.avatar_downloadable).length;
    const latencies = results.filter(x=>Number.isFinite(x.latency_ms)).map(x=>x.latency_ms).sort((a,b)=>a-b);
    const median = latencies.length ? latencies[Math.floor(latencies.length/2)] : null;

    return json({
      provider,
      offset,
      limit: batch.length,
      concurrency,
      elapsed_ms: Date.now()-started,
      summary: { successes, failures: batch.length-successes, avatar_downloadable: avatarOk, median_latency_ms: median },
      results,
    });
  },
};
