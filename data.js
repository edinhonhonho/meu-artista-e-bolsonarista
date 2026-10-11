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

// ───────────── Ampliação (rodada 2) ─────────────
// Fontes reutilizadas
(function () {
  var S = {
    wikiB22: { titulo: "Lista de endossos à campanha presidencial de Jair Bolsonaro em 2022", url: "https://pt.wikipedia.org/wiki/Lista_de_endossos_%C3%A0_campanha_presidencial_de_Jair_Bolsonaro_em_2022", veiculo: "Wikipédia" },
    cor18: { titulo: "'Guerra' dos artistas: veja quem apoia Bolsonaro e quem está com Haddad", url: "https://www.correiobraziliense.com.br/app/noticia/politica/2018/10/15/interna_politica,712670/quais-artistas-poiam-bolsonaro-e-haddad.shtml", veiculo: "Correio Braziliense" },
    otempo18: { titulo: "Saiba quais são as celebridades que já declararam apoio a Bolsonaro", url: "https://www.otempo.com.br/eleicoes/saiba-quais-sao-as-celebridades-que-ja-declararam-apoio-a-bolsonaro-1.2742809", veiculo: "O Tempo" },
    em22: { titulo: "Veja os artistas que declararam voto em Bolsonaro", url: "https://www.em.com.br/app/noticia/politica/2022/09/21/interna_politica,1396339/veja-os-artistas-que-declararam-voto-em-bolsonaro.shtml", veiculo: "Estado de Minas" },
    terraAtl: { titulo: "Atletas causam polêmica ao apoiar Bolsonaro; veja a lista", url: "https://www.terra.com.br/noticias/brasil/politica/atletas-causam-polemica-ao-revelar-voto-em-bolsonaro-confira-a-lista,96377a043c5c2026d5f499c5067b74eemd4lh65s.html", veiculo: "Terra" },
    noataque: { titulo: "Bolsonaro preso: jogadores que apoiaram e criticaram o ex-presidente", url: "https://noataque.com.br/futebol/noticia/2025/11/25/bolsonaro-preso-os-jogadores-de-futebol-que-apoiaram-e-criticaram-o-ex-presidente/", veiculo: "No Ataque" },
    em26fla: { titulo: "Famosos declararam apoio a Flávio Bolsonaro nas eleições", url: "https://www.em.com.br/politica/2026/09/7503550-famosos-declararam-apoio-a-flavio-bolsonaro-nas-eleicoes.html", veiculo: "Estado de Minas" },
    p360fla: { titulo: "Flávio tem apoio discreto no meio artístico na disputa de 2026", url: "https://www.poder360.com.br/poder-eleicoes-2026/flavio-tem-apoio-discreto-no-meio-artistico-na-disputa-de-2026/", veiculo: "Poder360" },
    gazL: { titulo: "Os famosos que declararam voto em Lula no 2º turno", url: "https://www.agazeta.com.br/hz/tv-e-famosos/os-famosos-que-declararam-voto-em-lula-no-2-turno-das-eleicoes-2022-1022", veiculo: "A Gazeta" },
    p26: { titulo: "Ivete, Xamã, Bethânia: artistas aderem a Lula na busca pela reeleição", url: "https://www.poder360.com.br/poder-eleicoes-2026/chico-caetano-bethania-artistas-aderem-a-lula-na-busca-pela-reeleicao/", veiculo: "Poder360" },
    ato: { titulo: "Mais de 50 artistas estiveram em ato com Lula no Rio; veja quem foi", url: "https://www.poder360.com.br/poder-eleicoes-2026/mais-de-50-artistas-estiveram-em-ato-com-lula-no-rio-veja-quem-foi/", veiculo: "Poder360" },
    atoGV: { titulo: "Ao lado de artistas no Rio, Lula propõe políticas permanentes e revolução cultural nas periferias", url: "https://galeravermelha.com.br/ao-lado-de-artistas-no-rio-lula-propoe-politicas-permanentes-e-revolucao-cultural-nas-periferias/", veiculo: "Galera Vermelha" },
    gaz26: { titulo: "Saiba quais personalidades declararam apoio a Flávio e a Lula", url: "https://www.gazetadopovo.com.br/eleicoes/2026/saiba-quais-personalidades-declararam-voto-flavio-e-lula/", veiculo: "Gazeta do Povo" },
    ninja: { titulo: "Mais de 100 artistas do audiovisual brasileiro declaram apoio a Lula no 2º turno", url: "https://midianinja.org/mais-de-100-artistas-do-audiovisual-brasileiro-declaram-apoio-a-lula-no-2o-turno/", veiculo: "Mídia NINJA" },
    cut: { titulo: "Mais de 200 artistas, juristas e políticos já declararam apoio a Lula", url: "https://www.cut.org.br/noticias/mais-de-200-artistas-juristas-e-politicos-ja-declararam-apoio-a-lula-veja-quem-s-8d95/", veiculo: "CUT" },
    v130: { titulo: "Mais de 130 celebridades já declararam voto em Lula; veja a lista", url: "https://vermelho.org.br/2022/09/22/mais-de-130-celebridades-ja-declararam-voto-em-lula-veja-a-lista/", veiculo: "Vermelho" },
    v330: { titulo: "Artistas com Lula têm 330 milhões de seguidores. Os que apoiam Bolsonaro têm 160 mi", url: "https://vermelho.org.br/2022/07/14/artistas-com-lula-tem-330-milhoes-de-seguidores-os-que-apoiam-bolsonaro-tem-160-mi/", veiculo: "Vermelho" },
    bora: { titulo: "A 2 dias das eleições, artistas lançam música \"Bora Lula\"", url: "https://www.poder360.com.br/poder-eleicoes-2026/a-2-dias-das-eleicoes-artistas-lancam-musica-bora-lula/", veiculo: "Poder360" },
    wikiL22: { titulo: "Lista de endossos à campanha presidencial de Lula em 2022", url: "https://pt.wikipedia.org/wiki/Lista_de_endossos_%C3%A0_campanha_presidencial_de_Lula_em_2022", veiculo: "Wikipédia" }
  };
  var LISTA = "Aparece em lista de apoiadores publicada pela imprensa; não localizamos uma declaração individual.";

  // [nome, categoria, lado, periodo, resumo, fontes[], nota, wiki]
  var rows = [
    // ── Bolsonaro ──
    ["Eduardo Costa", "Música", "bolsonaro", [2018, 2022], "Cantor sertanejo citado entre os artistas que declararam apoio a Bolsonaro.", [S.cor18, S.wikiB22], LISTA],
    ["Zé Neto & Cristiano", "Música", "bolsonaro", [2018, 2022], "Dupla sertaneja citada entre os artistas que declararam apoio a Bolsonaro.", [S.cor18, S.wikiB22], LISTA, "Zé Neto & Cristiano"],
    ["Chrystian (Chrystian & Ralf)", "Música", "bolsonaro", [2022], "Cantor citado entre os artistas que declararam voto e admiração por Bolsonaro em 2022.", [S.em22], null, "Chrystian & Ralf"],
    ["Netinho", "Música", "bolsonaro", [2022], "Cantor apontado como apoiador de Bolsonaro na eleição de 2022.", [S.em22, S.wikiB22], LISTA, "Netinho de Paula"],
    ["Amado Batista", "Música", "bolsonaro", [2018, 2026], "Em 2026 declarou apoio à candidatura e ao projeto político de Flávio Bolsonaro em vídeos, depois de o senador visitar sua fazenda em Goianápolis (GO).", [S.em26fla, S.p360fla]],
    ["Ana Paula Valadão", "Música", "bolsonaro", [2022], "Cantora gospel listada entre os endossos à campanha de Bolsonaro em 2022.", [S.wikiB22], LISTA],
    ["Mário Frias", "Teatro, TV e Cinema", "bolsonaro", [2022], "Ator, foi secretário especial de Cultura no governo Bolsonaro (2020–2022) e é deputado federal pelo PL-SP; consta entre os endossos à campanha de 2022.", [S.wikiB22]],
    ["Humberto Martins", "Teatro, TV e Cinema", "bolsonaro", [2018, 2022], "Ator citado entre os que declararam apoio a Bolsonaro.", [S.cor18, S.wikiB22], LISTA],
    ["Felipe Folgosi", "Teatro, TV e Cinema", "bolsonaro", [2018, 2022], "Ator citado entre os que declararam apoio a Bolsonaro.", [S.cor18, S.wikiB22], LISTA],
    ["Thiago Gagliasso", "Teatro, TV e Cinema", "bolsonaro", [2018, 2022], "Ator citado entre os que declararam apoio a Bolsonaro nas campanhas de 2018 e 2022.", [S.cor18, S.em22, S.wikiB22], LISTA],
    ["Antônia Fontenelle", "Teatro, TV e Cinema", "bolsonaro", [2018, 2022], "Atriz e apresentadora. Em 2022 afirmou que nunca deixaria de apoiar Bolsonaro e que, entre Lula e ele, preferia Bolsonaro.", [{ titulo: "Fontenelle chora ao falar de feito de Bolsonaro no Nordeste", url: "https://pleno.news/brasil/politica-nacional/fontenelle-chora-ao-falar-de-feito-de-bolsonaro-no-nordeste.html", veiculo: "Pleno News" }, { titulo: "Antônia Fontenelle detona Mário Frias e cobra atitude", url: "https://ofuxico.com.br/polemica/antonia-fontenelle-detona-mario-frias-puxa-saco-do-presidente-desqualificado/", veiculo: "O Fuxico" }]],
    ["Myrian Rios", "Teatro, TV e Cinema", "bolsonaro", [2022], "Atriz listada entre os endossos à campanha de Bolsonaro em 2022.", [S.wikiB22], LISTA],
    ["Mônica Carvalho", "Teatro, TV e Cinema", "bolsonaro", [2022], "Atriz listada entre os endossos à campanha de Bolsonaro em 2022.", [S.wikiB22], LISTA],
    ["Penélope Nova", "Teatro, TV e Cinema", "bolsonaro", [2026], "Apresentadora (ex-VJ da MTV). Declarou apoio a Flávio Bolsonaro, participou de ato na Avenida Paulista e publicou foto nas redes.", [S.em26fla, S.p360fla]],
    ["Andressa Urach", "Influenciadores", "bolsonaro", [2018, 2022], "Influenciadora citada entre as celebridades que declararam apoio a Bolsonaro.", [S.otempo18, S.wikiB22], LISTA],
    ["Yudi Tamashiro", "Influenciadores", "bolsonaro", [2022], "Ex-integrante do grupo Tamashiro listado entre os endossos à campanha de Bolsonaro em 2022.", [S.wikiB22], LISTA, "Yudi Tamashiro"],
    ["Ratinho", "Teatro, TV e Cinema", "bolsonaro", [2018, 2022], "Apresentador do SBT que declarou apoio a Bolsonaro em 2018 e foi citado como apoiador na eleição de 2022.", [S.otempo18, S.em22], null, "Ratinho (apresentador)"],
    ["Roberto Justus", "Teatro, TV e Cinema", "bolsonaro", [2018], "Apresentador citado em 2018 entre os que declararam apoio a Bolsonaro.", [S.otempo18], LISTA],
    ["Leda Nagle", "Teatro, TV e Cinema", "bolsonaro", [2018], "Jornalista e apresentadora citada em 2018 entre os que declararam apoio a Bolsonaro.", [S.otempo18], LISTA],
    ["Alexandre Frota", "Teatro, TV e Cinema", "bolsonaro", [2018], "Descrito pelo Correio Braziliense, em 2018, como a celebridade mais militante a favor de Bolsonaro; era deputado federal pelo PSL.", [S.cor18], "Posição registrada em 2018."],
    ["Ronaldinho Gaúcho", "Esporte", "bolsonaro", [2018, 2022], "Declarou apoio a Bolsonaro em 2018, o que desagradou ao Barcelona; voltou a ser citado entre os apoiadores em 2022.", [S.terraAtl, S.em22]],
    ["Rivaldo", "Esporte", "bolsonaro", [2018], "Apoiou Bolsonaro no Instagram em 2018, dizendo que o voto escolhe um presidente e não um pai.", [S.terraAtl, S.noataque]],
    ["Felipe Melo", "Esporte", "bolsonaro", [2018], "Dedicou um gol ao \"nosso futuro presidente Bolsonaro\" em 2018.", [S.terraAtl, S.noataque]],
    ["Nelson Piquet", "Esporte", "bolsonaro", [2018], "Tricampeão de Fórmula 1 citado entre os famosos que declararam apoio a Bolsonaro.", [S.otempo18], LISTA],
    ["Emerson Fittipaldi", "Esporte", "bolsonaro", [2018], "Ex-piloto de Fórmula 1 citado entre os famosos que declararam apoio a Bolsonaro.", [S.otempo18], LISTA],
    ["Renato Gaúcho", "Esporte", "bolsonaro", [2018], "Treinador de futebol citado entre os famosos que declararam apoio a Bolsonaro.", [S.otempo18], LISTA, "Renato Gaúcho"],
    ["José Aldo", "Esporte", "bolsonaro", [2018], "Lutador de MMA citado entre os famosos que declararam apoio a Bolsonaro.", [S.otempo18], LISTA],

    // ── Lula ──
    ["Glória Pires", "Teatro, TV e Cinema", "lula", [2022, 2026], "Em 25/09/2022 apareceu em vídeo com o marido e a filha cantando \"Lula Lá\" e declarando voto. Também é citada entre os apoiadores da reeleição em 2026.", [{ titulo: "Glória Pires e família declaram voto em Lula: \"Vamos juntos\"", url: "https://www.metropoles.com/celebridades/gloria-pires-e-familia-declaram-voto-em-lula-vamos-juntos", veiculo: "Metrópoles" }, S.gaz26]],
    ["Taís Araújo", "Teatro, TV e Cinema", "lula", [2026], "Citada entre os mais de cem profissionais do audiovisual que declararam apoio a Lula no segundo turno de 2026.", [S.ninja]],
    ["Fernanda Torres", "Teatro, TV e Cinema", "lula", [2026], "Citada entre os mais de cem profissionais do audiovisual que declararam apoio a Lula no segundo turno de 2026.", [S.ninja]],
    ["Kleber Mendonça Filho", "Teatro, TV e Cinema", "lula", [2026], "Cineasta. Declarou voto em Lula na eleição de 2026.", [S.p26, S.ninja]],
    ["Débora Bloch", "Teatro, TV e Cinema", "lula", [2026], "Atriz citada entre os apoiadores da reeleição de Lula em 2026.", [S.gaz26], LISTA],
    ["Sophie Charlotte", "Teatro, TV e Cinema", "lula", [2026], "Atriz citada entre os apoiadores da reeleição de Lula em 2026.", [S.gaz26], LISTA],
    ["José de Abreu", "Teatro, TV e Cinema", "lula", [2022, 2026], "Ator, apoiador declarado de Lula em 2022 e citado entre os apoiadores da reeleição em 2026.", [S.gaz26, { titulo: "Lula e Bolsonaro dividem apoio de artistas: saiba em quem votam os famosos", url: "https://www.otempo.com.br/politica/lula-e-bolsonaro-dividem-apoio-de-artistas-saiba-em-quem-votam-os-famosos-1.2672426", veiculo: "O Tempo" }]],
    ["Herson Capri", "Teatro, TV e Cinema", "lula", [2026], "Ator citado entre os apoiadores da reeleição de Lula em 2026.", [S.gaz26], LISTA],
    ["Caio Blat", "Teatro, TV e Cinema", "lula", [2022, 2026], "Ator. Assinou o manifesto \"A cultura está com Lula e pede mudanças\" e esteve no ato \"Cultura com Lula\", no Rio (23/09/2026).", [S.gaz26, S.ato]],
    ["Marieta Severo", "Teatro, TV e Cinema", "lula", [2026], "Atriz. Esteve presente no ato \"Cultura com Lula\", no Rio (23/09/2026).", [S.atoGV], "Apoio inferido pela presença em ato de campanha, noticiada pela imprensa."],
    ["Cissa Guimarães", "Teatro, TV e Cinema", "lula", [2026], "Atriz e apresentadora. Esteve presente no ato \"Cultura com Lula\", no Rio (23/09/2026).", [S.atoGV], "Apoio inferido pela presença em ato de campanha, noticiada pela imprensa."],
    ["Sonia Braga", "Teatro, TV e Cinema", "lula", [2026], "Atriz. Anunciou apoio a Lula no primeiro turno de 2026.", [S.p26]],
    ["Mel Maia", "Teatro, TV e Cinema", "lula", [2026], "Atriz. Anunciou apoio a Lula em 2026 e está entre as celebridades com mais seguidores do lado dele.", [S.p26]],
    ["Claudia Abreu", "Teatro, TV e Cinema", "lula", [2026], "Atriz. Anunciou apoio a Lula no primeiro turno de 2026.", [S.p26]],
    ["Chico Diaz", "Teatro, TV e Cinema", "lula", [2026], "Ator. Anunciou apoio a Lula no primeiro turno de 2026.", [S.p26]],
    ["Paulo Betti", "Teatro, TV e Cinema", "lula", [2026], "Ator. Anunciou apoio a Lula no primeiro turno de 2026.", [S.p26]],
    ["Gregório Duvivier", "Teatro, TV e Cinema", "lula", [2022, 2026], "Ator e humorista. Declarou apoio a Lula em 2022 e de novo em 2026.", [S.p26, S.v130]],
    ["Marcelo Adnet", "Teatro, TV e Cinema", "lula", [2022], "Humorista citado na lista de artistas que declararam apoio a Lula.", [S.cut], LISTA],
    ["Alinne Moraes", "Teatro, TV e Cinema", "lula", [2022], "Atriz citada entre as celebridades que declararam voto em Lula em 2022.", [S.v130], LISTA],
    ["Letícia Colin", "Teatro, TV e Cinema", "lula", [2022], "Atriz citada entre os artistas que declararam voto em Lula no primeiro turno de 2022.", [{ titulo: "Às vésperas das eleições, artistas declaram voto em Lula no primeiro turno", url: "https://portalaltadefinicao.com/ha-horas-das-eleicoes-artistas-declaram-voto-em-lula-no-primeiro-turno/", veiculo: "Portal Alta Definição" }], LISTA],
    ["Camila Pitanga", "Teatro, TV e Cinema", "lula", [2022], "Atriz citada entre os artistas do lado de Lula em levantamento de 2022.", [S.v330], LISTA],
    ["Bruno Gagliasso", "Teatro, TV e Cinema", "lula", [2022], "Ator citado entre os artistas do lado de Lula em levantamento de 2022.", [S.v330], LISTA],
    ["Marjorie Estiano", "Teatro, TV e Cinema", "lula", [2026], "Atriz. Teria declarado: \"Eu vou de Lula, 13\", na disputa de 2026 contra Flávio Bolsonaro.", [{ titulo: "Saiu do sigilo! Famosos assumem apoio a Lula e Flávio Bolsonaro após planilha vazar", url: "https://portalleodias.com/politica/saiu-do-sigilo-famosos-assumem-apoio-a-lula-e-flavio-bolsonaro-apos-planilha-vazar", veiculo: "Portal Leo Dias" }], "A declaração foi publicada após a circulação de uma planilha de preferências de famosos que não é verificada; vale conferir o post original."],
    ["Xamã", "Música", "lula", [2026], "Rapper. Apoia a reeleição de Lula: participou do clipe \"Bora, Lula\" e do ato no Rio em 23/09/2026.", [S.p26, S.bora]],
    ["Xande de Pilares", "Música", "lula", [2026], "Sambista. Participou do clipe \"Bora, Lula\" pela reeleição.", [S.p26], "Apoio inferido pela participação no clipe da campanha."],
    ["Ebony", "Música", "lula", [2026], "Cantora. Participou do clipe \"Bora, Lula\" pela reeleição.", [S.bora], "Apoio inferido pela participação no clipe da campanha.", "Ebony (cantora)"],
    ["Marina Sena", "Música", "lula", [2026], "Cantora. Aparece no clipe \"Bora, Lula\" (lançado em 02/10/2026).", [S.bora], "Participar do clipe não é, por si só, declaração de voto; ela também teria se manifestado após a circulação de uma planilha de famosos."],
    ["Lenine", "Música", "lula", [2022, 2026], "Citado entre os cantores do lado de Lula em 2022 e presente no ato \"Cultura com Lula\" em 2026.", [S.gazL, S.ato]],
    ["Paulinho da Viola", "Música", "lula", [2026], "Sambista. Declarou apoio a Lula e esteve no ato \"Cultura com Lula\" em 2026.", [S.p26, S.ato]],
    ["Marisa Monte", "Música", "lula", [2022], "Citada entre os artistas que declararam apoio a Lula em 2022.", [S.cut, S.v330], LISTA],
    ["Chico César", "Música", "lula", [2022], "Cantor. Assinou o manifesto \"A cultura está com Lula e pede mudanças\" e foi citado entre os cantores do lado de Lula em 2022.", [S.gazL, { titulo: "Glória Pires e família declaram voto em Lula: \"Vamos juntos\"", url: "https://www.metropoles.com/celebridades/gloria-pires-e-familia-declaram-voto-em-lula-vamos-juntos", veiculo: "Metrópoles" }]],
    ["Duda Beat", "Música", "lula", [2022], "Cantora citada entre os artistas do lado de Lula em 2022; foi anunciada como atração da posse.", [S.gazL, { titulo: "Posse de Lula terá Pabllo Vittar e Duda Beat, diz Janja da Silva", url: "https://congressoemfoco.com.br/noticia/20058/posse-de-lula-tera-pabllo-vittar-e-duda-beat-diz-janja-da-silva", veiculo: "Congresso em Foco" }]],
    ["Paulo Miklos", "Música", "lula", [2022], "Cantor citado entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Martinho da Vila", "Música", "lula", [2022], "Sambista citado entre os artistas que declararam apoio a Lula.", [S.gazL, S.cut], LISTA],
    ["Maria Rita", "Música", "lula", [2022], "Cantora citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Teresa Cristina", "Música", "lula", [2022], "Cantora citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Mart'nalia", "Música", "lula", [2022], "Cantora citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Otto", "Música", "lula", [2022], "Cantor citado entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA, "Otto (cantor)"],
    ["Iza", "Música", "lula", [2022], "Cantora citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA, "Iza (cantora)"],
    ["Gloria Groove", "Música", "lula", [2022], "Cantora e drag queen citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Lauana Prado", "Música", "lula", [2022], "Cantora sertaneja citada entre os artistas do lado de Lula em 2022.", [S.gazL], LISTA],
    ["Bela Gil", "Influenciadores", "lula", [2022], "Chef e apresentadora que declarou voto em Lula em 2022.", [S.gazL], LISTA],
    ["Paola Carosella", "Influenciadores", "lula", [2022], "Chef de cozinha que declarou voto em Lula em 2022.", [S.gazL], LISTA],
    ["Gleici Damasceno", "Influenciadores", "lula", [2022], "Ex-BBB que declarou voto em Lula em 2022.", [S.gazL], LISTA],
    ["Gil do Vigor", "Influenciadores", "lula", [2022], "Economista e ex-BBB citado entre os artistas do lado de Lula em levantamento de 2022.", [S.v330], LISTA],
    ["Bianca Andrade", "Influenciadores", "lula", [2022], "Influenciadora (Boca Rosa) citada entre os famosos que declararam voto em Lula em 2022.", [{ titulo: "Lula ou Bolsonaro: saiba quais famosos já declararam voto", url: "https://www.metropoles.com/colunas/leo-dias/lula-ou-bolsonaro-saiba-quais-famosos-ja-declararam-voto", veiculo: "Metrópoles" }], LISTA]
  ];

  rows.forEach(function (r) {
    var nota = r[6];
    window.ARTISTAS.push({
      nome: r[0], categoria: r[1], lado: r[2], periodo: r[3], resumo: r[4],
      fontes: r[5], nota: nota || undefined, wiki: r[7]
    });
  });
})();

// Títulos da Wikipédia (pt) para buscar a foto quando o nome sozinho é ambíguo.
(function () {
  var W = {
    "Leonardo": "Leonardo (cantor)",
    "Chitãozinho": "Chitãozinho & Xororó",
    "Fernando (Fernando & Sorocaba)": "Fernando & Sorocaba",
    "Bruno & Marrone": "Bruno & Marrone",
    "Henrique & Juliano": "Henrique & Juliano",
    "Latino": "Latino (cantor)",
    "Goleiro Bruno": "Bruno Fernandes das Dores de Souza",
    "Ludmilla": "Ludmilla (cantora)",
    "Casimiro": "Casimiro Miguel",
    "Juliette": "Juliette Freire",
    "Casagrande": "Walter Casagrande Júnior",
    "Cássia Kis": "Cássia Kis"
  };
  window.ARTISTAS.forEach(function (a) { if (!a.wiki && W[a.nome]) a.wiki = W[a.nome]; });
})();
