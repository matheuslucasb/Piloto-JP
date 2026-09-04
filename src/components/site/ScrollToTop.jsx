import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// A cada troca de rota, salta para o topo (ou para a seção da âncora, se a URL
// trouxer uma e o elemento existir) — sempre instantâneo, para a nova página
// entrar do começo e as animações de revelação dispararem do zero. Numa carga
// direta com âncora, reancora enquanto o layout assenta (fontes, imagens),
// abortando assim que o usuário rola.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    let done = false

    const anchor = () => {
      if (done) return
      const el = id && document.getElementById(id)
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' })
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    anchor()
    const raf = requestAnimationFrame(anchor)

    if (!id || !document.getElementById(id)) {
      return () => {
        done = true
        cancelAnimationFrame(raf)
      }
    }

    const stop = () => {
      done = true
    }
    window.addEventListener('wheel', stop, { passive: true, once: true })
    window.addEventListener('touchmove', stop, { passive: true, once: true })
    window.addEventListener('keydown', stop, { once: true })

    let prevTop = null
    let settled = 0
    let timer = 0
    const retry = () => {
      if (done) return
      const el = document.getElementById(id)
      if (!el) return
      const top = Math.round(el.getBoundingClientRect().top)
      anchor()
      if (prevTop !== null && Math.abs(top - prevTop) < 2) settled += 1
      else settled = 0
      prevTop = Math.round(el.getBoundingClientRect().top)
      if (settled < 4) timer = window.setTimeout(retry, 80)
    }
    timer = window.setTimeout(retry, 80)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!done) anchor()
      })
    }

    return () => {
      done = true
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchmove', stop)
      window.removeEventListener('keydown', stop)
    }
  }, [pathname, hash])

  return null
}
