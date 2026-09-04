import { useEffect, useState } from 'react'

// Lê as cores dos tokens CSS para os gráficos acompanharem o tema (claro/escuro).
const read = () => {
  const s = getComputedStyle(document.documentElement)
  const get = (name, fallback) => s.getPropertyValue(name).trim() || fallback
  return {
    success: get('--success', '#3E8E5A'),
    danger: get('--danger', '#C1473A'),
    inkSoft: get('--ink-soft', '#57685D'),
    line: get('--line', '#E1E7DD'),
    ink: get('--ink', '#12201A'),
    blue: get('--chart-blue', '#2F6FED'),
    cyan: get('--chart-cyan', '#0EA5B7'),
    orange: get('--floodlight', '#F2A93B'),
  }
}

export default function useChartColors() {
  const [colors, setColors] = useState(read)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setColors(read())
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  return colors
}
