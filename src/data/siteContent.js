// Conteúdo do site institucional público (rota /).
// As fotos de conquistas e de jogo ficam em ./siteMedia.js.
// Placeholders marcados — a secretaria completa depois:
//   • legendas das conquistas
//   • logos de patrocinadores e parceiros
//   • telefone / WhatsApp / e-mail / endereço de contato
//   • documentos de transparência

// --- Imagens locais das seções da home (fornecidas pelo clube) ---
import campoPrincipal from '../assets/camponovoJP.png'
import quadraSociety from '../assets/Quadra socyte.jpg'
import choupana from '../assets/Chopana.jpg'
import salao1 from '../assets/salao 1.jpg'
import salao2 from '../assets/salao 2.jpg'
import noticiaJogo from '../assets/jogador-disputa-bola.jpg'
import noticiaProjeto from '../assets/Projeto-social-futebol-Joao-Pessoa-2.jpg'
import noticiaGerente from '../assets/apresentacao.jpeg'
import elencoTetra from '../assets/tetra-invicto-2025-oficial.jpg'
import elencoAmarelo from '../assets/titulo-2022-uniforme-amarelo.jpg'
import elencoBandeira from '../assets/titulo-bandeira-clube.jpg'
import elencoGol from '../assets/jogador-comemorando-gol.jpg'
import elencoTimeGol from '../assets/time-comemorando-gol.jpg'
import histHero from '../assets/campo-fundo.jpg'
import escudoImg from '../assets/escudo-sejp.png'

export const clubFullName = 'Sociedade Esportiva João Pessoa'
export const foundationDate = '05/07/1932'
export const city = 'Jaraguá do Sul – SC'
export const instagramHandle = '@sociedadejoaopessoa'
export const instagramUrl = 'https://instagram.com/sociedadejoaopessoa'

/* Navegação principal — páginas reais (React Router), na ordem do menu.
   `end` marca a rota exata (só a Inicial). Itens com `children` abrem um
   dropdown no hover. Com `to`, o rótulo é link para a página-mãe; com
   `noNav: true` (Futebol), o rótulo é um pai neutro — não navega ao clicar,
   só serve para abrir o dropdown. O "Seja Sócio" e o "Entrar" ficam fora. */
export const navMenu = [
  { to: '/', label: 'Inicial', end: true },
  {
    to: '/o-clube',
    label: 'O Clube',
    children: [
      { to: '/historia', label: 'História' },
      { to: '/diretoria', label: 'Diretoria' },
      { to: '/estrutura', label: 'Estrutura' },
      { to: '/transparencia', label: 'Transparência' },
    ],
  },
  {
    label: 'Futebol',
    noNav: true,
    children: [
      { to: '/futebol/comissao-tecnica', label: 'Comissão técnica' },
      { to: '/futebol/diretoria', label: 'Diretoria de futebol' },
      { to: '/futebol/elenco', label: 'Elenco' },
      { to: '/futebol/calendario', label: 'Calendário' },
      { to: '/futebol/titulos', label: 'Títulos' },
    ],
  },
  { to: '/noticias', label: 'Notícias' },
  {
    to: '/quem-apoia',
    label: 'Quem Apoia',
    children: [
      { to: '/quem-apoia', label: 'Patrocinadores' },
      { to: '/quem-apoia', label: 'Parceiros' },
    ],
  },
  { to: '/contato', label: 'Contato' },
]

/* Destino do CTA "Seja Sócio" — hoje leva ao contato do clube. */
export const memberCtaTo = '/contato'

/* Marquee — faixa infinita depois do hero. */
export const marqueeItems = [
  'Sociedade Esportiva João Pessoa',
  'Desde 1932',
  'Jaraguá do Sul',
  'Futebol',
  'Tradição',
  'Comunidade',
  'Tetracampeão',
  'Invicto 2025',
]

/* ---------- Hero ---------- */
export const heroLede =
  'Fundado em 1932, o clube que representa Jaraguá do Sul dentro e fora de campo.'

