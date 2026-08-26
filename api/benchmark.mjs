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


export function percentile(values, p) {
  const sorted = values.filter(Number.isFinite).slice().sort((a, b) => a - b);
  if (!sorted.length) return null;
  const index = Math.max(0, Math.min(sorted.length - 1, Math.ceil(p * sorted.length) - 1));
  return sorted[index];
}

const SCOUT_EXCLUDED_NON_PERSONAL = new Set([
  "crochetdacazeca",
  "chestertonbrasil",
  "softmarias",
  "eiproducoesartisticas",
  "drinkculturepop",
  "tcpbrasil_oficial",
  "vitrinesp.oficial",
  "brazil_surreal",
  "golden_autostudio",
  "traducaojuramentadafrances.rio",
  "partiful",
  "fotocomia.mm",
  "fabio_arte_pallets",
  "sabers_training",
]);

export function selectScoutCandidates(rows, target = 10) {
  return rows
    .filter((row) => row?.success && row?.private !== true && Number(row?.posts_count) > 0)
    .filter((row) => !SCOUT_EXCLUDED_NON_PERSONAL.has(row?.username))
    .slice(0, target);
}

function captionText(post) {
  const value = pick(post, [
    "caption.text",
    "caption_text",
    "description",
    "caption",
    "text",
  ]);
  if (typeof value === "string") return value.trim();
  return "";
}

function unwrapPosts(raw) {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    if (raw.length === 1 && Array.isArray(raw[0]?.latestPosts)) return raw[0].latestPosts;
    if (raw.length === 1 && Array.isArray(raw[0]?.posts)) return raw[0].posts;
    return raw;
  }

  if (Array.isArray(raw?.items)) return raw.items;
  if (Array.isArray(raw?.posts)) return raw.posts;
  if (Array.isArray(raw?.latestPosts)) return raw.latestPosts;
  if (Array.isArray(raw?.data?.items)) return raw.data.items;
  if (Array.isArray(raw?.data?.posts)) return raw.data.posts;
  return [];
}

export function extractContentMetrics(raw, provider = "generic") {
  const posts = unwrapPosts(raw).slice(0, 12);
  const captionsAll = posts.map(captionText);
  const captions = captionsAll.filter(Boolean);
  const captionCharsTotal = captions.reduce((sum, text) => sum + text.length, 0);
  const dates = posts
    .map((post) => pick(post, ["created_at", "taken_at", "timestamp", "datetime", "date_posted", "create_time"]))
    .filter((value) => value !== null && value !== undefined);

  return {
    provider,
    posts_returned: posts.length,
    captions_nonempty: captions.length,
    captions_nonempty_ratio: posts.length ? Number((captions.length / posts.length).toFixed(3)) : 0,
    caption_chars_total: captionCharsTotal,
    avg_caption_chars: captions.length ? Math.round(captionCharsTotal / captions.length) : 0,
    captions: captions.slice(0, 12).map((text) => text.slice(0, 1200)),
    dates: dates.slice(0, 12),
    content_raw_bytes: Buffer.byteLength(JSON.stringify(raw ?? null)),
  };
}

export function summarizeContentResults(rows) {
  const latencies = rows.map((row) => Number(row?.total_latency_ms)).filter(Number.isFinite);
  const successes = rows.filter((row) => row?.success).length;
  const sum = (field) => rows.reduce((acc, row) => acc + (Number(row?.[field]) || 0), 0);
  const count = rows.length || 1;

  return {
    attempts: rows.length,
    successes,
    failures: rows.length - successes,
    min_latency_ms: latencies.length ? Math.min(...latencies) : null,
    median_latency_ms: percentile(latencies, 0.5),
    p90_latency_ms: percentile(latencies, 0.9),
    max_latency_ms: latencies.length ? Math.max(...latencies) : null,
    avg_latency_ms: latencies.length ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length) : null,
    avg_posts_returned: Number((sum("posts_returned") / count).toFixed(2)),
    avg_captions_nonempty: Number((sum("captions_nonempty") / count).toFixed(2)),
    avg_caption_chars_total: Math.round(sum("caption_chars_total") / count),
  };
}

