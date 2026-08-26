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
    "edge_media_to_caption.edges.0.node.text",
  ]);
  if (typeof value === "string") return value.trim();
  return "";
}

function unwrapPosts(raw) {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    // Hiker /v1/user/medias/chunk returns [Media[], end_cursor].
    if (Array.isArray(raw[0])) return raw[0];
    if (raw.length === 1 && Array.isArray(raw[0]?.latestPosts)) return raw[0].latestPosts;
    if (raw.length === 1 && Array.isArray(raw[0]?.posts)) return raw[0].posts;
    return raw;
  }

  if (Array.isArray(raw?.items)) return raw.items;
  if (Array.isArray(raw?.posts)) return raw.posts;
  if (Array.isArray(raw?.latestPosts)) return raw.latestPosts;
  if (Array.isArray(raw?.data?.items)) return raw.data.items;
  if (Array.isArray(raw?.data?.posts)) return raw.data.posts;
  const timelineEdges = raw?.data?.user?.edge_owner_to_timeline_media?.edges;
  if (Array.isArray(timelineEdges)) return timelineEdges.map((edge) => edge?.node).filter(Boolean);
  const directTimelineEdges = raw?.edge_owner_to_timeline_media?.edges;
  if (Array.isArray(directTimelineEdges)) return directTimelineEdges.map((edge) => edge?.node).filter(Boolean);
  return [];
}

