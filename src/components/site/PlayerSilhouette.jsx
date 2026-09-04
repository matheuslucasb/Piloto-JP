// Placeholder para a foto de um jogador — silhueta genérica de cabeça e ombros.
// Substituída pela foto real assim que o campo `foto` do jogador for preenchido.
// Decorativa: o nome do jogador vem logo abaixo como texto.
export default function PlayerSilhouette() {
  return (
    <svg
      className="site-player-sil"
      viewBox="0 0 100 110"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      <circle cx="50" cy="42" r="20" fill="var(--pitch-mid)" opacity="0.5" />
      <path
        d="M12 110c0-22 17-38 38-38s38 16 38 38Z"
        fill="var(--pitch-mid)"
        opacity="0.5"
      />
    </svg>
  )
}