function normalize(provider, username, raw, latencyMs, extra = {}) {
  let p = raw;
  if (provider === "scrapecreators") p = raw?.data?.user ?? raw?.data ?? raw;
  if (provider === "brightdata" && Array.isArray(raw)) p = raw[0] ?? {};
  if ((provider === "apify_official" || provider === "apify_community") && Array.isArray(raw)) p = raw[0] ?? {};

  const avatar = pick(p, [
    "profile_pic_url_hd", "profilePicUrlHD", "profile_pic_url", "profilePicUrl",
    "profile_image_link",
    "hd_profile_pic_url_info.url", "hd_profile_pic_versions.0.url"
  ]);
  const bio = pick(p, ["biography", "bio", "biography_with_entities.raw_text"]) || "";
  const fullName = pick(p, ["full_name", "fullName", "profile_name", "name"]);
  const followers = pick(p, ["edge_followed_by.count", "followers", "followersCount", "follower_count"]);
  const following = pick(p, ["edge_follow.count", "following", "followsCount", "following_count"]);
  const postsCount = pick(p, ["edge_owner_to_timeline_media.count", "posts_count", "postsCount", "media_count"]);
  const isPrivate = pick(p, ["is_private", "private"]);
  const isVerified = pick(p, ["is_verified", "verified"]);
  const returnedUsername = pick(p, ["username", "user_name", "account"]);

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
    profile_id: pick(p, ["pk", "id", "fbid"]),
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
  const u = new URL("https://api.hikerapi.com/v1/user/by/username");
  u.searchParams.set("username", username);
  const r = await fetchJson(u, { headers: { "x-access-key": key } });
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  return normalize("hiker", username, r.body, r.latencyMs, { requests_charged_estimate: 1 });
}

export function classifyBrightDataBody(body) {
  if (Array.isArray(body)) return { kind: "data" };
  if (body?.snapshot_id) return { kind: "snapshot", snapshotId: body.snapshot_id };
  return { kind: "unknown" };
}