/* ---------- Home — seção de história (resumo na inicial) ---------- */
export const homeHistory = {
  eyebrow: 'Nossa História',
  titleLead: 'Tradição desde',
  titleAccent: '1932',
  text: 'Desde 1932, a Sociedade Esportiva João Pessoa é casa do futebol amador em Jaraguá do Sul. Um clube nascido no bairro, que atravessou mais de nove décadas mantendo o mesmo compromisso — um lugar para jogar, para reunir a comunidade e para representar a região dentro de campo.',
  stats: [
    { num: '1932', label: 'Ano de Fundação' },
    { num: '4x', label: 'Títulos Consecutivos' },
    { num: '90+', label: 'Anos de História' },
  ],
}

/* ---------- O Clube — hub institucional (/o-clube) ---------- */
export const clubHub = {
  heroKicker: 'Institucional',
  heroTitle: 'O Clube',
  missionLead:
    'A Sociedade Esportiva João Pessoa é um clube amador de Jaraguá do Sul – SC, fundado em 05/07/1932. Nasceu no bairro João Pessoa e cresceu junto com ele.',
  missionParagraphs: [
    'Mais de nove décadas depois, a missão continua a mesma: manter um lugar para jogar, para reunir a comunidade e para representar a região dentro de campo. Hoje o clube tem time competitivo no futebol amador, estrutura própria para locação e eventos, e um quadro social ativo.',
    'A condução é feita com gestão profissional e prestação de contas, e as portas seguem abertas para sócios e para a vizinhança — a Sociedade é, antes de tudo, um ponto de encontro do bairro.',
  ],
  diretoriaMessage:
    'A palavra da diretoria — missão, prioridades e planos para o clube — será publicada aqui.',
}

/* Cards de acesso rápido no rodapé do hub, na ordem pedida. */
export const clubHubLinks = [
  { to: '/historia', label: 'História', desc: 'A linha do tempo desde 1932 e as conquistas do clube.' },
  { to: '/diretoria', label: 'Diretoria', desc: 'A gestão, os conselhos e o organograma da Sociedade.' },
  { to: '/estrutura', label: 'Estrutura', desc: 'O campo, a quadra coberta e os espaços para eventos.' },
  { to: '/transparencia', label: 'Transparência', desc: 'Estatuto, regimento interno e prestação de contas.' },
]

/* ---------- Diretoria (/diretoria) — órgãos de governança, sem nomes inventados ---------- */
export const diretoria = {
  lede:
    'A Sociedade é conduzida por uma diretoria executiva e fiscalizada por conselhos eleitos em assembleia. A composição atual — nomes, cargos e fotos — será publicada aqui.',
  orgaos: [
    { nome: 'Diretoria executiva', nota: 'Presidência, vice-presidência, tesouraria e secretaria.' },
    { nome: 'Conselho fiscal', nota: 'Fiscaliza as contas e os atos de gestão do clube.' },
    { nome: 'Conselho deliberativo', nota: 'Delibera sobre estatuto, orçamento e as grandes decisões.' },
  ],
}

/* ---------- Nossa História ---------- */
export const historyLede =
  'Desde 1932, o futebol amador de Jaraguá do Sul tem casa. A Sociedade Esportiva João Pessoa nasceu do bairro e cresceu com ele — um clube amador na origem, com gestão profissional na condução.'

export const historyParagraphs = [
  'Ao longo de mais de nove décadas, o clube manteve o mesmo compromisso: um lugar para jogar, para reunir a família e para representar o bairro dentro de campo.',
  'Hoje a Sociedade mantém time competitivo no futebol amador da região, estrutura própria para locação e eventos, e um quadro social ativo.',
]

export const historyMarks = [
  { k: 'Fundação', v: '05 de julho de 1932' },
  { k: 'Sede', v: 'Jaraguá do Sul – SC' },
  { k: 'Modalidade', v: 'Futebol amador' },
]

