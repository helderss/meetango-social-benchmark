const RUN_KEY = process.env.BENCHMARK_RUN_KEY;
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
const NVIDIA_MODEL = "nvidia/nemotron-mini-4b-instruct";
const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

const PROFILES = [
  {
    "username": "keniamaravasconcelos",
    "posts": [
      "Do story para o feed celebrando a vida da nossa amiga @arletefonseca35.🎂🎈🎁🎉🥳\nE para celebrar a nossa amizade de 40 anos.",
      "Mais um pedal com.@evan.1703 , na estrada do Rio do Rastro, indo para a cachoeira do Saiqui.\nLugar lindo.",
      "Jabuticaba no vaso , que delícia, carregadinho.",
      "Conhecer Londres com as amigas foi a melhor escolha delas! E a segunda foi nos deixar fazer parte dessa “bagunça organizada”!\nMuito obrigada meninas! Voltem sempre!",
      "Relembrando os momentos bons de treinos de corrida com profissionais de excelência , pessoas ímpar que conheci.\n@mdsports.div \n@marcelodaldeganmd \n#treinosdecorrida",
      "Rock Estrela , dia 20/07 com essa galera super animada.\nFoi excelente! \n@giovanna_mmesquita"
    ]
  },
  {
    "username": "athaisfonsecaoficial",
    "posts": [
      "O que alguém tenta colocar sobre nós, muitas vezes, diz muito mais sobre quem essa pessoa é do que sobre quem somos.",
      "🫶🏻🐶",
      "Seja sempre a sua prioridade 🪄✨#autocura🙏 #autocuidado❤️"
    ]
  },
  {
    "username": "cassiogontijo",
    "posts": [
      "Obrigada @cassiogontijo por nos levar de volta a 2017 e reviver esse maravilhoso projeto. Estar com você é muito especial para toda equipe da Ana Luiza Decorações.💐👏\n\nRepost from @cassiogontijo\n•\nArrestem a foto para verem todas as fotos ......Comemorando e relembrando um ano da @casacorminas 2017 com o projeto do LOFT  @lineadoro @sumisurabh @qualitydecoracoes @iluminarbrasil @hificlubautomacao @sandraemarcio @galeriadotart @celma_albuquerque @belissimovallve @mariecamilletapetes @analuizadecoracoes @cinexinovacao",
      "Dia de #TBT com esse projeto incrível de 400m² em Angra dos Reis! \n\n🌊🏡Localizada no Condomínio do Frade, essa casa une sofisticação, conforto e uma vista de tirar o fôlego. Cada detalhe foi planejado para aproveitar ao máximo o clima e a energia da Costa Verde.\n\nGostou do resultado? Deixe seu comentário! 👇\n\n#ArquiteturaBrasileira  #Decor #CasaEmAngra LuxuryHomes Praia",
      "Na montagem desta casa, escolhemos os quadros a dedo. O acervo da antiga casa está completando esse novo projeto, trazendo memórias que se transformam e ganham um novo significado por aqui. Cada parede conta um capítulo da história dos clientes . ✨🖼️ \n#arte #decoração #casacomdecoração #arquitetura",
      "🏢 Modernização e Valorização Comercial.\n\nNo #TBT de hoje, mostramos como transformamos este centro comercial (projeto original de 2012) através de um retrofit de fachada.\n\nCom o uso de elementos contemporâneos como o ripado em alumínio amadeirado e uma iluminação super adequada, conseguimos atualizar a estética do prédio sem perder a sua identidade. O toque final ficou por conta do paisagismo nas jardineiras, que traz mais vida e atrai o olhar de quem passa.\n\n#retrofit #arquiteturacomercial #fachadasmodernas #antesedepoisarquitetura",
      "Vem comigo conhecer uma sala elegante; parte da casa onde viveu Afonso Pena, o sexto presidente da República!\n\nMesclando passado e presente, num casarão histórico na Av. João Pinheiro em Belo Horizonte, MG, este ambiente - sala de estar e jantar com varanda - faz parte da mostra Modernos Eternos 2025 assinado pelo arquiteto Cássio Gontijo que, com respeito e sensibilidade, soube através de suas escolhas materiais, expressar a alma mineira, reinterpretando-a com seu olhar contemporâneo.\n\nMe conta nos comentários o que mais gostou? 🤎\n\nSala de Estar e Jantar\nPor: @cassiogontijo \nNa Modernos Eternos 2025\n\nEste post faz parte de REEDIÇÕES",
      "O ambiente Raízes de Ouro, assinado por Cássio Gontijo (@cassiogontijo) para a Modernos Eternos (@modernoseternosbh) é um resgate de uma parte da história de Minas Gerais, que se entrelaça com a extração do ouro, atividade que marcou a formação econômica, cultural e social do estado. \n\nO espaço reúne móveis de época harmonizados com peças contemporâneas, além de joias e objetos desenvolvidos especialmente para o projeto.\n\nArrematando o ambiente, espelhos Vintage Vidros, que não poderiam ter sido escolhidos em outra tonalidade que não o bronze.\n\nFotografia capa: Gustavo Xavier \n\n📍 A Modernos Eternos 2026 acontece até o dia 12 de julho de 2026, na Escola Estadual Pedro II (Av. Professor Alfredo Balena, 523, Centro).\n\n#vintagevidros #design #arquitetura #vidros #modernoseternos2026"
    ]
  },
  {
    "username": "quirogamarioluis",
    "posts": [
      "🇺🇸⚽ Match day at home! The flag is ready, the family is ready, and the nerves are already kicking in! 😅\n\nMy prediction: 🇺🇸 USA 3 vs 1 Belgium 🇧🇪\n\nGoals from Pulisic, Balogun, and Weah! 💥\n\nTime to believe! Let’s make it to the quarterfinals! 🇺🇸🔥\n\nWhat’s your prediction? 👇⚽",
      "Brazil vs Scotland at the Hard Rock Stadium in Miami!\n\nSome memories last a lifetime. Watching a World Cup game with my son is one of them. An unforgettable night!\n\nMemories > Things\n\n#WorldCup2026",
      "🪼 Just visited the Jellyfish Museum in Pompano Beach and it was mesmerizing! 🌊✨\n\n1️⃣ The museum is the first jellyfish-only museum in the United States! 🇺🇸🪼 \n\n2️⃣ Jellyfish have existed for over 500 million years — even before dinosaurs roamed Earth! 🦖🌍 \n\n3️⃣ Not all “jellyfish” are true jellyfish! Some creatures that look like them, like the Portuguese Man-of-War, are actually different types of marine animals. 🤯",
      "My first visit to Hawaii: \n\n🐢 Hawaiian green sea turtles, called “Honu,” are considered symbols of good luck and long life — and Maui is one of the best places to spot them!\n\n🌋 Maui’s black volcanic rocks were created by ancient lava flows from the island’s volcanoes thousands of years ago.\n\n🌈 Maui is nicknamed “The Valley Isle” because two massive volcanoes formed a giant valley in the middle of the island.",
      "Fun fact from our family trip to Washington, D.C.: the steps at the Lincoln Memorial where we took pictures are the exact same ones where Martin Luther King Jr. gave his famous “I Have a Dream” speech in 1963. History and family memories all in one place!",
      "Had a blast at the museum today! From interactive exhibits to fascinating artifacts, there was something for everyone. It was fun and an educational day for my kids too! #MuseumFun"
    ]
  },
  {
    "username": "jeanetvivian",
    "posts": [
      "Com brilho nos olhos e o coração cheio de orgulho eu agradeço imensamente a Deus por esse momento único, comemoração dos 86 anos da melhor mãe do mundo! \nA maior herança que levo para minha vida são os exemplos de bondade, amor , carinho, amizade e presença. Que Deus continue abençoando, inspirando e capacitando essa mãe tão especial que exerce um papel fundamental nas nossas vidas .. 🙏🏻♥️",
      "Uma tarde abençoada cuidando das plantinhas na @casavivian!",
      "Dia muito feliz que vou guardar no meu coração o aniversário do @helderh , junto das amigas  e queridos alunos que passaram pelo Pollyana!",
      "É um “Presente de Deus” poder comemorar o aniversário do Thiago meu neto caçula!",
      "Día de treinar com o professor @danielchicao_fisioterapeuta!Um excelente profissional ..",
      "Momentos felizes em família!"
    ]
  },
  {
    "username": "izadoramineira",
    "posts": [
      "🍃🍀",
      "Hoje o meu coração transborda de gratidão. Há exatamente 13 anos, às 05:49 da manhã, no dia 29/06/2013, Deus me presenteou com o maior amor da minha vida. Você chegou pesando 4,495 kg, forte, linda e cheia de vida, transformando completamente a minha história.\n\nEu ainda era uma adolescente quando você nasceu. Confesso que existiram desafios, medos e muitas dúvidas, mas desde o instante em que olhei para o seu rostinho, entendi que Deus tinha me confiado a missão mais importante da minha vida: ser sua mãe. E, desde então, cada sorriso seu, cada abraço e cada conquista fizeram tudo valer a pena.\n\nHoje olho para você e vejo uma menina linda, inteligente, educada, carinhosa e com um coração enorme. É até engraçado pensar que agora você já está maior do que eu! O tempo passou tão rápido… Parece que foi ontem que eu te carregava nos braços, e hoje vejo uma jovem crescendo, construindo sua própria personalidade e iluminando a vida de todos ao seu redor.\n\nÉ verdade que às vezes você é um pouquinho teimosinha (e muito! 😂), mas isso não diminui em nada o orgulho que sinto de você. Suas qualidades são muito maiores: você é batalhadora, amorosa, generosa, forte e extremamente abençoada. Tenho",
      "🍀❤️Inteligência para aprender, força para continuar e fé em Deus para acreditar que o impossível também acontece. 🍃",
      "You are pure Art 🌹✨💋",
      "De personalidade forte e brilho nos olhos 🌟✨💖💋",
      "Viver é diferente de estar vivo ❤️🫶🏻"
    ]
  },
  {
    "username": "laryssa.santos.9461",
    "posts": [
      "Aceite as pessoas como são. \n\nE distribua os “cargos” de acordo com o que elas realmente te entregam. \n\nVocê decide se terá paz ou dor de cabeça na sua empresa chamada vida!",
      "“Eu ainda não visitei todos os lugares, mas está na minha lista.” (Susan Sontag)",
      "Entre Dickens, Virgínia Woolf e o tempo que não passa igual aqui.",
      "Rio Tâmisa: 346km de história.\n\n#tâmisa #travelling #reinounido🇬🇧",
      "Vim pra Londres e descobri que o tempo fecha mais rápido que meu humor 🤣 \nAinda assim, linda demais!!\n\n#londres #travelling #inglaterra🇬🇧",
      "Estrutura assistencial é o que separa clínica comum de clínica referência. \n\nEm lentes de contato, isso significa: acompanhamento, avaliação individualizada e responsabilidade real. \n\nCuidar da visão é proteger como o paciente vive. \n\nPor isso, no Centro Oftalmológico de Divinópolis, acolhimento e segurança caminham juntos. \n\nPorque acolher também é proteger. \n#gestãodeclínicas #oftalmologia #consultoria #centrooftalmologicodedivinopolis #gestaodeatendimento"
    ]
  },
  {
    "username": "cdreher10",
    "posts": [
      "Minha mãe, em 2001, aos 58. Não é porque é a minha mãe, mas ela é linda, né?",
      "Abrindo o baú digital de fotos antigas",
      "No creo en brujas, pero que las hay, las hay.",
      "Passeio na Lagoa da Conceição, Lagoa Iate Clube e Restaurante Cabral na Costa da Lagoa",
      "Passeio no sul da ilha em Armação e Pantano do Sul, Florianópolis",
      "Socó Dorminhoco, à espera de 'petiscos' dados pelos turistas."
    ]
  },
  {
    "username": "oxeindia.0",
    "posts": [
      "🌊🌸",
      "Believe in the power of your dreams.",
      "Cabelo solto,vento no rosto,o som ta ligado,Deus do meu lado.🙏⛅💬",
      "Felicidade é um fim de tarde, olhando o mar. 🌅💙\n#morena #praia #fotos #paz #amorproprio #mar #fotografia"
    ]
  },
  {
    "username": "pierre_pnn",
    "posts": [
      "August 2026, Indonesia so far… 3weeks and so much things already only in Java Island.\nThanks to @volpro.id , @garancebrnt , @lydia.cat77 for the volunteering, @pospantaucafe for the good times and @bina.cimaja for the surf.\nA lot of new friends, and memories.\n\n#travel #indonesia #volunteer #turtle westjava",
      "Arya’s Surfcamp — 2 Days, 1 Night | Cikembang  Point \n22–23 August 2026\n\nThank you  @pierre_pnn @deoamagreg , Rose , Nikolas , Gaby  Adrian for choosing Arya’s Surfcamp \n\nBig thanks to @bina.cimaja & the team for guiding the session, and @tierryhakim.jpg  for the amazing video! \n\nReady to ride your first wave? Come surf with us! #aryasurfcamp #surfindonesia #surfcampindonesia #surfing #westjavasurf",
      "Il a reniflé un bloc de savon en croyant que c’était du sh**😂\n\nHugo et Pierre ne se connaissaient pas avant ce trip. Et ils se retrouveront pour la prochaine au Portugal.🇵🇹 \n\nCe qui les a marqués ?\n\nLa cuisine de Latifa et Houssin 🫶\n\nLeur progression en surf alors qu’ils débutaient à peine\nEt cette ambiance de surfcamp qu’on ne trouve nulle part ailleurs\n\nC’est ça Surfexplorer.\nL’humain avant le surf.\n\n👉 Le lien en commentaire pour le prochain trip Maroc\n\n#surf#surfmaroc#surftrip#maroc#surfexplorer",
      "April 26, Morocco Random Photos,\nSurf Search, Shoukran Khoyas…\nI wanted to stay there, great surf, laid back feeling, slow life and great new friends.\nAnother Warm and welcoming country…\n\n#morocco #travel #surf #shoukran #surfcamp",
      "ありがとうございます\nFebruary 26, Japan Random Photos,\nArigato Bros,\nGreat country, good surf, snowboard, hikes, meets, meals, and good times…\n(Le Pipou.)\n\n#japan #travel #pow #sakura #bros",
      "Touring Random Photos / Genration Celine Remplacement\n\nQuatrième tournée de moi, remplacement d’1 courte semaine, très tres cool! Et ça fait du bien de revenir sur la route et à la bougeotte.\n\n——————————————————\nFourth tour for me, replacement for one short week, that was really cool! And good to be back on the road.\n\n#touringlife #lightguy #shows #bloc #squat"
    ]
  }
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export function selectSixPosts(captions) {
  return (Array.isArray(captions) ? captions : [])
    .filter((x) => typeof x === "string" && x.trim())
    .map((x) => x.trim())
    .slice(0, 6);
}

export function buildInterestPrompt(username, captions) {
  const posts = selectSixPosts(captions);
  const numbered = posts.map((p, i) => `POST ${i + 1}:\n${p}`).join("\n\n");
  return `Você está construindo o perfil conversacional do Meetango Connections.

Objetivo: identificar APENAS assuntos não sensíveis que possam ajudar duas pessoas de um mesmo evento a descobrir bons temas de conversa.

Regras obrigatórias:
1. Use somente evidência explícita dos posts fornecidos. Não invente, não complete lacunas e não transforme uma frase isolada em traço permanente da pessoa.
2. NÃO inferir nem registrar atributos sensíveis ou protegidos, incluindo religião/crença, saúde ou condição médica pessoal, política/ideologia, raça/etnia, orientação sexual/vida sexual, deficiência, histórico criminal ou situação financeira.
3. Um assunto profissional publicamente mencionado pode ser registrado como área de conhecimento (por exemplo gestão de clínicas), mas NÃO como condição pessoal de saúde.
4. Lugares só entram quando forem experiência/viagem/atividade observável; não inferir nacionalidade, residência ou origem.
5. Prefira poucos itens com boa evidência a muitos itens fracos.
6. Responda SOMENTE JSON válido, sem markdown e sem comentários.
7. evidence_posts deve conter apenas números dos posts que sustentam diretamente o item.
8. Escreva os rótulos e hooks em português do Brasil, preservando nomes próprios quando necessário.

Formato exato:
{
  "topics": [{"label":"string","confidence":0.0,"evidence_posts":[1]}],
  "activities": [{"label":"string","confidence":0.0,"evidence_posts":[1]}],
  "skills_knowledge": [{"label":"string","confidence":0.0,"evidence_posts":[1]}],
  "experiences_places": [{"label":"string","confidence":0.0,"evidence_posts":[1]}],
  "conversation_hooks": [{"text":"string","evidence_posts":[1]}],
  "insufficient_data": false
}

Limites: no máximo 8 topics, 6 activities, 6 skills_knowledge, 8 experiences_places e 6 conversation_hooks.
Se os dados forem pobres, retorne listas curtas e marque insufficient_data=true.

Usuário de referência: @${username}

${numbered}`;
}

export function buildNvidiaRequest(username, captions) {
  return {
    url: NVIDIA_URL,
    body: {
      model: NVIDIA_MODEL,
      messages: [
        {
          role: "system",
          content: "Extraia um perfil conversacional conservador, baseado em evidências e sem inferência de atributos sensíveis. Responda somente JSON válido.",
        },
        { role: "user", content: buildInterestPrompt(username, captions) },
      ],
      temperature: 0.1,
      top_p: 0.9,
      max_tokens: 900,
      stream: false,
    },
  };
}

export function parseModelJson(raw) {
  if (typeof raw !== "string") throw new Error("model_output_not_string");
  let text = raw.trim();
  text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first >= 0 && last > first) text = text.slice(first, last + 1);
  return JSON.parse(text);
}

