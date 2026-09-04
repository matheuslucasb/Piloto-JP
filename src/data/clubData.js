// Dados fictícios do piloto — trocar por API real depois.

/* ---------- Marca ---------- */
export const clubName = ['Sociedade Esportiva', 'João Pessoa']

/* ---------- Login: tipos de acesso ---------- */
export const roles = [
  {
    id: 'guest',
    to: '/visitante',
    variant: 'visitor',
    icon: 'V',
    title: 'Sou visitante',
    desc: 'Não é sócio ainda. Consegue ver quadras, quiosques e o salão de eventos, e reservar informando nome e telefone.',
    chip: 'Visitante',
  },
  {
    id: 'member',
    to: '/socio',
    variant: 'member',
    icon: 'S',
    title: 'Sou sócio',
    desc: 'Acesso à área pessoal: reservas, mensalidade, carteirinha digital, comunicados e mais.',
    chip: 'Sócio — Roberto Alves',
  },
  {
    id: 'admin',
    to: '/admin',
    variant: 'admin',
    icon: 'A',
    title: 'Sou administrador',
    desc: 'Controle total do clube: financeiro, sócios, quadras, eventos, agenda geral e estoque.',
    chip: 'Administrador — Marcos',
  },
]

/* ---------- Grade de quadras (compartilhada visitante + sócio + admin) ---------- */
export const courtDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
export const courtTimes = ['18:00', '19:00', '20:00', '21:00', '22:00']

export const courts = [
  { id: '1', label: 'Society 1' },
  { id: '2', label: 'Society 2' },
]

export const courtBookings = {
  1: {
    'Ter-18:00': 'Zé Ricardo',
    'Qui-19:00': 'Turma Quinta',
    'Sex-20:00': 'Liga Amadores',
    'Sáb-19:00': 'Aniversário Lima',
  },
  2: {
    'Seg-19:00': 'Grupo Trovão',
    'Qua-21:00': 'Amigos do Bairro',
    'Sex-18:00': 'Turma da Firma',
  },
}

/* ---------- Agenda do clube (sócio: "Agenda do clube" / admin: "Agenda geral") ---------- */
export const clubSchedule = [
  { d: '02', m: 'Out', title: 'Jogo amistoso — categoria adulto', sub: 'Society 1, 16h', cat: 'jogo' },
  { d: '03', m: 'Out', title: 'Treino sub-17', sub: 'Society 2, 9h', cat: 'treino' },
  { d: '03', m: 'Out', title: 'Manutenção do gramado — Society 2', sub: 'Quadra fechada até dia 5', cat: 'manutencao' },
  { d: '05', m: 'Out', title: 'Casamento Andrade', sub: 'Salão de eventos, dia todo', cat: 'evento' },
  { d: '15', m: 'Out', title: 'Assembleia geral', sub: 'Salão de eventos, 19h', cat: 'reuniao' },
]

export const scheduleCategoryLabels = {
  jogo: 'Jogo',
  treino: 'Treino',
  evento: 'Evento',
  manutencao: 'Manutenção',
  reuniao: 'Reunião',
}

/* ---------- Área do sócio ---------- */
export const memberProfile = {
  nome: 'Roberto Alves',
  categoria: 'Sócio titular',
  emDia: true,
  proximoVencimento: '05/10',
  valorMensalidade: 'R$ 180,00',
  matricula: '00842',
  desde: '2019',
}

export const memberSlots = [
  { titulo: 'Society 1 — hoje, 20h', situacao: 'Confirmado', status: 'ok' },
  { titulo: 'Society 1 — sexta, 19h', situacao: 'Confirmado', status: 'ok' },
  { titulo: 'Quiosque 2 — sábado, turno tarde', situacao: 'Aguardando', status: 'soon' },
]

export const memberPaymentHistory = [
  { titulo: 'Mensalidade — agosto', status: 'ok', label: 'Pago em 03/08' },
  { titulo: 'Mensalidade — julho', status: 'ok', label: 'Pago em 04/07' },
]

export const quiosqueConsumo = {
  itens: [
    { data: '28/09', item: 'Cerveja long neck', qtd: '4', valor: 'R$ 32,00' },
    { data: '28/09', item: 'Porção de frango', qtd: '1', valor: 'R$ 45,00' },
    { data: '21/09', item: 'Água', qtd: '2', valor: 'R$ 8,00' },
  ],
  total: 'R$ 85,00',
}

export const announcements = [
  {
    titulo: 'Manutenção do gramado — Society 2',
    texto: 'Quadra ficará fechada de 3 a 5 de outubro para reforma do gramado sintético.',
  },
  {
    titulo: 'Assembleia geral',
    texto: 'Dia 15/10, às 19h, no salão de eventos. Pauta: renovação da diretoria.',
  },
  {
    titulo: 'Novo horário do quiosque',
    texto: 'A partir de outubro, o quiosque passa a funcionar até às 23h nos finais de semana.',
  },
]

export const clubDocuments = [
  { titulo: 'Regulamento interno' },
  { titulo: 'Estatuto do clube' },
]

