import { useEffect } from 'react'

import Hero from '../../components/site/Hero.jsx'
import Marquee from '../../components/site/Marquee.jsx'
import HomeHistory from '../../components/site/HomeHistory.jsx'
import HomeStructure from '../../components/site/HomeStructure.jsx'
import HomeNews from '../../components/site/HomeNews.jsx'
import HomeSquad from '../../components/site/HomeSquad.jsx'
import HomeSupporters from '../../components/site/HomeSupporters.jsx'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <>
      <Hero />
      <Marquee />
      <HomeHistory />
      <HomeStructure />
      <HomeNews />
      <HomeSquad />
      <HomeSupporters />
    </>
  )
}