function arr(obj, key) {
  return Array.isArray(obj?.[key]) ? obj[key] : null;
}

export function validateInterestProfile(profile, postCount) {
  const errors = [];
  if (!profile || typeof profile !== "object" || Array.isArray(profile)) {
    return { valid: false, errors: ["root_not_object"] };
  }
  const listKeys = ["topics", "activities", "skills_knowledge", "experiences_places", "conversation_hooks"];
  for (const key of listKeys) {
    const list = arr(profile, key);
    if (!list) {
      errors.push(`${key}_not_array`);
      continue;
    }
    for (const item of list) {
      if (!item || typeof item !== "object") {
        errors.push(`${key}_item_not_object`);
        continue;
      }
      const evidence = Array.isArray(item.evidence_posts) ? item.evidence_posts : [];
      if (!evidence.length) errors.push(`${key}_missing_evidence`);
      for (const idx of evidence) {
        if (!Number.isInteger(idx) || idx < 1 || idx > postCount) {
          errors.push(`${key}_bad_evidence_index_${idx}`);
        }
      }
    }
  }
  if (typeof profile.insufficient_data !== "boolean") errors.push("insufficient_data_not_boolean");
  return { valid: errors.length === 0, errors };
}

export function summarizeProfile(profile) {
  if (!profile || typeof profile !== "object") return null;
  const labels = (key, field = "label") => (Array.isArray(profile[key]) ? profile[key] : [])
    .map((x) => x?.[field])
    .filter(Boolean);
  return {
    topics: labels("topics"),
    activities: labels("activities"),
    skills_knowledge: labels("skills_knowledge"),
    experiences_places: labels("experiences_places"),
    conversation_hooks: labels("conversation_hooks", "text"),
    insufficient_data: profile.insufficient_data === true,
  };
}