/* ---------- Página /historia (tema escuro) ----------
   Fatos confirmados: fundação 05/07/1932 no bairro João Pessoa; futebol amador
   de Jaraguá do Sul; Tetracampeão Invicto 2025; estrutura própria; projeto
   social com +120 crianças de 5–15 anos. O que ainda falta (nomes dos
   fundadores, títulos históricos, presidentes, hino, acervo antigo) fica como
   espaço reservado — nada inventado. */
export const history = {
  heroImg: histHero,
  heroKicker: 'Desde 1932',
  heroTitle: 'Nossa História',
  intro:
    'Desde 1932, o futebol amador de Jaraguá do Sul tem casa. A Sociedade Esportiva João Pessoa nasceu do bairro e cresceu com ele.',
  timeline: [
    {
      era: '1932',
      titulo: 'A fundação no bairro',
      texto:
        'A Sociedade Esportiva João Pessoa foi fundada em 5 de julho de 1932, no bairro João Pessoa, em Jaraguá do Sul. Um clube de bairro na origem — feito pelos próprios moradores para ter onde jogar e se reunir. Os nomes dos fundadores e a memória dos primeiros anos serão publicados aqui conforme o acervo for organizado.',
    },
    {
      era: 'Décadas seguintes',
      titulo: 'Tradição e clássicos',
      texto:
        'Ao longo das décadas, a João Pessoa se firmou como uma das forças do futebol amador da cidade — presença constante nas competições da região e nos clássicos do bairro. A relação completa dos títulos históricos está em levantamento.',
    },
    {
      era: 'Hoje',
      titulo: 'Era atual e projetos',
      texto:
        'Nos últimos anos vieram os títulos estaduais amadores — incluindo o Tetracampeonato Invicto de 2025 —, a modernização da estrutura própria (campo, quadra coberta e salões) e o projeto social que oferece futebol gratuito para mais de 120 crianças de 5 a 15 anos da comunidade.',
    },
  ],
  identity: {
    escudoImg,
    escudoTitle: 'O escudo e as cores',
    escudoText:
      'O verde e o branco acompanham a João Pessoa desde a fundação e são a identidade do clube dentro e fora de campo. O escudo carrega o nome da Sociedade e é o símbolo que o bairro reconhece. A descrição do brasão e sua evolução ao longo das décadas serão detalhadas aqui.',
    hinoTitle: 'O hino do clube',
    hinoText:
      'A letra e a gravação oficial do hino da Sociedade Esportiva João Pessoa serão disponibilizadas aqui.',
    hinoAudio: null,
  },
  conquistasEyebrow: 'Conquistas',
  conquistasTitle: 'Conquistas',
  conquistasIntro:
    'Do elenco campeão de 2025 aos títulos que construíram a tradição do clube.',
  memorial: {
    eyebrow: 'Memorial',
    titulo: 'Presidentes & diretores',
    texto:
      'O clube reúne o registro de quem o presidiu e o dirigiu ao longo das décadas. Os nomes, os períodos e as fotos serão publicados aqui.',
    vagas: 6,
  },
  galleryTitle: 'Acervo em imagens',
  galleryNote:
    'Fotos do acervo da Sociedade. O material das primeiras décadas está em digitalização.',
}

/* ---------- Conquistas ---------- */
export const achievement = {
  title: 'Tetracampeão Invicto',
  year: '2025',
  line: 'Quatro títulos consecutivos — sem uma única derrota na campanha.',
  photoCaption: 'O elenco campeão de 2025.',
}

/* ---------- Nosso Elenco (campeão 2025) ---------- */
export const squadNote =
  'Elenco campeão de 2025. Números, posições e fotos em atualização.'

// grupo: 'goleiros' | 'defensores' | 'meias' | 'atacantes' | null (→ "Elenco").
// numero: null → mostra "–". foto: null → silhueta genérica. posicao: '' → "A definir".
export const squad = [
  'Cesinha', 'Gabriel', 'Petri', 'Ricardo', 'Derick', 'Espeto', 'Charles',
  'Rayan', 'Nicolas', 'Dudu', 'Betão', 'Silvinho', 'Carioca', 'Fleitux',
  'Pruzak', 'Jhoy', 'Robson', 'Jean Felipe', 'Hugo', 'Zomer', 'Caveira',
  'Kleyffer',
].map((nome) => ({ nome, posicao: '', numero: null, grupo: null, foto: null }))