export function extractContentMetrics(raw, provider = "generic") {
  const posts = unwrapPosts(raw).slice(0, 12);
  const captionsAll = posts.map(captionText);
  const captions = captionsAll.filter(Boolean);
  const captionCharsTotal = captions.reduce((sum, text) => sum + text.length, 0);
  const dates = posts
    .map((post) => pick(post, ["created_at", "taken_at", "taken_at_timestamp", "timestamp", "datetime", "date_posted", "create_time"]))
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


export function summarizeThroughputBatch(rows, batchElapsedMs, mode = "parallel") {
  const base = summarizeContentResults(rows);
  const attempts = rows.length;
  return {
    ...base,
    mode,
    batch_elapsed_ms: batchElapsedMs,
    effective_ms_per_profile: attempts ? Math.round(batchElapsedMs / attempts) : null,
    throughput_profiles_per_sec: batchElapsedMs > 0 ? Number((attempts / (batchElapsedMs / 1000)).toFixed(3)) : null,
  };
}

export function summarizeApifyBatchRecords(provider, usernames, rawRecords) {
  const records = Array.isArray(rawRecords) ? rawRecords : [];
  const byUsername = new Map();
  for (const record of records) {
    const username = pick(record, ["username", "user_name", "account"]);
    if (username) byUsername.set(String(username).replace(/^@/, "").toLowerCase(), record);
  }

  return usernames.map((username) => {
    const record = byUsername.get(String(username).toLowerCase()) || null;
    if (!record) {
      return {
        provider,
        username,
        success: false,
        posts_returned: 0,
        captions_nonempty: 0,
        captions_nonempty_ratio: 0,
        caption_chars_total: 0,
        avg_caption_chars: 0,
        captions: [],
        dates: [],
        content_raw_bytes: 0,
        error: "profile_not_returned",
      };
    }
    const content = extractContentMetrics([record], provider);
    return {
      provider,
      username,
      success: true,
      profile_posts_count: pick(record, ["postsCount", "posts_count", "media_count"]),
      avatar_url: pick(record, ["profilePicUrlHD", "profilePicUrl", "profile_pic_url_hd", "profile_pic_url", "profile_image_link"]),
      ...content,
    };
  });
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
  const u = new URL("https://api.scrapecreators.com/v1/instagram/profile");
  u.searchParams.set("handle", username);
  u.searchParams.set("trim", "false");
  // Intentionally omit cache_max_age for a fair live 1-credit benchmark.
  const response = await fetchJson(u, { headers: { "x-api-key": key } }, 65000);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${JSON.stringify(response.body).slice(0,500)}`);

  const profile = normalize("scrapecreators", username, response.body, response.latencyMs, {
    credits_charged: response.body?.credits_charged ?? null,
    cached: response.body?.cached ?? false,
  });
  const avatar = profile?.avatar_url || null;
  const avatarResult = await avatarCheck(avatar);
  const content = extractContentMetrics(response.body, "scrapecreators");

  return {
    provider: "scrapecreators",
    username,
    success: profile?.success === true && content.posts_returned > 0,
    mode: "profile_one_call_live",
    total_latency_ms: Date.now() - started,
    profile_latency_ms: response.latencyMs,
    content_latency_ms: response.latencyMs,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    profile_posts_count: profile?.posts_count ?? null,
    credits_charged_total: response.body?.credits_charged ?? null,
    requests_charged_estimate: 1,
    cached_profile: response.body?.cached ?? false,
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

export function buildBrightDataProfileDiscovery(username) {
  const url = new URL("https://api.brightdata.com/datasets/v3/scrape");
  url.searchParams.set("dataset_id", "gd_l1vikfch901nx3by4");
  url.searchParams.set("type", "discover_new");
  url.searchParams.set("discover_by", "user_name");
  url.searchParams.set("notify", "false");
  url.searchParams.set("include_errors", "true");
  url.searchParams.set("format", "json");
  return { url, body: { input: [{ user_name: username }] } };
}

export function buildBrightDataAsyncBatch(usernames) {
  const url = new URL("https://api.brightdata.com/datasets/v3/trigger");
  url.searchParams.set("dataset_id", "gd_l1vikfch901nx3by4");
  url.searchParams.set("type", "discover_new");
  url.searchParams.set("discover_by", "user_name");
  url.searchParams.set("notify", "false");
  url.searchParams.set("include_errors", "true");
  url.searchParams.set("format", "json");
  return {
    url,
    body: usernames.map((username) => ({ user_name: username })),
  };
}

export function classifyBrightDataProgress(body) {
  const status = String(body?.status || "unknown").toLowerCase();
  if (status === "ready") return "ready";
  if (status === "failed") return "failed";
  return status || "unknown";
}

export function summarizeBrightDataAsyncBatch(usernames, rawRecords, batchElapsedMs, triggerLatencyMs) {
  const records = Array.isArray(rawRecords) ? rawRecords : [];
  const byUsername = new Map();
  for (const record of records) {
    const username = pick(record, ["account", "username", "user_name"]);
    if (username) byUsername.set(String(username).toLowerCase(), record);
  }

  const results = usernames.map((username) => {
    const record = byUsername.get(String(username).toLowerCase()) || null;
    if (!record) {
      return { username, success: false, posts_returned: 0, captions_nonempty: 0, caption_chars_total: 0 };
    }
    const content = extractContentMetrics([record], "brightdata_async_batch");
    return {
      username,
      success: true,
      profile_posts_count: pick(record, ["posts_count", "postsCount", "media_count"]),
      avatar_present: Boolean(pick(record, ["profile_image_link", "profile_pic_url_hd", "profile_pic_url"])),
      ...content,
    };
  });

  const successes = results.filter((row) => row.success).length;
  return {
    attempts: usernames.length,
    successes,
    failures: usernames.length - successes,
    records_returned: records.length,
    mode: "async_batch_10",
    batch_elapsed_ms: batchElapsedMs,
    trigger_latency_ms: triggerLatencyMs,
    effective_ms_per_profile: usernames.length ? Math.round(batchElapsedMs / usernames.length) : null,
    throughput_profiles_per_sec: batchElapsedMs > 0 ? Number((usernames.length / (batchElapsedMs / 1000)).toFixed(3)) : null,
    avg_posts_returned: usernames.length ? Number((results.reduce((a,r)=>a+(r.posts_returned||0),0)/usernames.length).toFixed(2)) : 0,
    avg_captions_nonempty: usernames.length ? Number((results.reduce((a,r)=>a+(r.captions_nonempty||0),0)/usernames.length).toFixed(2)) : 0,
    avg_caption_chars_total: usernames.length ? Math.round(results.reduce((a,r)=>a+(r.caption_chars_total||0),0)/usernames.length) : 0,
    results,
  };
}

async function runBrightDataContent(username) {
  const started = Date.now();
  const key = process.env.BRIGHTDATA_API_KEY;
  const request = buildBrightDataProfileDiscovery(username);

  const first = await fetchJson(request.url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.body),
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

  const profile = normalize("brightdata", username, body, contentLatency);
  const content = extractContentMetrics(body, "brightdata");
  const avatarResult = await avatarCheck(profile.avatar_url);

  return {
    provider: "brightdata",
    username,
    success: content.posts_returned > 0,
    total_latency_ms: Date.now() - started,
    profile_latency_ms: contentLatency,
    content_latency_ms: contentLatency,
    avatar_latency_ms: avatarResult.avatar_latency_ms ?? null,
    avatar_downloadable: avatarResult.avatar_downloadable ?? false,
    profile_posts_count: profile.posts_count,
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


async function runApifyContentBatch(provider, usernames) {
  const started = Date.now();
  const isOfficial = provider === "apify_official";
  const actor = isOfficial ? "apify/instagram-profile-scraper" : "dami_studio/instagram-profile-scraper";
  const input = isOfficial
    ? { usernames, includeAboutSection: false }
    : { usernames, includeLatestPosts: true, maxItems: usernames.length, concurrency: Math.min(10, usernames.length) };

  const token = process.env.APIFY_API_TOKEN;
  const encodedActor = actor.replace("/", "~");
  const url = `https://api.apify.com/v2/acts/${encodedActor}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}&timeout=120`;
  const response = await fetchJson(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  }, 125000);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${JSON.stringify(response.body).slice(0,500)}`);

  let rows = summarizeApifyBatchRecords(provider, usernames, response.body);
  const avatarChecks = await Promise.all(rows.map((row) => avatarCheck(row.avatar_url)));
  const batchElapsed = Date.now() - started;
  rows = rows.map((row, i) => ({
    ...row,
    total_latency_ms: batchElapsed,
    actor_run_latency_ms: response.latencyMs,
    avatar_latency_ms: avatarChecks[i]?.avatar_latency_ms ?? null,
    avatar_downloadable: avatarChecks[i]?.avatar_downloadable ?? false,
    actor_runs_estimate: 1,
  }));

  return {
    provider,
    mode: "single_actor_run_10",
    summary: summarizeThroughputBatch(rows, batchElapsed, "single_actor_run_10"),
    results: rows,
  };
}

async function runThroughputProvider(provider) {
  const usernames = RETEST_SELECTED.map((row) => row.username);
  if (provider === "apify_official" || provider === "apify_community") {
    return runApifyContentBatch(provider, usernames);
  }
  if (provider !== "scrapecreators" && provider !== "hiker") {
    throw new Error("Unsupported throughput provider");
  }

  const started = Date.now();
  const rows = await mapLimit(RETEST_SELECTED, RETEST_SELECTED.length, async (row) => {
    try {
      return await runProviderContent(provider, row.username);
    } catch (error) {
      return {
        provider,
        username: row.username,
        success: false,
        total_latency_ms: Date.now() - started,
        error: String(error?.message || error),
        posts_returned: 0,
        captions_nonempty: 0,
        caption_chars_total: 0,
      };
    }
  });
  const batchElapsed = Date.now() - started;
  return {
    provider,
    mode: "parallel_10",
    summary: summarizeThroughputBatch(rows, batchElapsed, "parallel_10"),
    results: rows,
  };
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


const RETEST_SELECTED = [
  { username: "keniamaravasconcelos", group: "follower_only" },
  { username: "athaisfonsecaoficial", group: "following_only" },
  { username: "cassiogontijo", group: "follower_only" },
  { username: "quirogamarioluis", group: "follower_only" },
  { username: "jeanetvivian", group: "follower_only" },
  { username: "izadoramineira", group: "following_only" },
  { username: "laryssa.santos.9461", group: "follower_only" },
  { username: "cdreher10", group: "follower_only" },
  { username: "oxeindia.0", group: "following_only" },
  { username: "pierre_pnn", group: "mutual" },
];

function retestPage() {
  return new Response(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Meetango Reteste — Hiker + Bright Data</title>
<style>body{font-family:system-ui,sans-serif;max-width:1000px;margin:32px auto;padding:0 18px;color:#171717}input,button{font:inherit}input{padding:10px;width:min(520px,100%);box-sizing:border-box}button{padding:10px 14px;margin:5px 4px 5px 0;cursor:pointer}.card{border:1px solid #ddd;border-radius:10px;padding:16px;margin:16px 0}.muted{color:#666}pre{white-space:pre-wrap;word-break:break-word;background:#f6f6f6;padding:12px;max-height:360px;overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #ddd;text-align:left;padding:8px}progress{width:100%;height:20px}</style></head>
<body><h1>Meetango Social Benchmark</h1><h2>Reteste corretivo — Hiker + Bright Data</h2>
<div class="card"><b>BENCHMARK_RUN_KEY</b><br><input id="key" type="password" autocomplete="off" placeholder="Cole a chave"></div>
<div class="card"><h3>Mesmos 10 perfis</h3><div id="selected"></div></div>
<div class="card"><h3>Executar</h3><div id="buttons"></div><progress id="progress" max="10" value="0"></progress><div id="progressText" class="muted"></div></div>
<div class="card"><h3>Resumo</h3><div id="summary">Nenhum teste concluído.</div><button id="download" disabled>Baixar JSON do reteste</button></div>
<div class="card"><h3>Último resultado</h3><pre id="raw">Aguardando...</pre></div>
<script>
const providers=['hiker','brightdata'];
const selected=${JSON.stringify(RETEST_SELECTED)}; const allResults={}; const $=id=>document.getElementById(id); function key(){return $('key').value.trim()}
async function post(payload){const r=await fetch('/api/benchmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,key:key()})});const t=await r.text();let b;try{b=JSON.parse(t)}catch{b={raw:t}};if(!r.ok)throw new Error(JSON.stringify(b));return b}
function pct(vals,p){const a=vals.filter(Number.isFinite).sort((x,y)=>x-y);if(!a.length)return null;return a[Math.max(0,Math.min(a.length-1,Math.ceil(p*a.length)-1))]}
function summarize(rows){const l=rows.map(x=>Number(x.total_latency_ms)).filter(Number.isFinite);const s=rows.filter(x=>x.success).length;const sum=f=>rows.reduce((a,x)=>a+(Number(x[f])||0),0);return{attempts:rows.length,successes:s,failures:rows.length-s,min_latency_ms:l.length?Math.min(...l):null,median_latency_ms:pct(l,.5),p90_latency_ms:pct(l,.9),max_latency_ms:l.length?Math.max(...l):null,avg_latency_ms:l.length?Math.round(l.reduce((a,b)=>a+b,0)/l.length):null,avg_posts_returned:rows.length?+(sum('posts_returned')/rows.length).toFixed(2):0,avg_captions_nonempty:rows.length?+(sum('captions_nonempty')/rows.length).toFixed(2):0,avg_caption_chars_total:rows.length?Math.round(sum('caption_chars_total')/rows.length):0}}
function renderSummary(){const names=Object.keys(allResults);if(!names.length)return;let html='<table><tr><th>Fornecedor</th><th>Sucesso</th><th>Mediana</th><th>P90</th><th>Posts médios</th><th>Legendas médias</th><th>Chars médios</th></tr>';for(const n of names){const s=summarize(allResults[n]);html+='<tr><td>'+n+'</td><td>'+s.successes+'/'+s.attempts+'</td><td>'+s.median_latency_ms+' ms</td><td>'+s.p90_latency_ms+' ms</td><td>'+s.avg_posts_returned+'</td><td>'+s.avg_captions_nonempty+'</td><td>'+s.avg_caption_chars_total+'</td></tr>'}$('summary').innerHTML=html+'</table>';$('download').disabled=names.length<2}
async function runProvider(p){if(!key())return alert('Informe a BENCHMARK_RUN_KEY.');const btn=document.querySelector('[data-p="'+p+'"]');btn.disabled=true;const rows=[];$('progress').max=selected.length;$('progress').value=0;for(let i=0;i<selected.length;i++){const u=selected[i].username;$('progressText').textContent=p+': '+(i+1)+'/'+selected.length+' — @'+u;try{const r=await post({action:'content_one',provider:p,username:u});rows.push(r.result);$('raw').textContent=JSON.stringify(r,null,2)}catch(e){rows.push({provider:p,username:u,success:false,error:e.message,total_latency_ms:null});$('raw').textContent=e.message}$('progress').value=i+1}allResults[p]=rows;renderSummary();$('progressText').textContent=p+': concluído ('+rows.filter(x=>x.success).length+'/'+rows.length+').';btn.disabled=false}
$('selected').innerHTML='<table><tr><th>#</th><th>Perfil</th><th>Grupo</th></tr>'+selected.map((x,i)=>'<tr><td>'+(i+1)+'</td><td>@'+x.username+'</td><td>'+x.group+'</td></tr>').join('')+'</table>';
$('buttons').innerHTML=providers.map(p=>'<button data-p="'+p+'">'+p+'</button>').join('');document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>runProvider(b.dataset.p));
$('download').onclick=()=>{const payload={generated_at:new Date().toISOString(),retest:true,selected,providers:Object.fromEntries(Object.entries(allResults).map(([k,v])=>[k,{summary:summarize(v),results:v}]))};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-content-retest-hiker-brightdata.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
</script></body></html>`, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
}