async function runOne(username) {
  const row = PROFILES.find((p) => p.username === username);
  if (!row) return { ok: false, error: "unknown_username" };
  const posts = selectSixPosts(row.posts);
  if (!NVIDIA_API_KEY) return { ok: false, error: "missing_NVIDIA_API_KEY" };

  const request = buildNvidiaRequest(username, posts);
  const started = Date.now();
  const response = await fetch(request.url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${NVIDIA_API_KEY}`,
      accept: "application/json",
    },
    body: JSON.stringify(request.body),
  });
  const latencyMs = Date.now() - started;
  const text = await response.text();
  let payload;
  try { payload = JSON.parse(text); }
  catch { payload = { raw_http_text: text.slice(0, 4000) }; }

  if (!response.ok) {
    return {
      ok: false,
      username,
      model: NVIDIA_MODEL,
      latency_ms: latencyMs,
      http_status: response.status,
      error: payload,
    };
  }

  const modelText = payload?.choices?.[0]?.message?.content ?? "";
  let parsed = null;
  let parseError = null;
  let validation = { valid: false, errors: ["not_parsed"] };
  try {
    parsed = parseModelJson(modelText);
    validation = validateInterestProfile(parsed, posts.length);
  } catch (e) {
    parseError = String(e?.message || e);
  }

  return {
    ok: true,
    username,
    model: NVIDIA_MODEL,
    source: "saved_scrapecreators_onecall_v9",
    posts_supplied: posts.length,
    input_chars: posts.reduce((n, p) => n + p.length, 0),
    latency_ms: latencyMs,
    usage: payload?.usage ?? null,
    json_parsed: Boolean(parsed),
    schema_valid: validation.valid,
    validation_errors: validation.errors,
    parse_error: parseError,
    profile: parsed,
    profile_summary: summarizeProfile(parsed),
    raw_model_output: modelText,
  };
}

function page() {
  const safeProfiles = PROFILES.map((p) => ({ username: p.username, posts: selectSixPosts(p.posts).length }));
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Meetango · Small Model Benchmark</title>
<style>
  body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:920px;margin:32px auto;padding:0 18px;color:#18181b;background:#fafafa}
  h1{font-size:28px;margin-bottom:6px}.muted{color:#666}.card{background:#fff;border:1px solid #ddd;border-radius:14px;padding:18px;margin:16px 0}
  input,button{font:inherit;padding:10px 12px;border-radius:9px;border:1px solid #bbb}button{cursor:pointer;background:#111;color:#fff;border-color:#111}button:disabled{opacity:.5;cursor:not-allowed}
  .row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.ok{color:#087a32}.bad{color:#b42318}.pending{color:#666}pre{white-space:pre-wrap;word-break:break-word;background:#f4f4f5;padding:12px;border-radius:10px;max-height:320px;overflow:auto}
  table{width:100%;border-collapse:collapse}td,th{padding:8px;border-bottom:1px solid #eee;text-align:left;font-size:14px}
</style>
</head><body>
<h1>Meetango · menor modelo viável</h1>
<p class="muted">Modelo inicial: <b>Nemotron Mini 4B Instruct</b> <span class="muted">(${NVIDIA_MODEL})</span> · 6 posts no máximo · zero novas chamadas de scraping.</p>
<div class="card">
  <div class="row"><b>NVIDIA_API_KEY no servidor:</b> <span class="${NVIDIA_API_KEY ? "ok" : "bad"}">${NVIDIA_API_KEY ? "configurada" : "NÃO configurada"}</span></div>
  <div class="row" style="margin-top:12px"><input id="key" type="password" placeholder="BENCHMARK_RUN_KEY" autocomplete="off" /><button id="run">Executar 10 perfis</button><button id="download" disabled>Baixar JSON</button></div>
  <p id="status" class="muted">Pronto.</p>
</div>
<div class="card"><table><thead><tr><th>Perfil</th><th>Posts</th><th>Status</th><th>Latência</th><th>JSON</th></tr></thead><tbody id="rows"></tbody></table></div>
<div class="card"><b>Último resultado</b><pre id="detail">—</pre></div>
<script>
const profiles=${JSON.stringify(safeProfiles)};
const rows=document.getElementById('rows');
const statusEl=document.getElementById('status');
const detail=document.getElementById('detail');
const runBtn=document.getElementById('run');
const dlBtn=document.getElementById('download');
let results=[];
function render(){rows.innerHTML=profiles.map((p,i)=>{const r=results[i];const st=!r?'pendente':r.ok?(r.schema_valid?'ok':'revisar'):'erro';return '<tr><td>@'+p.username+'</td><td>'+p.posts+'</td><td>'+st+'</td><td>'+(r?.latency_ms?Math.round(r.latency_ms/100)/10+'s':'—')+'</td><td>'+(r?.json_parsed===true?'sim':r?'não':'—')+'</td></tr>'}).join('')}
render();
runBtn.onclick=async()=>{
  const run_key=document.getElementById('key').value;
  if(!run_key){statusEl.textContent='Informe BENCHMARK_RUN_KEY.';return}
  results=[]; render(); dlBtn.disabled=true; runBtn.disabled=true;
  for(let i=0;i<profiles.length;i++){
    statusEl.textContent='Processando '+(i+1)+'/10: @'+profiles[i].username;
    try{
      const res=await fetch(location.href,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({run_key,action:'interest_profile',username:profiles[i].username})});
      const body=await res.json(); results[i]=body; detail.textContent=JSON.stringify(body,null,2);
    }catch(e){results[i]={ok:false,username:profiles[i].username,error:String(e)}}
    render();
  }
  runBtn.disabled=false; dlBtn.disabled=false; statusEl.textContent='Concluído: '+results.filter(r=>r?.ok).length+'/10 respostas recebidas.';
};
dlBtn.onclick=()=>{
  const out={generated_at:new Date().toISOString(),test:'meetango_small_model_interest_profile_v1',model:'${NVIDIA_MODEL}',source:'saved_scrapecreators_onecall_v9',normalization:'up_to_6_most_recent_nonempty_captions',results};
  const blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='meetango-ai-nemotron-mini-4b-interest.json';a.click();URL.revokeObjectURL(a.href);
};
</script></body></html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET") {
      if (url.searchParams.get("provider") === "ai-small") return html(page());
      return json({
        ok: true,
        benchmark: "meetango_small_model_interest_profile_v1",
        model: NVIDIA_MODEL,
        profiles: PROFILES.length,
        nvidia_api_key_configured: Boolean(NVIDIA_API_KEY),
        page: "?provider=ai-small",
      });
    }

    if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);
    let body;
    try { body = await request.json(); }
    catch { return json({ ok: false, error: "invalid_json" }, 400); }
    if (!RUN_KEY || body?.run_key !== RUN_KEY) return json({ ok: false, error: "unauthorized" }, 401);
    if (body?.action !== "interest_profile") return json({ ok: false, error: "unknown_action" }, 400);
    return json(await runOne(body?.username));
  },
};