async function fetchBrightDataSnapshot(key, snapshotId, timeoutMs = 90000) {
  const started = Date.now();
  const headers = { "Authorization": `Bearer ${key}` };

  while (Date.now() - started < timeoutMs) {
    const progress = await fetchJson(
      `https://api.brightdata.com/datasets/v3/progress/${encodeURIComponent(snapshotId)}`,
      { headers },
      15000
    );

    if (!progress.ok) {
      throw new Error(`Bright Data progress HTTP ${progress.status}: ${JSON.stringify(progress.body).slice(0,500)}`);
    }

    const status = progress.body?.status;

    if (status === "failed") {
      throw new Error(`Bright Data snapshot failed: ${JSON.stringify(progress.body).slice(0,500)}`);
    }

    if (status === "ready") {
      const result = await fetchJson(
        `https://api.brightdata.com/datasets/v3/snapshot/${encodeURIComponent(snapshotId)}?format=json`,
        { headers },
        20000
      );

      if (!result.ok) {
        throw new Error(`Bright Data snapshot HTTP ${result.status}: ${JSON.stringify(result.body).slice(0,500)}`);
      }

      return {
        body: result.body,
        additionalLatencyMs: Date.now() - started,
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  throw new Error(`Bright Data snapshot timeout after ${timeoutMs}ms: ${snapshotId}`);
}

async function runBrightData(username) {
  const key = process.env.BRIGHTDATA_API_KEY;
  const url = "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json";

  const r = await fetchJson(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify([
      { url: `https://www.instagram.com/${username}/` }
    ]),
  }, 65000);

  if (!r.ok) {
    throw new Error(`HTTP ${r.status}: ${JSON.stringify(r.body).slice(0,500)}`);
  }

  const classification = classifyBrightDataBody(r.body);
  let body = r.body;
  let latencyMs = r.latencyMs;
  let snapshotId = null;
  let usedSnapshotFallback = false;

  if (classification.kind === "snapshot") {
    snapshotId = classification.snapshotId;
    usedSnapshotFallback = true;

    const snapshot = await fetchBrightDataSnapshot(key, snapshotId);
    body = snapshot.body;
    latencyMs += snapshot.additionalLatencyMs;
  } else if (classification.kind !== "data") {
    throw new Error(`Unexpected Bright Data response: ${JSON.stringify(r.body).slice(0,500)}`);
  }

  return normalize("brightdata", username, body, latencyMs, {
    records_charged_estimate: Array.isArray(body) ? body.length : 1,
    snapshot_id: snapshotId,
    used_snapshot_fallback: usedSnapshotFallback,
  });
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


function extractAvatarFromRaw(raw) {
  let p = raw;
  if (Array.isArray(raw) && raw.length) p = raw[0];
  return pick(p, [
    "profile_pic_url_hd", "profilePicUrlHD", "profile_pic_url", "profilePicUrl",
    "profile_image_link", "hd_profile_pic_url_info.url", "hd_profile_pic_versions.0.url"
  ]);
}

async function runScrapeCreatorsContent(username) {
  const started = Date.now();
  const key = process.env.SCRAPECREATORS_API_KEY;
  const u = new URL("https://api.scrapecreators.com/v2/instagram/user/posts");
  u.searchParams.set("handle", username);
  u.searchParams.set("trim", "false");

  const [profileSettled, postsSettled] = await Promise.allSettled([
    runScrapeCreators(username),
    fetchJson(u, { headers: { "x-api-key": key } }, 65000),
  ]);

  if (postsSettled.status !== "fulfilled") throw postsSettled.reason;
  const postsResponse = postsSettled.value;
  if (!postsResponse.ok) throw new Error(`HTTP ${postsResponse.status}: ${JSON.stringify(postsResponse.body).slice(0,500)}`);

  const profile = profileSettled.status === "fulfilled" ? profileSettled.value : null;
  const avatar = profile?.avatar_url || null;
  const avatarResult = await avatarCheck(avatar);
  const content = extractContentMetrics(postsResponse.body, "scrapecreators");

  return {
    provider: "scrapecreators",
    username,
    success: content.posts_returned > 0,
    total_latency_ms: Date.now() - started,
    profile_latency_ms: profile?.latency_ms ?? null,
    content_latency_ms: postsResponse.latencyMs,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    profile_posts_count: profile?.posts_count ?? null,
    credits_charged_profile: profile?.credits_charged ?? null,
    credits_charged_content: postsResponse.body?.credits_charged ?? null,
    cached_profile: profile?.cached ?? null,
    ...content,
  };
}

async function runHikerContent(username) {
  const started = Date.now();
  const key = process.env.HIKER_API_KEY;
  const profileUrl = new URL("https://api.hikerapi.com/v1/user/by/username");
  profileUrl.searchParams.set("username", username);
  const profileResponse = await fetchJson(profileUrl, { headers: { "x-access-key": key } }, 30000);
  if (!profileResponse.ok) throw new Error(`Hiker profile HTTP ${profileResponse.status}: ${JSON.stringify(profileResponse.body).slice(0,500)}`);

  const profile = normalize("hiker", username, profileResponse.body, profileResponse.latencyMs);
  const userId = pick(profileResponse.body, ["pk", "id"]);
  if (!userId) throw new Error("Hiker profile did not return a user id");

  const mediaUrl = new URL("https://api.hikerapi.com/v1/user/medias/chunk");
  mediaUrl.searchParams.set("user_id", String(userId));
  const mediaResponse = await fetchJson(mediaUrl, { headers: { "x-access-key": key } }, 65000);
  if (!mediaResponse.ok) throw new Error(`Hiker medias HTTP ${mediaResponse.status}: ${JSON.stringify(mediaResponse.body).slice(0,500)}`);

  const avatarResult = await avatarCheck(profile.avatar_url);
  const content = extractContentMetrics(mediaResponse.body, "hiker");

  return {
    provider: "hiker",
    username,
    success: content.posts_returned > 0,
    total_latency_ms: Date.now() - started,
    profile_latency_ms: profileResponse.latencyMs,
    content_latency_ms: mediaResponse.latencyMs,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    profile_posts_count: profile.posts_count,
    requests_charged_estimate: 2,
    ...content,
  };
}

async function runBrightDataContent(username) {
  const started = Date.now();
  const key = process.env.BRIGHTDATA_API_KEY;
  const url = new URL("https://api.brightdata.com/datasets/v3/scrape");
  url.searchParams.set("dataset_id", "gd_l1vikfch901nx3by4");
  url.searchParams.set("type", "discover_new");
  url.searchParams.set("discover_by", "url");
  url.searchParams.set("format", "json");

  const first = await fetchJson(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: [{
        url: `https://www.instagram.com/${username}/`,
        num_of_posts: 12,
      }],
    }),
  }, 65000);

  if (!first.ok) throw new Error(`Bright Data HTTP ${first.status}: ${JSON.stringify(first.body).slice(0,500)}`);

  const classification = classifyBrightDataBody(first.body);
  let body = first.body;
  let contentLatency = first.latencyMs;
  let snapshotId = null;
  let usedSnapshotFallback = false;

  if (classification.kind === "snapshot") {
    snapshotId = classification.snapshotId;
    usedSnapshotFallback = true;
    const snapshot = await fetchBrightDataSnapshot(key, snapshotId, 120000);
    body = snapshot.body;
    contentLatency += snapshot.additionalLatencyMs;
  } else if (classification.kind !== "data") {
    throw new Error(`Unexpected Bright Data response: ${JSON.stringify(first.body).slice(0,500)}`);
  }

  const content = extractContentMetrics(body, "brightdata");
  const avatar = extractAvatarFromRaw(body);
  const avatarResult = await avatarCheck(avatar);

  return {
    provider: "brightdata",
    username,
    success: content.posts_returned > 0,
    total_latency_ms: Date.now() - started,
    profile_latency_ms: null,
    content_latency_ms: contentLatency,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    snapshot_id: snapshotId,
    used_snapshot_fallback: usedSnapshotFallback,
    records_charged_estimate: Array.isArray(body) ? body.length : 1,
    ...content,
  };
}