function brightDataAsyncPage() {
  return new Response(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Meetango — Bright Data Async Batch</title>
<style>body{font-family:system-ui,sans-serif;max-width:900px;margin:32px auto;padding:0 18px;color:#171717}input,button{font:inherit}input{padding:10px;width:min(520px,100%);box-sizing:border-box}button{padding:10px 14px;margin:5px 4px 5px 0;cursor:pointer}.card{border:1px solid #ddd;border-radius:10px;padding:16px;margin:16px 0}.muted{color:#666}pre{white-space:pre-wrap;word-break:break-word;background:#f6f6f6;padding:12px;max-height:420px;overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #ddd;text-align:left;padding:8px}.big{font-size:28px;font-weight:700}</style></head>
<body><h1>Bright Data — teste assíncrono em lote</h1>
<div class="card"><b>BENCHMARK_RUN_KEY</b><br><input id="key" type="password" autocomplete="off" placeholder="Cole a chave"></div>
<div class="card"><h3>Objetivo</h3><p>Enviar os mesmos 10 perfis em <b>uma única coleta assíncrona</b>, receber o snapshot imediatamente e medir quanto tempo o lote leva para ficar pronto.</p></div>
<div class="card"><button id="run">Executar lote de 10</button><div id="state" class="muted">Aguardando.</div><div id="clock" class="big">0,0 s</div></div>
<div class="card"><h3>Resultado</h3><div id="summary">Ainda não executado.</div><button id="download" disabled>Baixar JSON</button><pre id="raw">Aguardando...</pre></div>
<script>
const selected=${JSON.stringify(RETEST_SELECTED)}; const $=id=>document.getElementById(id); let finalPayload=null; let timer=null;
function key(){return $('key').value.trim()}
async function post(payload){const r=await fetch('/api/benchmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,key:key()})});const t=await r.text();let b;try{b=JSON.parse(t)}catch{b={raw:t}};if(!r.ok)throw new Error(JSON.stringify(b));return b}
function fmt(ms){return (ms/1000).toFixed(1).replace('.',',')+' s'}
$('run').onclick=async()=>{if(!key())return alert('Informe a BENCHMARK_RUN_KEY.');$('run').disabled=true;$('download').disabled=true;finalPayload=null;$('state').textContent='Disparando lote assíncrono...';$('raw').textContent='';try{const start=await post({action:'brightdata_async_start'});const startedAt=start.started_at_ms;const snapshotId=start.snapshot_id;let polls=0;timer=setInterval(()=>{$('clock').textContent=fmt(Date.now()-startedAt)},250);$('state').textContent='Snapshot '+snapshotId+' criado em '+start.trigger_latency_ms+' ms. Aguardando ficar ready...';while(true){await new Promise(r=>setTimeout(r,5000));polls++;const status=await post({action:'brightdata_async_status',snapshot_id:snapshotId,batch_started_at_ms:startedAt,trigger_latency_ms:start.trigger_latency_ms});$('state').textContent='Status: '+status.status+' — consulta '+polls+' — '+fmt(Date.now()-startedAt);$('raw').textContent=JSON.stringify(status,null,2);if(status.status==='failed')throw new Error('Snapshot falhou: '+JSON.stringify(status.progress));if(status.status==='ready'){clearInterval(timer);const result=status.summary;finalPayload={generated_at:new Date().toISOString(),test:'brightdata_async_batch_10',snapshot_id:snapshotId,polls,poll_interval_ms:5000,...result};$('clock').textContent=fmt(result.batch_elapsed_ms);$('summary').innerHTML='<table><tr><th>Métrica</th><th>Resultado</th></tr><tr><td>Perfis</td><td>'+result.successes+'/'+result.attempts+'</td></tr><tr><td>Tempo do trigger</td><td>'+result.trigger_latency_ms+' ms</td></tr><tr><td>Tempo total do lote</td><td>'+fmt(result.batch_elapsed_ms)+'</td></tr><tr><td>Tempo efetivo / perfil</td><td>'+result.effective_ms_per_profile+' ms</td></tr><tr><td>Posts médios</td><td>'+result.avg_posts_returned+'</td></tr><tr><td>Legendas médias</td><td>'+result.avg_captions_nonempty+'</td></tr><tr><td>Chars médios</td><td>'+result.avg_caption_chars_total+'</td></tr></table>';$('download').disabled=false;break;}}}catch(e){if(timer)clearInterval(timer);$('state').textContent='Erro';$('raw').textContent=String(e?.message||e)}finally{$('run').disabled=false}};
$('download').onclick=()=>{if(!finalPayload)return;const blob=new Blob([JSON.stringify(finalPayload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-brightdata-async-batch.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
</script></body></html>`, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
}


function throughputPage() {
  return new Response(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Meetango Benchmark — Throughput</title>
<style>body{font-family:system-ui,sans-serif;max-width:1100px;margin:32px auto;padding:0 18px;color:#171717}input,button{font:inherit}input{padding:10px;width:min(520px,100%);box-sizing:border-box}button{padding:10px 14px;margin:5px 4px 5px 0;cursor:pointer}.card{border:1px solid #ddd;border-radius:10px;padding:16px;margin:16px 0}.muted{color:#666}.big{font-size:28px;font-weight:700;margin-top:8px}pre{white-space:pre-wrap;word-break:break-word;background:#f6f6f6;padding:12px;max-height:380px;overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #ddd;text-align:left;padding:8px}</style></head>
<body><h1>Meetango Social Benchmark</h1><h2>Throughput — mesmos 10 perfis</h2>
<div class="card"><b>BENCHMARK_RUN_KEY</b><br><input id="key" type="password" autocomplete="off" placeholder="Cole a chave"><p class="muted">Execute um fornecedor por vez. Os resultados ficam acumulados nesta página.</p></div>
<div class="card"><h3>Perfis</h3><div id="selected"></div></div>
<div class="card"><h3>Executar</h3><div id="buttons"></div><div id="state" class="muted">Aguardando.</div><div id="clock" class="big"></div></div>
<div class="card"><h3>Comparação</h3><div id="summary">Nenhum fornecedor concluído.</div><button id="download" disabled>Baixar JSON consolidado</button></div>
<div class="card"><h3>Último resultado</h3><pre id="raw">Aguardando...</pre></div>
<script>
const providers=['scrapecreators','hiker','brightdata','apify_official','apify_community'];
const selected=${JSON.stringify(RETEST_SELECTED)}; const allResults={}; const $=id=>document.getElementById(id); let timer=null;
function key(){return $('key').value.trim()}
function fmt(ms){return ms==null?'-':(ms/1000).toFixed(2).replace('.',',')+' s'}
async function post(payload){const r=await fetch('/api/benchmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,key:key()})});const t=await r.text();let b;try{b=JSON.parse(t)}catch{b={raw:t}};if(!r.ok)throw new Error(JSON.stringify(b));return b}
$('selected').innerHTML='<table><tr><th>#</th><th>Perfil</th><th>Grupo</th></tr>'+selected.map((x,i)=>'<tr><td>'+(i+1)+'</td><td>@'+x.username+'</td><td>'+x.group+'</td></tr>').join('')+'</table>';
function render(){const entries=Object.entries(allResults);if(!entries.length){$('summary').textContent='Nenhum fornecedor concluído.';return}let h='<table><tr><th>Fornecedor</th><th>Modo</th><th>Sucesso</th><th>Lote</th><th>Efetivo/perfil</th><th>Perfis/s</th><th>Mediana individual</th><th>Posts médios</th><th>Legendas médias</th><th>Chars médios</th></tr>';for(const [p,x] of entries){const s=x.summary||x;h+='<tr><td>'+p+'</td><td>'+(s.mode||'-')+'</td><td>'+s.successes+'/'+s.attempts+'</td><td>'+fmt(s.batch_elapsed_ms)+'</td><td>'+fmt(s.effective_ms_per_profile)+'</td><td>'+(s.throughput_profiles_per_sec??'-')+'</td><td>'+fmt(s.median_latency_ms)+'</td><td>'+s.avg_posts_returned+'</td><td>'+s.avg_captions_nonempty+'</td><td>'+s.avg_caption_chars_total+'</td></tr>'}h+='</table>';$('summary').innerHTML=h;$('download').disabled=entries.length!==providers.length}
async function runBright(){const start=await post({action:'brightdata_async_start'});const snapshotId=start.snapshot_id;const startedAt=start.started_at_ms;let polls=0;$('state').textContent='brightdata: snapshot '+snapshotId+' criado; aguardando...';while(true){await new Promise(r=>setTimeout(r,5000));polls++;const status=await post({action:'brightdata_async_status',snapshot_id:snapshotId,batch_started_at_ms:startedAt,trigger_latency_ms:start.trigger_latency_ms});$('state').textContent='brightdata: '+status.status+' — consulta '+polls;if(status.status==='failed')throw new Error(JSON.stringify(status));if(status.status==='ready'){return{provider:'brightdata',summary:status.summary,results:status.summary.results,snapshot_id:snapshotId,polls}}}}
async function runProvider(p){if(!key())return alert('Informe a BENCHMARK_RUN_KEY.');document.querySelectorAll('[data-p]').forEach(b=>b.disabled=true);const started=Date.now();timer=setInterval(()=>{$('clock').textContent=fmt(Date.now()-started)},250);$('state').textContent=p+': executando...';$('raw').textContent='';try{const out=p==='brightdata'?await runBright():await post({action:'throughput_provider',provider:p});allResults[p]=out;$('raw').textContent=JSON.stringify(out,null,2);$('state').textContent=p+': concluído';render()}catch(e){$('state').textContent=p+': erro';$('raw').textContent=String(e?.message||e)}finally{if(timer)clearInterval(timer);$('clock').textContent='';document.querySelectorAll('[data-p]').forEach(b=>b.disabled=false)}}
$('buttons').innerHTML=providers.map(p=>'<button data-p="'+p+'">'+p+'</button>').join('');document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>runProvider(b.dataset.p));
$('download').onclick=()=>{const payload={generated_at:new Date().toISOString(),test:'throughput_10_profiles_all_providers',selected,providers:allResults};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-throughput-benchmark.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
</script></body></html>`, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
}


function scrapeCreatorsOneCallPage() {
  const selected = RETEST_SELECTED;
  return new Response(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Meetango — ScrapeCreators 1 chamada</title>
<style>body{font-family:system-ui,sans-serif;max-width:1000px;margin:32px auto;padding:0 18px;color:#171717}input,button{font:inherit}input{padding:10px;width:min(520px,100%);box-sizing:border-box}button{padding:10px 14px;margin-top:10px;cursor:pointer}.card{border:1px solid #ddd;border-radius:10px;padding:16px;margin:16px 0}.muted{color:#666}pre{white-space:pre-wrap;word-break:break-word;background:#f6f6f6;padding:12px;max-height:420px;overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border-bottom:1px solid #ddd;text-align:left;padding:8px}</style></head>
<body><h1>ScrapeCreators — Profile 1 chamada</h1><p>Teste live sem cache: 10 perfis em paralelo usando apenas <code>/v1/instagram/profile</code>.</p>
<div class="card"><b>BENCHMARK_RUN_KEY</b><br><input id="key" type="password" autocomplete="off" placeholder="Cole a chave"><br><button id="run">Executar 10 perfis</button> <span id="state" class="muted"></span></div>
<div class="card"><h3>Resultado</h3><div id="summary" class="muted">Aguardando.</div><button id="download" disabled>Baixar JSON</button></div>
<div class="card"><pre id="raw">Aguardando...</pre></div>
<script>
const selected=${JSON.stringify(selected)};let result=null;const $=id=>document.getElementById(id);const fmt=ms=>ms==null?'-':(ms/1000).toFixed(2).replace('.',',')+' s';
async function post(payload){const r=await fetch('/api/benchmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,key:$('key').value.trim()})});const t=await r.text();let b;try{b=JSON.parse(t)}catch{b={raw:t}};if(!r.ok)throw new Error(JSON.stringify(b));return b}
$('run').onclick=async()=>{if(!$('key').value.trim())return alert('Informe a BENCHMARK_RUN_KEY.');$('run').disabled=true;$('state').textContent=' executando...';try{const out=await post({action:'throughput_provider',provider:'scrapecreators'});result=out;$('raw').textContent=JSON.stringify(out,null,2);const s=out.summary;$('summary').innerHTML='<table><tr><th>Sucesso</th><th>Lote</th><th>Efetivo/perfil</th><th>Mediana individual</th><th>Posts</th><th>Captions</th><th>Chars</th><th>Créditos</th></tr><tr><td>'+s.successes+'/'+s.attempts+'</td><td>'+fmt(s.batch_elapsed_ms)+'</td><td>'+fmt(s.effective_ms_per_profile)+'</td><td>'+fmt(s.median_latency_ms)+'</td><td>'+s.avg_posts_returned+'</td><td>'+s.avg_captions_nonempty+'</td><td>'+s.avg_caption_chars_total+'</td><td>'+out.results.reduce((a,x)=>a+(Number(x.credits_charged_total)||0),0)+'</td></tr></table>';$('download').disabled=false;$('state').textContent=' concluído';}catch(e){$('state').textContent=' erro';$('raw').textContent=String(e?.message||e)}finally{$('run').disabled=false}};
$('download').onclick=()=>{if(!result)return;const payload={generated_at:new Date().toISOString(),test:'scrapecreators_profile_one_call_live_10',selected,result};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-scrapecreators-onecall.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
</script></body></html>`,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
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


      if (action === "throughput_provider") {
        const provider = String(body?.provider || "");
        const allowed = ["scrapecreators", "hiker", "apify_official", "apify_community"];
        if (!allowed.includes(provider)) return json({ error: "unknown_throughput_provider", allowed }, 400);
        const started = Date.now();
        try {
          const result = await runThroughputProvider(provider);
          return json({ ok: true, server_elapsed_ms: Date.now() - started, ...result });
        } catch (error) {
          return json({ error: "throughput_provider_failed", provider, elapsed_ms: Date.now() - started, detail: String(error?.message || error) }, 502);
        }
      }

      if (action === "brightdata_async_start") {
        const usernames = RETEST_SELECTED.map((row) => row.username);
        const key = process.env.BRIGHTDATA_API_KEY;
        const req = buildBrightDataAsyncBatch(usernames);
        const startedAt = Date.now();
        const r = await fetchJson(req.url, {
          method: "POST",
          headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        }, 15000);
        if (!r.ok || !r.body?.snapshot_id) {
          return json({ error: "brightdata_trigger_failed", http_status: r.status, body: r.body }, 502);
        }
        return json({ ok: true, snapshot_id: r.body.snapshot_id, trigger_latency_ms: r.latencyMs, started_at_ms: startedAt, profiles: usernames.length });
      }

      if (action === "brightdata_async_status") {
        const snapshotId = String(body?.snapshot_id || "");
        if (!snapshotId) return json({ error: "missing_snapshot_id" }, 400);
        const key = process.env.BRIGHTDATA_API_KEY;
        const headers = { "Authorization": `Bearer ${key}` };
        const progress = await fetchJson(`https://api.brightdata.com/datasets/v3/progress/${encodeURIComponent(snapshotId)}`, { headers }, 15000);
        if (!progress.ok) return json({ error: "brightdata_progress_failed", http_status: progress.status, body: progress.body }, 502);
        const status = classifyBrightDataProgress(progress.body);
        if (status === "failed") return json({ ok: false, status, progress: progress.body });
        if (status !== "ready") return json({ ok: true, status, progress: progress.body });

        const result = await fetchJson(`https://api.brightdata.com/datasets/v3/snapshot/${encodeURIComponent(snapshotId)}?format=json`, { headers }, 20000);
        if (!result.ok) return json({ error: "brightdata_snapshot_failed", http_status: result.status, body: result.body }, 502);
        const startedAt = Number(body?.batch_started_at_ms || Date.now());
        const triggerLatency = Number(body?.trigger_latency_ms || 0);
        const usernames = RETEST_SELECTED.map((row) => row.username);
        const summary = summarizeBrightDataAsyncBatch(usernames, result.body, Date.now() - startedAt, triggerLatency);
        return json({ ok: true, status: "ready", summary });
      }

      return json({ error: "unknown_action", allowed: ["scout","content_one","throughput_provider","brightdata_async_start","brightdata_async_status"] }, 400);
    }

    const provider = url.searchParams.get("provider") || "env";

    if (provider === "stage2") return stage2Page();
    if (provider === "retest") return retestPage();
    if (provider === "brightdata-async") return brightDataAsyncPage();
    if (provider === "throughput") return throughputPage();
    if (provider === "scrapecreators-onecall") return scrapeCreatorsOneCallPage();

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