/* ---------- Painel administrativo: visão geral ---------- */
export const overviewKpis = [
  {
    value: '78%',
    label: 'Ocupação das quadras esta semana',
    trend: '+6%',
    dir: 'up',
    icon: 'occupancy',
    accent: 'blue',
  },
  {
    value: '312',
    label: 'Sócios ativos',
    trend: '+4',
    dir: 'up',
    icon: 'members',
    accent: 'cyan',
  },
  {
    value: '24',
    meta: 'R$ 4.320 em aberto',
    label: 'Mensalidades em atraso',
    trend: '+3',
    dir: 'down',
    icon: 'alert',
    accent: 'orange',
  },
  {
    value: 'R$ 6,2k',
    label: 'Saldo do mês',
    trend: '+11%',
    dir: 'up',
    icon: 'wallet',
    accent: 'success',
  },
]

export const upcomingCommitments = [
  { label: 'Hoje, 20h — Society 1', tag: 'Reserva', status: 'ok' },
  { label: 'Amanhã, 9h — Treino sub-17', tag: 'Treino', status: 'info' },
  { label: 'Sáb, 19h — Aniversário Lima', tag: 'Evento', status: 'soon' },
  { label: '3/10 — Manutenção do gramado', tag: 'Manutenção', status: 'late' },
]

// Composição das receitas do mês (bate com o total de "entradas" de Set. no
// financeSeries: 24.800 + 9.600 + 6.900 = 41.300).
export const revenueDistribution = [
  { key: 'mensalidades', label: 'Mensalidades', valor: 24800, trend: '+8%', dir: 'up', accent: 'blue' },
  { key: 'quadras', label: 'Aluguel de quadras', valor: 9600, trend: '+3%', dir: 'up', accent: 'cyan' },
  { key: 'eventos', label: 'Eventos e outros', valor: 6900, trend: '-4%', dir: 'down', accent: 'orange' },
]

// Ocupação por espaço do clube (o clube tem futebol society, salão de eventos
// e quiosques — não modalidades como saibro/beach tennis).
export const spaceOccupancy = [
  { label: 'Society 1', pct: 82, accent: 'blue' },
  { label: 'Society 2', pct: 64, accent: 'cyan' },
  { label: 'Quiosques', pct: 58, accent: 'success' },
  { label: 'Salão de eventos', pct: 45, accent: 'orange' },
]

// Faturamento e agendamentos por dia da semana atual.
export const weeklyBookings = [
  { dia: 'Seg', faturamento: 1800, agendamentos: 6 },
  { dia: 'Ter', faturamento: 2400, agendamentos: 8 },
  { dia: 'Qua', faturamento: 2100, agendamentos: 7 },
  { dia: 'Qui', faturamento: 2900, agendamentos: 9 },
  { dia: 'Sex', faturamento: 4200, agendamentos: 13 },
  { dia: 'Sáb', faturamento: 5600, agendamentos: 17 },
  { dia: 'Dom', faturamento: 3400, agendamentos: 11 },
]

/* ---------- Painel administrativo: financeiro ---------- */
// Série mensal de entradas x saídas (R$) — últimos 12 meses (trailing), Out a Set.
export const financeSeries = [
  { mes: 'Out', entradas: 24000, saidas: 21500 },
  { mes: 'Nov', entradas: 25200, saidas: 22000 },
  { mes: 'Dez', entradas: 29800, saidas: 24200 },
  { mes: 'Jan', entradas: 22600, saidas: 20800 },
  { mes: 'Fev', entradas: 24300, saidas: 21600 },
  { mes: 'Mar', entradas: 27800, saidas: 24700 },
  { mes: 'Abr', entradas: 32000, saidas: 28000 },
  { mes: 'Mai', entradas: 34500, saidas: 29500 },
  { mes: 'Jun', entradas: 33800, saidas: 31000 },
  { mes: 'Jul', entradas: 37200, saidas: 30800 },
  { mes: 'Ago', entradas: 39100, saidas: 33200 },
  { mes: 'Set', entradas: 41300, saidas: 35100 },
]

// Faturamento por dia da semana (reaproveita weeklyBookings — mesma semana
// mostrada na Visão geral) para o filtro "7 dias" do gráfico financeiro.
const WEEKDAY_CYCLE_SET_2026 = ['Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom', 'Seg'] // set/2026 começa numa terça
const weekdayBase = Object.fromEntries(weeklyBookings.map((d) => [d.dia, d.faturamento]))

// Movimentação diária de caixa dos últimos 30 dias (setembro/2026) — gerada a
// partir do padrão semanal acima + uma variação suave e determinística (sem
// Math.random, pra não "piscar" a cada reload) para o filtro "30 dias".
export const financeDaily30 = Array.from({ length: 30 }, (_, i) => {
  const dia = i + 1
  const semana = WEEKDAY_CYCLE_SET_2026[i % 7]
  const variacao = Math.round(Math.sin(i / 4.3) * 260)
  return { label: `${String(dia).padStart(2, '0')}/09`, valor: Math.max(300, weekdayBase[semana] + variacao) }
})