/* Grupos por posição — o /futebol/elenco monta na hora a partir de `grupo`. */
export const rosterGroups = [
  { key: 'goleiros', label: 'Goleiros' },
  { key: 'defensores', label: 'Defensores' },
  { key: 'meias', label: 'Meias' },
  { key: 'atacantes', label: 'Atacantes' },
]

/* ---------- Futebol — comissão técnica e diretoria de futebol ----------
   Só Kleber Rangel é confirmado (gerente de futebol, notícia do clube). O
   resto são cargos com "A definir" — nomes e fotos entram depois. */
export const footballStaff = {
  comissao: {
    eyebrow: 'Futebol',
    title: 'Comissão técnica',
    intro:
      'A comissão que prepara e conduz o elenco campeão. Os nomes e as fotos serão publicados aqui.',
    people: [
      { nome: null, cargo: 'Técnico', foto: null },
      { nome: null, cargo: 'Auxiliar técnico', foto: null },
      { nome: null, cargo: 'Preparador físico', foto: null },
      { nome: null, cargo: 'Preparador de goleiros', foto: null },
      { nome: null, cargo: 'Analista de desempenho', foto: null },
      { nome: null, cargo: 'Fisioterapeuta', foto: null },
      { nome: null, cargo: 'Massagista', foto: null },
      { nome: null, cargo: 'Roupeiro', foto: null },
    ],
  },
  diretoria: {
    eyebrow: 'Futebol',
    title: 'Diretoria de futebol',
    intro: 'A gestão do departamento de futebol da Sociedade.',
    people: [
      { nome: 'Kleber Rangel', cargo: 'Gerente de futebol', foto: noticiaGerente },
      { nome: null, cargo: 'Diretor de futebol', foto: null },
      { nome: null, cargo: 'Coordenador da base', foto: null },
      { nome: null, cargo: 'Supervisor de futebol', foto: null },
    ],
  },
}

/* ---------- Futebol — calendário ----------
   Um compromisso confirmado (notícia do clube). O calendário completo da
   temporada entra aqui conforme divulgado. Sem placares/estádios inventados. */
export const footballChampionships = ['Estadual amador 2026']
export const fixtures = [
  {
    id: 'estadual-2026-quartas-volta',
    championship: 'Estadual amador 2026',
    stage: 'Quartas de final — jogo da volta',
    date: '2026-09-05',
    time: '15h',
    home: { name: 'S.E. João Pessoa', crest: escudoImg },
    away: { name: 'Bela Vista', crest: null },
    venue: 'São José – SC',
    broadcast: 'YouTube @ECBelaVistaSJ',
    score: null,
  },
]

/* ---------- Home — preview "Nossa Estrutura" ---------- */
export const homeStructure = {
  eyebrow: 'Patrimônio do clube',
  title: 'Nossa Estrutura',
  sub: 'Espaços modernos e tradicionais preparados para jogos, eventos e convivência da comunidade.',
}

/* ---------- Home — preview "Notícias & atualidades" ----------
   Conteúdo real fornecido pelo clube. O mural completo vive em /noticias. */
