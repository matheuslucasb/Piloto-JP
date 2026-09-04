import { useEffect } from 'react'

export default function PageHeader({ title, subtitle }) {
  useEffect(() => {
    document.title = `${title} · Sociedade Esportiva João Pessoa`
  }, [title])

  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </>
  )
}