async function runApifyContent(provider, username) {
  const started = Date.now();
  const isOfficial = provider === "apify_official";
  const actor = isOfficial ? "apify/instagram-profile-scraper" : "dami_studio/instagram-profile-scraper";
  const input = isOfficial
    ? { usernames: [username], includeAboutSection: false }
    : { usernames: [username], includeLatestPosts: true, maxItems: 1 };

  const token = process.env.APIFY_API_TOKEN;
  const encodedActor = actor.replace("/", "~");
  const url = `https://api.apify.com/v2/acts/${encodedActor}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}&timeout=120`;
  const response = await fetchJson(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }, 125000);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${JSON.stringify(response.body).slice(0,500)}`);

  const profile = normalize(provider, username, response.body, response.latencyMs);
  const content = extractContentMetrics(response.body, provider);
  const avatarResult = await avatarCheck(profile.avatar_url);

  return {
    provider,
    username,
    success: content.posts_returned > 0,
    total_latency_ms: Date.now() - started,
    profile_latency_ms: response.latencyMs,
    content_latency_ms: response.latencyMs,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    profile_posts_count: profile.posts_count,
    actor_runs_estimate: 1,
    ...content,
  };
}

async function runProviderContent(provider, username) {
  if (provider === "scrapecreators") return runScrapeCreatorsContent(username);
  if (provider === "hiker") return runHikerContent(username);
  if (provider === "brightdata") return runBrightDataContent(username);
  if (provider === "apify_official" || provider === "apify_community") return runApifyContent(provider, username);
  throw new Error("Unknown content provider");
}

async function scoutWithHiker(target = 10, scanLimit = 100) {
  const started = Date.now();
  const rows = [];
  const max = Math.min(scanLimit, SAMPLE.length);
  const batchSize = 5;

  for (let offset = 0; offset < max; offset += batchSize) {
    const batch = SAMPLE.slice(offset, Math.min(max, offset + batchSize));
    const batchResults = await mapLimit(batch, Math.min(5, batch.length), async (row) => {
      try {
        const profile = await runHiker(row.username);
        return { ...row, ...profile, scout_latency_ms: profile.latency_ms };
      } catch (error) {
        return { ...row, success: false, error: String(error?.message || error) };
      }
    });
    rows.push(...batchResults);
    if (selectScoutCandidates(rows, target).length >= target) break;
  }

  const selected = selectScoutCandidates(rows, target).map((row) => ({
    username: row.username,
    group: row.group,
    full_name: row.full_name,
    posts_count: row.posts_count,
    bio_chars: row.bio_chars,
    private: row.private,
    scout_latency_ms: row.scout_latency_ms,
  }));

  return {
    selected,
    scanned: rows.length,
    target,
    elapsed_ms: Date.now() - started,
    hiker_requests_estimate: rows.length,
  };
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

function stage2Page() {
  return new Response(`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Meetango Social Benchmark — Conteúdo</title>