export const homeNews = {
  eyebrow: 'Fique por dentro',
  title: 'Notícias & atualidades',
  sub: 'Acompanhe os últimos acontecimentos, resultados de jogos e comunicados da Sociedade.',
  items: [
    {
      categoria: 'Estadual 2026',
      quando: '05/09 · 15h',
      titulo: 'AGORA É DECISÃO 💚🤍 — Quartas de Final do Estadual 2026',
      resumo:
        'Neste sábado (05/09), às 15h, o João Pessoa enfrenta o Bela Vista em São José pelo jogo da volta. Transmissão ao vivo pelo YouTube @ECBelaVistaSJ.',
      foto: noticiaJogo,
    },
    {
      categoria: 'Comunidade',
      titulo: 'Projeto social em Jaraguá do Sul incentiva futebol gratuito',
      resumo:
        'Aulas 100% gratuitas para mais de 120 crianças de 5 a 15 anos, oferecendo kit completo e acompanhamento do desempenho escolar.',
      foto: noticiaProjeto,
    },
    {
      categoria: 'Institucional',
      titulo: 'SEJP apresenta Kleber Rangel como novo gerente',
      resumo:
        'Profissional com passagens por Vasco, Flamengo, Malwee e Seleção Brasileira chega para fortalecer a gestão e projetos do clube.',
      foto: noticiaGerente,
    },
  ],
}

/* ---------- Home — preview "Nosso Elenco" (deck de fotos) ----------
   Time real (elenco campeão de 2025). Badges são fatos confirmados. */
export const homeSquad = {
  eyebrow: 'Nosso elenco',
  title: 'S.E. João Pessoa',
  text: 'O grupo que defende a João Pessoa dentro de campo: atletas da região, formados no futebol amador de Jaraguá do Sul, com a raça e o compromisso que a camisa cobra a cada rodada. É o elenco que construiu a campanha invicta e leva o nome do bairro para todo lado.',
  badges: ['Categoria amadora', 'Elenco principal', 'Tetracampeão invicto 2025'],
  cardBadge: 'SEJP em campo',
  photos: [
    { src: elencoTetra, alt: 'Elenco da S.E. João Pessoa comemorando o título de Tetracampeão Invicto de 2025' },
    { src: elencoAmarelo, alt: 'Jogadores da S.E. João Pessoa com o uniforme amarelo comemorando um título' },
    { src: elencoBandeira, alt: 'Jogadores erguendo a bandeira da Sociedade Esportiva João Pessoa' },
    { src: elencoGol, alt: 'Jogador da S.E. João Pessoa comemorando um gol' },
    { src: elencoTimeGol, alt: 'Time da S.E. João Pessoa comemorando um gol em campo' },
  ],
  cta: { label: 'Conhecer elenco completo', to: '/futebol/elenco' },
}

/* ---------- Nossa Estrutura ---------- */
// Patrimônio do clube — não são serviços comerciais.
export const facilitiesLede =
  'O patrimônio do clube: o campo onde o time joga e os espaços que a Sociedade mantém para os sócios, para locação e para eventos.'

export const facilities = [
  {
    nome: 'Campo Principal',
    desc: 'O campo oficial da Sociedade, com gramado natural. Disponível para locação por período.',
    detalhes: ['Gramado natural', 'Locação por período'],
    foto: campoPrincipal,
  },
  {
    nome: 'Quadra society coberta',
    desc: 'Quadra society coberta, com iluminação e vestiários com chuveiro.',
    detalhes: ['Cobertura e iluminação', 'Vestiários com chuveiro', 'Por hora ou mensalidade'],
    foto: quadraSociety,
  },
  {
    nome: 'Choupana 01',
    desc: 'Espaço com churrasqueira para confraternizações menores.',
    detalhes: ['33 m²', 'Churrasqueira'],
    foto: choupana,
  },
  {
    nome: 'Choupana 02',
    desc: 'Espaço com churrasqueira para grupos maiores.',
    detalhes: ['50 m²', 'Churrasqueira para grupos'],
    foto: choupana,
  },
  {
    nome: 'Salão 01',
    desc: 'Salão climatizado para eventos de menor porte.',
    detalhes: ['140 m²', 'Climatizado', 'Até 120 pessoas'],
    foto: salao1,
  },
  {
    nome: 'Salão 02',
    desc: 'O maior salão do clube, climatizado, para grandes eventos.',
    detalhes: ['411 m²', 'Climatizado', 'Mais de 500 pessoas'],
    foto: salao2,
  },
]

