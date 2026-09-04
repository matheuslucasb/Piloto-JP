// Ícones de redes sociais — SVG autoral, mesmo traço e peso (1.5px, sem preenchimento).
export default function SocialIcon({ name }) {
  const common = {
    className: 'site-social-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'facebook') {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <path d="M14.4 20.5v-6h2l.4-2.6h-2.4v-1.6c0-.75.3-1.2 1.3-1.2h1.2V6.6c-.5-.06-1.3-.1-2-.1-2 0-3.2 1.15-3.2 3.3v1.7H9.4V14h2.3v6.5" />
      </svg>
    )
  }
  // instagram
  return (
    <svg {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
