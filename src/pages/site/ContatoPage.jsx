import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import Accent from '../../components/site/Accent.jsx'
import ContactSection from '../../components/site/ContactSection.jsx'

export default function ContatoPage() {
  useEffect(() => {
    document.title = 'Contato · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter
        id="contato"
        num="01"
        title={<>Fale com o <Accent>clube</Accent></>}
        align="right"
        layout="split"
      >
        <ContactSection />
      </Chapter>
    </div>
  )
}