// Movimentação de caixa por hora de hoje — pico no fim de tarde/noite,
// quando as quadras (18h–22h) e o quiosque têm mais movimento; para o
// filtro "24 horas".
export const financeHourly24 = Array.from({ length: 24 }, (_, h) => {
  const distanciaDoPico = Math.abs(h - 19.5)
  const valor = Math.round(620 * Math.exp(-(distanciaDoPico ** 2) / 18))
  return { label: `${String(h).padStart(2, '0')}h`, valor }
})

export const financeKpis = [
  {
    value: 'R$ 41.300',
    label: 'Receita total (mês)',
    trend: '+5,6%',
    dir: 'up',
    meta: 'vs. mês anterior',
    icon: 'revenue',
    accent: 'blue',
  },
  {
    value: 'R$ 35.100',
    label: 'Despesas totais (mês)',
    trend: '+5,7%',
    dir: 'down',
    meta: 'vs. mês anterior',
    icon: 'expense',
    accent: 'cyan',
  },
  {
    value: 'R$ 6.200',
    label: 'Saldo do mês',
    trend: '+5,1%',
    dir: 'up',
    meta: 'vs. mês anterior',
    icon: 'wallet',
    accent: 'success',
  },
  {
    value: '24',
    label: 'Mensalidades em atraso',
    trend: '+3',
    dir: 'down',
    meta: 'R$ 4.320 em aberto',
    icon: 'alert',
    accent: 'orange',
  },
]

export const financeEntries = [
  { data: '28/09', hora: '14:32', descricao: 'Mensalidade — Fernanda Costa', categoria: 'Sócios', valor: '+ R$ 180', tipo: 'in', status: 'pago' },
  { data: '27/09', hora: '10:05', descricao: 'Aluguel salão — Casamento Andrade', categoria: 'Eventos', valor: '+ R$ 4.500', tipo: 'in', status: 'pago' },
  { data: '26/09', hora: '08:47', descricao: 'Manutenção do gramado', categoria: 'Manutenção', valor: '− R$ 2.300', tipo: 'out', status: 'pago' },
  { data: '25/09', hora: '09:15', descricao: 'Conta de energia', categoria: 'Despesas fixas', valor: '− R$ 1.180', tipo: 'out', status: 'pendente' },
  { data: '24/09', hora: '19:20', descricao: 'Reserva avulsa — Society 2', categoria: 'Quadras', valor: '+ R$ 150', tipo: 'in', status: 'pago' },
  { data: '23/09', hora: '20:05', descricao: 'Mensalidade — Diego Martins', categoria: 'Sócios', valor: '+ R$ 180', tipo: 'in', status: 'atrasado' },
  { data: '22/09', hora: '18:40', descricao: 'Reserva avulsa — Society 1', categoria: 'Quadras', valor: '+ R$ 150', tipo: 'in', status: 'pendente' },
  { data: '21/09', hora: '11:00', descricao: 'Compra de material esportivo', categoria: 'Estoque', valor: '− R$ 640', tipo: 'out', status: 'pago' },
]

/* ---------- Painel administrativo: sócios ---------- */
export const members = [
  { nome: 'Fernanda Costa', categoria: 'Titular', venc: '05/09', status: 'ok' },
  { nome: 'Roberto Alves', categoria: 'Titular', venc: '02/09', status: 'late' },
  { nome: 'Juliana Prado', categoria: 'Familiar', venc: '10/09', status: 'ok' },
  { nome: 'Diego Martins', categoria: 'Titular', venc: '01/09', status: 'late' },
  { nome: 'Camila Reis', categoria: 'Titular', venc: '12/09', status: 'ok' },
  { nome: 'Patrícia Lima', categoria: 'Titular', venc: '03/09', status: 'late' },
]

/* ---------- Painel administrativo: eventos ---------- */
// Setembro de 2026 começa numa terça-feira (1 espaço em branco antes do dia 1).
export const eventsMonth = {
  label: 'Datas de setembro',
  daysInMonth: 30,
  blanksBefore: 1,
  reservedDays: [5, 12, 19, 26],
}

/* ---------- Painel administrativo: estoque ---------- */
export const stockKpis = [
  { value: '3', label: 'Itens com estoque baixo' },
  { value: 'R$ 8.940', label: 'Valor total em estoque' },
  { value: '42', label: 'Itens cadastrados' },
]

export const stockItems = [
  { item: 'Cerveja long neck', categoria: 'Bar', atual: '18 un', minimo: '40 un', status: 'low' },
  { item: 'Água mineral', categoria: 'Bar', atual: '96 un', minimo: '50 un', status: 'ok' },
  { item: 'Carvão', categoria: 'Bar', atual: '6 kg', minimo: '15 kg', status: 'low' },
  { item: 'Bolas de futebol', categoria: 'Material esportivo', atual: '9 un', minimo: '10 un', status: 'low' },
  { item: 'Coletes', categoria: 'Material esportivo', atual: '24 un', minimo: '20 un', status: 'ok' },
  { item: 'Redes de gol', categoria: 'Material esportivo', atual: '4 un', minimo: '2 un', status: 'ok' },
]
