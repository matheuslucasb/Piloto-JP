import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import Accent from '../../components/site/Accent.jsx'
import FacilitiesSection from '../../components/site/FacilitiesSection.jsx'

// Patrimônio do clube: campo, quadra coberta, choupanas e salões — com as
// especificações reais. As fotos de cada espaço entram depois.
export default function EstruturaPage() {
  useEffect(() => {
    document.title = 'Estrutura · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter
        id="estrutura"
        num="01"
        title={<>Nossa <Accent>estrutura</Accent></>}
        align="left"
        layout="stack"
      >
        <FacilitiesSection />
      </Chapter>
    </div>
  )
}
