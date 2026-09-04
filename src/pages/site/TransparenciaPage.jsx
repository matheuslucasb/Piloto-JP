import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import TransparencySection from '../../components/site/TransparencySection.jsx'

// Documentos institucionais: estatuto social, regimento interno, prestação de
// contas. A estrutura fica pronta; os arquivos entram conforme publicados.
export default function TransparenciaPage() {
  useEffect(() => {
    document.title = 'Transparência · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter
        id="transparencia"
        num="01"
        title="Transparência"
        align="left"
        layout="stack"
        density="compact"
      >
        <TransparencySection />
      </Chapter>
    </div>
  )
}