<style>
body{font-family:system-ui,sans-serif;max-width:1100px;margin:32px auto;padding:0 18px;color:#171717}input,button{font:inherit}input{padding:10px;width:min(520px,100%);box-sizing:border-box}button{padding:10px 14px;margin:5px 4px 5px 0;cursor:pointer}.card{border:1px solid #ddd;border-radius:10px;padding:16px;margin:16px 0}.muted{color:#666}.ok{color:#087c32}.bad{color:#b42318}pre{white-space:pre-wrap;word-break:break-word;background:#f6f6f6;padding:12px;max-height:360px;overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #ddd;text-align:left;padding:8px}progress{width:100%;height:20px}
</style></head>
<body>
<h1>Meetango Social Benchmark</h1><h2>Etapa 2 — conteúdo e tempo por perfil</h2>
<div class="card"><b>BENCHMARK_RUN_KEY</b><br><input id="key" type="password" autocomplete="off" placeholder="Cole a chave"><br><button id="scout">1. Encontrar 10 perfis com posts</button><span id="scoutStatus" class="muted"></span></div>
<div class="card"><h3>Perfis selecionados</h3><div id="selected" class="muted">Ainda não selecionados.</div></div>
<div class="card"><h3>2. Testar fornecedor</h3><div id="buttons"></div><progress id="progress" max="10" value="0"></progress><div id="progressText" class="muted"></div></div>
<div class="card"><h3>Resumo</h3><div id="summary">Nenhum teste concluído.</div><button id="download" disabled>Baixar resultados JSON</button></div>
<div class="card"><h3>Último resultado</h3><pre id="raw">Aguardando...</pre></div>
<script>
const providers=['scrapecreators','hiker','brightdata','apify_official','apify_community'];
let selected=[]; const allResults={};
const $=id=>document.getElementById(id);
function key(){return $('key').value.trim()}
async function post(payload){const r=await fetch('/api/benchmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,key:key()})}); const t=await r.text(); let b; try{b=JSON.parse(t)}catch{b={raw:t}}; if(!r.ok) throw new Error(JSON.stringify(b)); return b}
function renderSelected(){if(!selected.length){$('selected').textContent='Ainda não selecionados.';return} $('selected').innerHTML='<table><tr><th>#</th><th>Perfil</th><th>Nome</th><th>Posts</th><th>Grupo</th><th>Scout</th></tr>'+selected.map((x,i)=>'<tr><td>'+(i+1)+'</td><td>@'+x.username+'</td><td>'+(x.full_name??'')+'</td><td>'+(x.posts_count??'')+'</td><td>'+x.group+'</td><td>'+(x.scout_latency_ms??'')+' ms</td></tr>').join('')+'</table>'}
function pct(vals,p){const a=vals.filter(Number.isFinite).sort((x,y)=>x-y); if(!a.length)return null; return a[Math.max(0,Math.min(a.length-1,Math.ceil(p*a.length)-1))]}
function summarize(rows){const l=rows.map(x=>Number(x.total_latency_ms)).filter(Number.isFinite);const s=rows.filter(x=>x.success).length;const sum=f=>rows.reduce((a,x)=>a+(Number(x[f])||0),0);return{attempts:rows.length,successes:s,failures:rows.length-s,min_latency_ms:l.length?Math.min(...l):null,median_latency_ms:pct(l,.5),p90_latency_ms:pct(l,.9),max_latency_ms:l.length?Math.max(...l):null,avg_latency_ms:l.length?Math.round(l.reduce((a,b)=>a+b,0)/l.length):null,avg_posts_returned:rows.length?+(sum('posts_returned')/rows.length).toFixed(2):0,avg_captions_nonempty:rows.length?+(sum('captions_nonempty')/rows.length).toFixed(2):0,avg_caption_chars_total:rows.length?Math.round(sum('caption_chars_total')/rows.length):0}}
function renderSummary(){const names=Object.keys(allResults); if(!names.length){$('summary').textContent='Nenhum teste concluído.';return} let html='<table><tr><th>Fornecedor</th><th>Sucesso</th><th>Mediana</th><th>P90</th><th>Mín</th><th>Máx</th><th>Posts médios</th><th>Legendas médias</th><th>Chars médios</th></tr>'; for(const n of names){const s=summarize(allResults[n]);html+='<tr><td>'+n+'</td><td>'+s.successes+'/'+s.attempts+'</td><td>'+(s.median_latency_ms??'-')+' ms</td><td>'+(s.p90_latency_ms??'-')+' ms</td><td>'+(s.min_latency_ms??'-')+' ms</td><td>'+(s.max_latency_ms??'-')+' ms</td><td>'+s.avg_posts_returned+'</td><td>'+s.avg_captions_nonempty+'</td><td>'+s.avg_caption_chars_total+'</td></tr>'} $('summary').innerHTML=html+'</table>'; $('download').disabled=false}
$('scout').onclick=async()=>{if(!key())return alert('Informe a BENCHMARK_RUN_KEY.'); $('scout').disabled=true;$('scoutStatus').textContent=' Procurando...';try{const r=await post({action:'scout',target:10,scan_limit:100});selected=r.selected;$('raw').textContent=JSON.stringify(r,null,2);$('scoutStatus').textContent=' '+r.selected.length+' selecionados; '+r.scanned+' perfis consultados em '+r.elapsed_ms+' ms.';renderSelected()}catch(e){$('scoutStatus').textContent=' Erro: '+e.message}finally{$('scout').disabled=false}};
async function runProvider(p){if(!selected.length)return alert('Execute o scout primeiro.'); if(!key())return alert('Informe a chave.'); const btn=document.querySelector('[data-p="'+p+'"]'); btn.disabled=true; const rows=[];$('progress').max=selected.length;$('progress').value=0;for(let i=0;i<selected.length;i++){const u=selected[i].username;$('progressText').textContent=p+': '+(i+1)+'/'+selected.length+' — @'+u;try{const r=await post({action:'content_one',provider:p,username:u});rows.push(r.result);$('raw').textContent=JSON.stringify(r,null,2)}catch(e){rows.push({provider:p,username:u,success:false,error:e.message,total_latency_ms:null});$('raw').textContent=e.message}$('progress').value=i+1}allResults[p]=rows;renderSummary();$('progressText').textContent=p+': concluído ('+rows.filter(x=>x.success).length+'/'+rows.length+').';btn.disabled=false}
$('buttons').innerHTML=providers.map(p=>'<button data-p="'+p+'">'+p+'</button>').join(''); document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>runProvider(b.dataset.p));
$('download').onclick=()=>{const payload={generated_at:new Date().toISOString(),selected,providers:Object.fromEntries(Object.entries(allResults).map(([k,v])=>[k,{summary:summarize(v),results:v}]))};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-content-benchmark.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
</script></body></html>`, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "POST") {
      let body;
      try { body = await request.json(); }
      catch { return json({ error: "invalid_json" }, 400); }

      if (!RUN_KEY || body?.key !== RUN_KEY) return json({ error: "unauthorized" }, 401);
      const action = body?.action;

      if (action === "scout") {
        const target = Math.min(20, Math.max(1, Number(body?.target || 10)));
        const scanLimit = Math.min(SAMPLE.length, Math.max(target, Number(body?.scan_limit || 100)));
        return json(await scoutWithHiker(target, scanLimit));
      }

      if (action === "content_one") {
        const provider = String(body?.provider || "");
        const username = String(body?.username || "").replace(/^@/, "");
        const allowed = ["scrapecreators","hiker","brightdata","apify_official","apify_community"];
        if (!allowed.includes(provider)) return json({ error: "unknown_provider", allowed }, 400);
        if (!SAMPLE.some((row) => row.username === username)) return json({ error: "username_not_in_sample" }, 400);
        const started = Date.now();
        try {
          const result = await runProviderContent(provider, username);
          return json({ ok: true, elapsed_ms: Date.now() - started, result });
        } catch (error) {
          return json({ ok: false, elapsed_ms: Date.now() - started, result: { provider, username, success: false, total_latency_ms: Date.now() - started, error: String(error?.message || error) } });
        }
      }

      return json({ error: "unknown_action", allowed: ["scout","content_one"] }, 400);
    }

    const provider = url.searchParams.get("provider") || "env";

    if (provider === "stage2") return stage2Page();

    if (provider === "health") {
      return json({
        ok: true,
        benchmark_run_key_present: Boolean(RUN_KEY),
        benchmark_run_key_length: RUN_KEY?.length ?? 0,
        environment_variables: Object.fromEntries(ENV_NAMES.map((k) => [k, Boolean(process.env[k])])),
        sample_size: SAMPLE.length,
      });
    }

    if (!RUN_KEY || url.searchParams.get("key") !== RUN_KEY) return json({ error: "unauthorized" }, 401);

    if (provider === "env") {
      return json({
        ok: true,
        env: Object.fromEntries(ENV_NAMES.map(k => [k, Boolean(process.env[k])])),
        sample_size: SAMPLE.length,
        groups: SAMPLE.reduce((a,x) => (a[x.group]=(a[x.group]||0)+1,a),{}),
      });
    }
    if (provider === "sample") return json({ sample: SAMPLE.map((x,i)=>({i,...x})) });

    const allowed = ["scrapecreators","hiker","brightdata","apify_official","apify_community"];
    if (!allowed.includes(provider)) return json({ error: "unknown provider", allowed: [...allowed, "stage2"] }, 400);

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

