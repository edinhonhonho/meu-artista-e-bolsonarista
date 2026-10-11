// Base de dados do catálogo.
// Cada registro descreve um posicionamento PÚBLICO e DECLARADO, com a(s) reportagem(ns) que o sustentam.
// lado: "bolsonaro" | "lula"
// periodo: eleições em que o apoio foi registrado (2018, 2022, 2026)
// nota: ressalvas (mudança de posição, apoio só a Lula e não ao PT, citado só em listas etc.)
// Para corrigir ou acrescentar, veja o README.md.
window.ARTISTAS = [
  // ─────────────── BOLSONARO ───────────────
  {
    nome: "Gusttavo Lima",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Declarou apoio à reeleição de Jair Bolsonaro em encontro com sertanejos no Palácio da Alvorada (17/10/2022), citando a defesa da família, e convocou seguidores a votar nele.",
    fontes: [
      { titulo: "Gusttavo Lima, Leonardo e Chitãozinho declaram apoio a Bolsonaro", url: "https://www.poder360.com.br/eleicoes/gusttavo-lima-leonardo-e-chitaozinho-declaram-apoio-a-bolsonaro/", veiculo: "Poder360" },
      { titulo: "Em encontro no Palácio da Alvorada, sertanejos declaram apoio a Bolsonaro", url: "https://www.diariodepernambuco.com.br/noticia/politica/2022/10/em-encontro-no-palacio-da-alvorada-sertanejos-declaram-apoio-a-bolson.html", veiculo: "Diario de Pernambuco" }
    ]
  },
  {
    nome: "Leonardo",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "No Alvorada (17/10/2022), disse apoiar Bolsonaro \"do fundo do coração\", criticou os \"isentões\" e pediu comparecimento às urnas no segundo turno.",
    fontes: [
      { titulo: "Gusttavo Lima, Leonardo e Chitãozinho declaram apoio a Bolsonaro", url: "https://www.poder360.com.br/eleicoes/gusttavo-lima-leonardo-e-chitaozinho-declaram-apoio-a-bolsonaro/", veiculo: "Poder360" }
    ]
  },
  {
    nome: "Chitãozinho",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Disse no Alvorada que acompanha Bolsonaro desde o primeiro mandato e pediu votos para ele e para Tarcísio de Freitas. Seu parceiro de dupla, Xororó, não foi ao encontro.",
    nota: "O sobrinho, Junior Lima, criticou publicamente o apoio (\"toda família tem um tiozão do Zap\").",
    fontes: [
      { titulo: "Gusttavo Lima, Leonardo e Chitãozinho declaram apoio a Bolsonaro", url: "https://www.poder360.com.br/eleicoes/gusttavo-lima-leonardo-e-chitaozinho-declaram-apoio-a-bolsonaro/", veiculo: "Poder360" },
      { titulo: "\"Tiozão do Zap\", diz Junior sobre apoio de Chitãozinho a Bolsonaro", url: "https://www.opovo.com.br/vidaearte/2022/10/19/tiozao-do-zap-diz-junior-sobre-apoio-de-chitaozinho-a-bolsonaro.html", veiculo: "O Povo" }
    ]
  },
  {
    nome: "Zezé Di Camargo",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022, 2026],
    resumo: "Esteve no encontro do Alvorada em 2022. Em abril de 2026, gravou vídeo com Flávio Bolsonaro com mensagem de apoio a Jair Bolsonaro, então em prisão domiciliar: \"a gente está com você\".",
    nota: "Em reportagem de data incerta, afirmou: \"Não sou Bolsonaro, não sou Lula, sou o Brasil\". Também criticou o SBT por receber Lula (e se desculpou em dez/2025).",
    fontes: [
      { titulo: "Flávio grava vídeo com Zezé Di Camargo para Bolsonaro", url: "https://www.poder360.com.br/poder-midia/flavio-grava-video-com-zeze-di-camargo-para-bolsonaro/", veiculo: "Poder360" },
      { titulo: "Em encontro no Palácio da Alvorada, sertanejos declaram apoio a Bolsonaro", url: "https://www.diariodepernambuco.com.br/noticia/politica/2022/10/em-encontro-no-palacio-da-alvorada-sertanejos-declaram-apoio-a-bolson.html", veiculo: "Diario de Pernambuco" },
      { titulo: "\"Nem Bolsonaro nem Lula, sou o Brasil\", diz Zezé Di Camargo", url: "https://www.maisgoias.com.br/entretenimento/nem-bolsonaro-nem-lula-sou-o-brasil-diz-zeze-di-camargo-lider-dos-sertanejos-que-foram-apoiar-candidato-a-reeleicao/", veiculo: "Mais Goiás" }
    ]
  },
  {
    nome: "Fernando (Fernando & Sorocaba)",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Participou do encontro no Alvorada e foi descrito como declarando apoio a Bolsonaro no segundo turno de 2022.",
    nota: "O posicionamento de Sorocaba, parceiro de dupla, não foi localizado.",
    fontes: [
      { titulo: "Em encontro no Palácio da Alvorada, sertanejos declaram apoio a Bolsonaro", url: "https://www.diariodepernambuco.com.br/noticia/politica/2022/10/em-encontro-no-palacio-da-alvorada-sertanejos-declaram-apoio-a-bolson.html", veiculo: "Diario de Pernambuco" }
    ]
  },
  {
    nome: "Sula Miranda",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Presente no encontro de sertanejos com Bolsonaro no Alvorada, em 17/10/2022.",
    fontes: [
      { titulo: "Em encontro no Palácio da Alvorada, sertanejos declaram apoio a Bolsonaro", url: "https://www.diariodepernambuco.com.br/noticia/politica/2022/10/em-encontro-no-palacio-da-alvorada-sertanejos-declaram-apoio-a-bolson.html", veiculo: "Diario de Pernambuco" }
    ]
  },
  {
    nome: "Bruno & Marrone",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Marrone esteve no encontro do Alvorada; Bruno cantou o jingle \"Capitão do Povo\" e publicou o momento nas redes. A dupla também organizou partida de futebol com Bolsonaro como jogador.",
    fontes: [
      { titulo: "Em encontro no Palácio da Alvorada, sertanejos declaram apoio a Bolsonaro", url: "https://www.diariodepernambuco.com.br/noticia/politica/2022/10/em-encontro-no-palacio-da-alvorada-sertanejos-declaram-apoio-a-bolson.html", veiculo: "Diario de Pernambuco" },
      { titulo: "Após ouvir coro de \"Fora, Bolsonaro\", Gusttavo Lima jogará futebol com presidente", url: "https://www.correiobraziliense.com.br/diversao-e-arte/2021/12/4974163-apos-ouvir-coro-de-fora-bolsonaro-gusttavo-lima-jogara-futebol-com-presidente.html", veiculo: "Correio Braziliense" }
    ]
  },
  {
    nome: "Henrique & Juliano",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Apontados como apoiadores de Bolsonaro desde 2019. Em outubro de 2022 foram recebidos por ele em Brasília e ganharam camisas da seleção com o número 22.",
    fontes: [
      { titulo: "Bolsonaro presenteia dupla sertaneja Henrique & Juliano durante encontro", url: "https://abcdjornal.com.br/bolsonaro-presenteia-dupla-sertaneja-henrique-juliano-durante-encontro", veiculo: "ABCD Jornal" }
    ]
  },
  {
    nome: "Sérgio Reis",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2018, 2022],
    resumo: "Apoia Bolsonaro desde 2018. Em 2021 gravou vídeo convocando manifestação pró-governo, o que o levou a ser alvo de buscas da Polícia Federal; depois disse ter se arrependido de gravar os vídeos.",
    fontes: [
      { titulo: "Sérgio Reis convoca manifestação em apoio a Bolsonaro e promete parar o país", url: "https://www.revistaoeste.com/politica/sergio-reis-convoca-manifestacao-em-apoio-a-bolsonaro-e-promete-parar-o-pais/", veiculo: "Revista Oeste" },
      { titulo: "Ex-deputado Sérgio Reis apoia ato anti-Congresso: \"tirar essa raça de lá\"", url: "https://www.congressoemfoco.com.br/governo/ex-deputado-sergio-reis-apoia-ato-anti-congresso-tirar-essa-raca-de-la/", veiculo: "Congresso em Foco" }
    ]
  },
  {
    nome: "Latino",
    categoria: "Música",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Declarou voto em Bolsonaro em publicações nas redes e almoçou com o então presidente em Brasília, dizendo-se \"empolgado\" com seu carisma.",
    fontes: [
      { titulo: "Anitta apoia Lula, Latino vai de Bolsonaro, Brown se explica: saiba em quem votam os famosos", url: "https://www.bnews.com.br/noticias/eleicoes-2022/anitta-apoia-lula-latino-vai-de-bolsonaro-brown-se-explica-saiba-em-quem-votam-os-famosos.html", veiculo: "BNews" }
    ]
  },
  {
    nome: "Malvino Salvador",
    categoria: "Teatro, TV e Cinema",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Um dos poucos atores a declarar apoio a Bolsonaro; defendeu o então presidente no podcast \"Cara a Tapa\", dizendo que ele tem \"boas intenções\" e é \"massacrado pela mídia\".",
    fontes: [
      { titulo: "Os famosos que declararam seu voto em Jair Bolsonaro no 2º turno", url: "https://www.agazeta.com.br/hz/tv-e-famosos/os-famosos-que-declararam-seu-voto-em-jair-bolsonaro-no-2-turno-das-eleicoes-2022-1022", veiculo: "A Gazeta" }
    ]
  },
  {
    nome: "Cássia Kis",
    categoria: "Teatro, TV e Cinema",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Atriz que havia criticado Bolsonaro na pandemia e passou a apoiá-lo abertamente na eleição de 2022.",
    nota: "Fez declarações em live que repercutiram negativamente na campanha de 2022; a cobertura sobre o episódio é crítica a ela.",
    fontes: [
      { titulo: "Eleições: 10 artistas que apoiaram Lula ou Bolsonaro antes do 2º turno", url: "https://rollingstone.com.br/?p=146495", veiculo: "Rolling Stone Brasil" },
      { titulo: "Regina Duarte e Cássia Kis colocam carreira e credibilidade em jogo por Bolsonaro", url: "https://istoe.com.br/regina-duarte-e-cassia-kis-colocam-carreira-e-credibilidade-em-jogo-por-bolsonaro/", veiculo: "IstoÉ" }
    ]
  },
  {
    nome: "Regina Duarte",
    categoria: "Teatro, TV e Cinema",
    lado: "bolsonaro",
    periodo: [2018, 2022],
    resumo: "Declarou apoio a Bolsonaro já em 2018 e foi secretária especial da Cultura no governo dele.",
    fontes: [
      { titulo: "Regina Duarte e Cássia Kis colocam carreira e credibilidade em jogo por Bolsonaro", url: "https://istoe.com.br/regina-duarte-e-cassia-kis-colocam-carreira-e-credibilidade-em-jogo-por-bolsonaro/", veiculo: "IstoÉ" },
      { titulo: "Regina Duarte pede que Deus abençoe Bolsonaro e que livre o futuro presidente de todo o mal", url: "https://www.tnh1.com.br/noticia/nid/regina-duarte-pede-que-deus-abencoe-bolsonaro-e-que-livre-o-futuro-presidente-de-todo-o-mal/", veiculo: "TNH1" }
    ]
  },
  {
    nome: "Neymar",
    categoria: "Esporte",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Em 29/09/2022 postou vídeo dançando e cantando um jingle de Bolsonaro, com a legenda \"22\". Foi a primeira vez que declarou voto em uma eleição; depois rebateu as críticas.",
    fontes: [
      { titulo: "Neymar declara apoio a Bolsonaro em 2022 e web critica", url: "https://www.dci.com.br/esporte/futebol/neymar-declara-apoio-a-bolsonaro-em-2022-e-web-critica/", veiculo: "DCI" },
      { titulo: "Em vídeo, Neymar declara apoio a Jair Bolsonaro", url: "https://www.gazetasp.com.br/cotidiano/em-video-neymar-declara-apoio-a-jair-bolsonaro/1115454", veiculo: "Gazeta SP" }
    ]
  },
  {
    nome: "Goleiro Bruno",
    categoria: "Esporte",
    lado: "bolsonaro",
    periodo: [2022],
    resumo: "Declarou voto em Bolsonaro em vídeo nas redes antes do segundo turno de 2022 (\"aqui é 22\").",
    fontes: [
      { titulo: "Goleiro Bruno declara voto em Bolsonaro: \"Aqui é 22\"", url: "https://www.correiobraziliense.com.br/politica/2022/10/amp/5042985-goleiro-bruno-declara-voto-em-bolsonaro-aqui-e-22.html", veiculo: "Correio Braziliense" }
    ]
  },

  // ─────────────── LULA ───────────────
  {
    nome: "Anitta",
    categoria: "Música",
    lado: "lula",
    periodo: [2022],
    resumo: "Declarou voto em Lula em 11/07/2022: \"Não sou petista e nunca fui. Mas este ano estou com Lula\". Motivou-se pelo assassinato do petista Marcelo Arruda em Foz do Iguaçu.",
    nota: "Dias depois esclareceu que o apoio era só a Lula, não ao PT, e não autorizou o partido a usar sua imagem.",
    fontes: [
      { titulo: "Anitta declara voto para presidente: \"Não sou petista, mas este ano estou com Lula\"", url: "https://www.congressoemfoco.com.br/noticia/11458/anitta-declara-voto-para-presidente-nao-sou-petista-mas-este-ano-estou-com-lula", veiculo: "Congresso em Foco" },
      { titulo: "Políticos reagem após Anitta declarar que não é petista", url: "https://www.poder360.com.br/partidos-politicos/politicos-reagem-apos-anitta-declarar-que-nao-e-petista/", veiculo: "Poder360" }
    ]
  },
  {
    nome: "Caetano Veloso",
    categoria: "Música",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Declarou voto em Lula em 2022 e de novo em 2026 (13/09/2026, em show no DF, com o gesto do \"L\"). Lançou jingle \"Bora, Lula\" com Gilberto Gil e Chico Buarque.",
    fontes: [
      { titulo: "Caetano Veloso declara novamente apoio a Lula para presidente", url: "https://www.poder360.com.br/poder-governo/caetano-veloso-declara-novamente-apoio-a-lula-para-presidente", veiculo: "Poder360" },
      { titulo: "\"Bora, Lula\": Caetano, Gil e Chico Buarque lançam jingle pela reeleição de Lula", url: "https://www.folhape.com.br/politica/bora-lula-caetano-gil-e-chico-buarque-lancam-jingle-pela/516285/", veiculo: "Folha de Pernambuco" }
    ]
  },
  {
    nome: "Gilberto Gil",
    categoria: "Música",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Apoiou Lula em 2022 e, em 2026, participou do jingle \"Bora, Lula\" pela reeleição.",
    fontes: [
      { titulo: "\"Bora, Lula\": Caetano, Gil e Chico Buarque lançam jingle pela reeleição de Lula", url: "https://www.folhape.com.br/politica/bora-lula-caetano-gil-e-chico-buarque-lancam-jingle-pela/516285/", veiculo: "Folha de Pernambuco" },
      { titulo: "Mais de 200 artistas, juristas e políticos já declararam apoio a Lula", url: "https://www.cut.org.br/noticias/mais-de-200-artistas-juristas-e-politicos-ja-declararam-apoio-a-lula-veja-quem-s-8d95/", veiculo: "CUT" }
    ]
  },
  {
    nome: "Chico Buarque",
    categoria: "Música",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Apoiador histórico de Lula: participou de atos em 2022, declarou voto de novo em 2026 e integra o jingle \"Bora, Lula\".",
    fontes: [
      { titulo: "Muito além de Chico Buarque: artistas de Anitta a Caetano apoiam Lula", url: "https://vermelho.org.br/?p=632963", veiculo: "Vermelho" },
      { titulo: "\"Bora, Lula\": Caetano, Gil e Chico Buarque lançam jingle pela reeleição de Lula", url: "https://www.folhape.com.br/politica/bora-lula-caetano-gil-e-chico-buarque-lancam-jingle-pela/516285/", veiculo: "Folha de Pernambuco" }
    ]
  },
  {
    nome: "Djavan",
    categoria: "Música",
    lado: "lula",
    periodo: [2022],
    resumo: "Citado entre os músicos apoiadores de Lula na eleição de 2022.",
    nota: "Aparece em lista de apoiadores; não localizamos uma declaração individual. Não consta no jingle de 2026.",
    fontes: [
      { titulo: "Os famosos que declararam voto em Lula no 2º turno", url: "https://www.agazeta.com.br/hz/tv-e-famosos/os-famosos-que-declararam-voto-em-lula-no-2-turno-das-eleicoes-2022-1022", veiculo: "A Gazeta" }
    ]
  },
  {
    nome: "Maria Bethânia",
    categoria: "Música",
    lado: "lula",
    periodo: [2026],
    resumo: "Declarou apoio à reeleição de Lula durante apresentação no Coala Festival, em São Paulo, em setembro de 2026.",
    fontes: [
      { titulo: "Em quem votam os famosos baianos? Veja as declarações de 2026", url: "https://atarde.com.br/entretenimento/em-quem-votam-os-famosos-baianos-veja-as-declaracoes-de-2026-1404211", veiculo: "A Tarde" }
    ]
  },
  {
    nome: "Daniela Mercury",
    categoria: "Música",
    lado: "lula",
    periodo: [2026],
    resumo: "Manifestou apoio à reeleição de Lula na campanha de 2026 e participou do clipe \"Bora, Lula\".",
    fontes: [
      { titulo: "Em quem votam os famosos baianos? Veja as declarações de 2026", url: "https://atarde.com.br/entretenimento/em-quem-votam-os-famosos-baianos-veja-as-declaracoes-de-2026-1404211", veiculo: "A Tarde" }
    ]
  },
  {
    nome: "Zeca Pagodinho",
    categoria: "Música",
    lado: "lula",
    periodo: [2026],
    resumo: "No evento \"Cultura com Lula\", no Rio (23/09/2026), disse: \"Eu, minha família, meus amigos, todo mundo é Lula, não tem outro\".",
    nota: "Circulou um vídeo falso de TikTok o mostrando apoiando Flávio Bolsonaro; a Agência Lupa classificou como falso.",
    fontes: [
      { titulo: "Zeca Pagodinho: \"Eu, minha família, meus amigos, todo mundo é Lula\"", url: "https://www.em.com.br/politica/2026/09/7507442-zeca-pagodinho-eu-minha-familia-meus-amigos-todo-mundo-e-lula.html", veiculo: "Estado de Minas" },
      { titulo: "Zeca Pagodinho declara voto em Lula nas eleições", url: "https://www.gazetasp.com.br/entretenimento/zeca-pagodinho-declara-voto-em-lula/", veiculo: "Gazeta SP" }
    ]
  },
  {
    nome: "Ivete Sangalo",
    categoria: "Música",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Citada entre os cantores que apoiam Lula e associada ao apoio ao presidente por fazer o gesto do \"L\" em shows.",
    fontes: [
      { titulo: "Lula ou Flávio? Saiba em quem os famosos votam em 2026", url: "https://atarde.com.br/entretenimento/lula-ou-flavio-saiba-em-quem-os-famosos-votam-em-2026-1404453", veiculo: "A Tarde" },
      { titulo: "Público grita por Lula e Ivete Sangalo faz o \"L\" em show", url: "https://tribunadoplanalto.com.br/publico-grita-por-lula-e-ivete-sangalo-faz-o-de-l-em-show/", veiculo: "Tribuna do Planalto" }
    ]
  },
  {
    nome: "Luísa Sonza",
    categoria: "Música",
    lado: "lula",
    periodo: [2022],
    resumo: "Votou de vermelho em 2022 fazendo o gesto do \"L\" e denunciou que marcas evitavam contratar artistas que apoiam Lula e o PT.",
    fontes: [
      { titulo: "Luísa Sonza critica marcas que não contratam quem apoia Lula e o PT", url: "https://www.gazetasp.com.br/entretenimento/luisa-sonza-critica-marcas-que-nao-contratam-quem-apoia-lula-e-o-pt/", veiculo: "Gazeta SP" }
    ]
  },
  {
    nome: "Pabllo Vittar",
    categoria: "Música",
    lado: "lula",
    periodo: [2022],
    resumo: "Disse em 2021 \"vai ser Lula em 2022\", declarou voto nele e foi anunciada como atração da posse presidencial.",
    fontes: [
      { titulo: "Posse de Lula terá Pabllo Vittar e Duda Beat, diz Janja da Silva", url: "https://congressoemfoco.com.br/noticia/20058/posse-de-lula-tera-pabllo-vittar-e-duda-beat-diz-janja-da-silva", veiculo: "Congresso em Foco" }
    ]
  },
  {
    nome: "Ludmilla",
    categoria: "Música",
    lado: "lula",
    periodo: [2022],
    resumo: "Citada entre as cantoras do lado de Lula na eleição de 2022.",
    nota: "Aparece em lista de apoiadores; não localizamos uma citação direta dela declarando voto.",
    fontes: [
      { titulo: "Os famosos que declararam voto em Lula no 2º turno", url: "https://www.agazeta.com.br/hz/tv-e-famosos/os-famosos-que-declararam-voto-em-lula-no-2-turno-das-eleicoes-2022-1022", veiculo: "A Gazeta" }
    ]
  },
  {
    nome: "Paolla Oliveira",
    categoria: "Teatro, TV e Cinema",
    lado: "lula",
    periodo: [2022],
    resumo: "Declarou voto em Lula em 2022, criticando o governo Bolsonaro, e pediu que eleitores o escolhessem já no primeiro turno.",
    fontes: [
      { titulo: "Paolla Oliveira declara voto para presidente", url: "https://dol.com.br/entretenimento/fama/773450/paolla-oliveira-declara-voto-para-presidente", veiculo: "DOL" }
    ]
  },
  {
    nome: "Fernanda Montenegro",
    categoria: "Teatro, TV e Cinema",
    lado: "lula",
    periodo: [2022],
    resumo: "Declarou voto em Lula em 2022, criticando a \"inoperância\" do governo Bolsonaro; sofreu ataques de bolsonaristas após o vídeo.",
    fontes: [
      { titulo: "Fernanda Montenegro critica inoperância do governo e declara voto em Lula", url: "https://www.cut.org.br/noticias/fernanda-montenegro-critica-inoperancia-do-governo-e-declara-voto-em-lula-40f8/", veiculo: "CUT" },
      { titulo: "Fernanda Montenegro recebe ataques após declarar apoio a Lula", url: "https://atarde.com.br/politica/eleicoes-2024/eleicoes-presidencias/fernanda-montenegro-recebe-ataques-apos-declarar-apoio-em-lula-1208615", veiculo: "A Tarde" }
    ]
  },
  {
    nome: "Wagner Moura",
    categoria: "Teatro, TV e Cinema",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Apoiou Lula em 2022 e, em 28/09/2026, publicou vídeo declarando apoio à reeleição, a menos de uma semana do primeiro turno.",
    fontes: [
      { titulo: "A menos de uma semana para as eleições, Wagner Moura declara apoio a Lula", url: "https://www.bahianoticias.com.br/holofote/noticia/85705-a-menos-de-uma-semana-para-as-eleicoes-wagner-moura-declara-apoio-a-lula", veiculo: "Bahia Notícias" },
      { titulo: "Wagner Moura presta apoio a Lula em disputa eleitoral \"por tudo que ele significa\"", url: "https://www.bnewssaopaulo.com.br/noticias/politica/wagner-moura-presta-apoio-a-lula-em-disputa-eleitoral-por-tudo-que-ele-significa.html", veiculo: "BNews SP" }
    ]
  },
  {
    nome: "Malu Mader",
    categoria: "Teatro, TV e Cinema",
    lado: "lula",
    periodo: [2026],
    resumo: "Em vídeo nas redes, disse: \"Meu nome é Malu Mader e eu estou com Lula\", ligando a escolha ao renascimento do cinema brasileiro.",
    fontes: [
      { titulo: "Aos 60 anos, Malu Mader declara voto em Lula ao lado de artistas", url: "https://www.dci.com.br/dci-mais/celebridades/aos-60-anos-malu-mader-declara-voto-em-lula-ao-lado-de-artistas/", veiculo: "DCI" },
      { titulo: "Malu Mader declara apoio a Lula e justifica escolha: \"o cinema brasileiro renasceu\"", url: "https://www.bnews.com.br/noticias/entretenimento/malu-mader-declara-apoio-a-lula-e-justifica-escolha-o-cinema-brasileira-renasceu.html", veiculo: "BNews" }
    ]
  },
  {
    nome: "Bruna Marquezine",
    categoria: "Teatro, TV e Cinema",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Citada entre os famosos que se manifestaram por Lula em 2022 e, no segundo turno de 2026 (Lula x Flávio Bolsonaro), pediu aos eleitores que não votaram nele no primeiro turno que considerassem votar em Lula.",
    fontes: [
      { titulo: "Bruna Marquezine declara voto para o 2º turno e alerta seguidores", url: "https://www.itatiaia.com.br/entretenimento/bruna-marquezine-declara-voto-para-o-2o-turno-e-alerta-seguidores/", veiculo: "Itatiaia" }
    ]
  },
  {
    nome: "Felipe Neto",
    categoria: "Influenciadores",
    lado: "lula",
    periodo: [2022],
    resumo: "Declarou voto em Lula em agosto de 2022 \"para derrotar monstro genocida\" e participou de comercial da campanha.",
    fontes: [
      { titulo: "Felipe Neto declara voto em Lula \"para derrotar monstro genocida\"", url: "https://www.metropoles.com/brasil/felipe-neto-declara-voto-em-lula-para-derrotar-monstro-genocida", veiculo: "Metrópoles" },
      { titulo: "\"Nossa arma é o voto\", diz Felipe Neto em comercial de Lula", url: "https://www.poder360.com.br/eleicoes/nossa-arma-e-o-voto-diz-felipe-neto-em-comercial-de-lula/", veiculo: "Poder360" }
    ]
  },
  {
    nome: "Casimiro",
    categoria: "Influenciadores",
    lado: "lula",
    periodo: [2022],
    resumo: "Afirmou em 2022 que seu voto era 13, número de Lula, em publicação com mais de 1,3 milhão de curtidas.",
    fontes: [
      { titulo: "Lula ou Bolsonaro? Saiba como votam as celebridades", url: "https://www.poder360.com.br/eleicoes/lula-ou-bolsonaro-saiba-como-votam-as-celebridades", veiculo: "Poder360" }
    ]
  },
  {
    nome: "Juliette",
    categoria: "Influenciadores",
    lado: "lula",
    periodo: [2022],
    resumo: "Anunciou voto em Lula no primeiro turno de 2022, horas após o primeiro debate presidencial da Band.",
    fontes: [
      { titulo: "Artistas, políticos e intelectuais: Lula ganha apoiadores na reta final da campanha", url: "https://congressoemfoco.com.br/area/pais/artistas-politicos-e-intelectuais-lula-ganha-apoiadores-na-reta-final-da-campanha", veiculo: "Congresso em Foco" }
    ]
  },
  {
    nome: "Juninho Pernambucano",
    categoria: "Esporte",
    lado: "lula",
    periodo: [2022, 2026],
    resumo: "Declarou voto em Lula e participou da campanha em 2022; voltou a demonstrar apoio nas redes em 2026.",
    fontes: [
      { titulo: "De Neymar a Casagrande: veja quais pessoas do esporte apoiam Lula ou Bolsonaro", url: "https://www.folhape.com.br/esportes/de-neymar-a-casagrande-veja-quais-pessoas-do-esporte-apoiam-lula-ou/242073/", veiculo: "Folha de Pernambuco" }
    ]
  },
  {
    nome: "Casagrande",
    categoria: "Esporte",
    lado: "lula",
    periodo: [2018, 2022],
    resumo: "Assinou o manifesto \"Democracia Sim\" contra Bolsonaro em 2018 e disse em 2022 que \"a opção de sobrevivência social do Brasil está nas mãos do Lula\".",
    fontes: [
      { titulo: "De Neymar a Casagrande: veja quais pessoas do esporte apoiam Lula ou Bolsonaro", url: "https://www.folhape.com.br/esportes/de-neymar-a-casagrande-veja-quais-pessoas-do-esporte-apoiam-lula-ou/242073/", veiculo: "Folha de Pernambuco" }
    ]
  }
];
