import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import ComingSoon from '../../components/site/ComingSoon.jsx'

export default function NoticiasPage() {
  useEffect(() => {
    document.title = 'Notícias · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter
        id="noticias"
        num="01"
        title="Notícias"
        align="right"
        layout="center"
      >
        <ComingSoon>
          Comunicados, editais, convocações de assembleia e resultados dos jogos
          da Sociedade passam a ser publicados aqui.
        </ComingSoon>
      </Chapter>
    </div>
  )
}
