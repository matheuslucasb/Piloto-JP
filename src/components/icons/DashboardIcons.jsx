// Ícones de traço simples para os cards de métricas do painel administrativo.
// Sem lib de ícones — SVG inline, 22x22, currentColor, mesmo estilo dos demais.
const common = {
  viewBox: '0 0 22 22',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

// Ocupação das quadras — uma quadra em grade.
export function OccupancyIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3" y="4" width="16" height="14" rx="2.2" />
      <path d="M11 4v14M3 11h16" />
    </svg>
  )
}

// Sócios ativos — duas pessoas.
export function MembersIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="8" cy="7.6" r="2.6" />
      <path d="M2.8 18c.5-3 2.6-4.6 5.2-4.6s4.7 1.6 5.2 4.6" />
      <circle cx="15.4" cy="8.4" r="2.1" />
      <path d="M14.6 13.6c2.1.2 3.7 1.8 4.1 4.4" />
    </svg>
  )
}

// Mensalidades em atraso — alerta.
export function AlertIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M11 2.6 20 18.4H2L11 2.6Z" />
      <path d="M11 8.6v4.2" />
      <circle cx="11" cy="15.6" r="0.15" fill="currentColor" stroke="none" />
      <circle cx="11" cy="15.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Saldo do mês — carteira.
export function WalletIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M3 6.4A2.2 2.2 0 0 1 5.2 4.2h11.6A2.2 2.2 0 0 1 19 6.4v9.2a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 15.6V6.4Z" />
      <path d="M3 9.4h16" />
      <path d="M14.4 13.2h2.2" />
    </svg>
  )
}

// Receita total — barras em alta.
export function RevenueIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M3.5 17.5 9 11.8l3.3 3.2 6.2-6.8" />
      <path d="M14.6 8.2h4v4" />
    </svg>
  )
}

// Despesas totais — recibo.
export function ExpenseIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M5.5 2.8h11v16.4l-2.4-1.6-2.1 1.6-2.1-1.6-2.1 1.6-2.3-1.6V2.8Z" />
      <path d="M8 7.4h6M8 10.8h6M8 14.2h3.6" />
    </svg>
  )
}

export const dashboardIcons = {
  occupancy: OccupancyIcon,
  members: MembersIcon,
  alert: AlertIcon,
  wallet: WalletIcon,
  revenue: RevenueIcon,
  expense: ExpenseIcon,
}
