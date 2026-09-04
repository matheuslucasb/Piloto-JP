import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import poster from '../../assets/campojp.jpeg'
import { heroLede, memberCtaTo } from '../../data/siteContent.js'

// Se src/assets/video-hero.mp4 existir, o hero usa o vídeo; senão cai na foto
// do campo (poster). import.meta.glob não quebra o build quando o arquivo falta.
const videoModules = import.meta.glob('../../assets/video-hero.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const heroVideo =
  videoModules['../../assets/video-hero.mp4'] ||
  Object.values(videoModules)[0] ||
  null

export default function Hero() {
  const videoRef = useRef(null)

  // Vídeo: autoplay mudo desde o primeiro segundo; pausa em reduced-motion.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (mq.matches) v.pause()
      else v.play().catch(() => {})
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <section className="site-hero" id="top">
      <div className="site-hero-stage">
        {heroVideo ? (
          <video
            ref={videoRef}
            className="site-hero-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            className="site-hero-bg"
            src={poster}
            alt=""
            aria-hidden="true"
            {...{ fetchpriority: 'high' }}
          />
        )}

        <div className="site-hero-overlay" aria-hidden="true" />
        <div className="site-hero-glow" aria-hidden="true" />
        <div className="site-hero-lines" aria-hidden="true" />

        <div className="site-hero-inner">
          <h1 className="site-hero-name">
            <span>Sociedade Esportiva</span>
            <span>João Pessoa</span>
          </h1>
          <p className="site-hero-lede">{heroLede}</p>
          <Link className="site-hero-cta" to={memberCtaTo}>
            Seja Sócio
          </Link>
        </div>
      </div>
    </section>
  )
}
