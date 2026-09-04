import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import Accent from '../../components/site/Accent.jsx'
import ComingSoon from '../../components/site/ComingSoon.jsx'

export default function QuemApoiaPage() {
  useEffect(() => {
    document.title = 'Quem Apoia · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter
        id="quem-apoia"
        num="01"
        title={<>Quem <Accent>apoia</Accent></>}
        align="left"
        layout="center"
      >
        <ComingSoon>
          Os patrocinadores e parceiros que caminham com a Sociedade Esportiva
          João Pessoa serão apresentados aqui.
        </ComingSoon>
      </Chapter>
    </div>
  )
}