/* ---------- Transparência (estrutura pronta, sem conteúdo inventado) ---------- */
export const transparencyLede =
  'Prestação de contas, documentos institucionais e informações administrativas do clube. As publicações aparecem aqui conforme forem disponibilizadas pela diretoria.'

export const transparencyDocs = [
  { categoria: 'Estatuto social', nota: 'Documento em breve' },
  { categoria: 'Regimento interno', nota: 'Documento em breve' },
  { categoria: 'Prestação de contas', nota: 'Documento em breve' },
  { categoria: 'Balanço financeiro', nota: 'Documento em breve' },
  { categoria: 'Atas de assembleia', nota: 'Documento em breve' },
  { categoria: 'Editais e convocações', nota: 'Documento em breve' },
]

/* ---------- Notícias (mural institucional — placeholders) ---------- */
export const newsLede =
  'Comunicados, editais, convocações, resultados de jogos e avisos do clube. As publicações aparecem aqui.'

// data: null enquanto não há publicação real — o card mostra o selo "aguardando".
export const newsItems = [
  { tipo: 'Comunicado', titulo: 'Espaço reservado para os comunicados oficiais do clube.', data: null },
  { tipo: 'Edital', titulo: 'Espaço reservado para editais e convocações de assembleia.', data: null },
  { tipo: 'Resultado', titulo: 'Espaço reservado para os resultados dos jogos da Sociedade.', data: null },
]

/* ---------- Quem Apoia (logos vêm depois) ---------- */
export const supportersLede = 'As marcas que caminham com a Sociedade Esportiva João Pessoa.'
export const sponsorSlots = Array.from({ length: 6 }, (_, i) => i + 1)
export const partnerSlots = Array.from({ length: 3 }, (_, i) => i + 1)

/* ---------- Home — preview "Quem Apoia" (mural de patrocínio) ----------
   Estrutura em 3 níveis, como nos clubes grandes. Sem marcas reais: os
   espaços ficam reservados (moldura tracejada + marca abstrata) até a
   diretoria fechar os patrocínios. Trocar `logo` por um caminho de imagem
   e o nome real para preencher um espaço. */
export const homeSupporters = {
  eyebrow: 'Quem apoia',
  title: 'Quem caminha com a Sociedade',
  note: 'Espaços reservados',
  cta: { label: 'Seja um apoiador', to: '/contato' },
  tiers: [
    { key: 'master', label: 'Patrocinadores master', slots: makeSlots(2) },
    { key: 'official', label: 'Patrocinadores oficiais', slots: makeSlots(4) },
    { key: 'partner', label: 'Parceiros e apoiadores', slots: makeSlots(6) },
  ],
}

function makeSlots(n) {
  return Array.from({ length: n }, () => ({ nome: null, logo: null }))
}

/* ---------- Contato ---------- */
export const contact = {
  intro: 'Locação de campo, quadra e salões, informações sobre o quadro social e assuntos institucionais.',
  marks: [
    { k: 'Telefone', v: 'A confirmar', href: null },
    { k: 'WhatsApp', v: 'A confirmar', href: null },
    { k: 'E-mail', v: 'A confirmar', href: null },
    { k: 'Endereço', v: `${city} · endereço a confirmar`, href: null },
    { k: 'Instagram', v: instagramHandle, href: instagramUrl },
  ],
}

/* ---------- Rodapé ---------- */
export const footerColumns = [
  {
    title: 'O Clube',
    links: [
      { label: 'Apresentação', to: '/o-clube' },
      { label: 'História', to: '/historia' },
      { label: 'Diretoria', to: '/diretoria' },
      { label: 'Estrutura', to: '/estrutura' },
      { label: 'Transparência', to: '/transparencia' },
    ],
  },
  {
    title: 'Mais',
    links: [
      { label: 'Futebol', to: '/futebol/elenco' },
      { label: 'Notícias', to: '/noticias' },
      { label: 'Quem Apoia', to: '/quem-apoia' },
      { label: 'Contato', to: '/contato' },
    ],
  },
]

export const socialLinks = [
  { label: 'Instagram', icon: 'instagram', href: instagramUrl },
]
