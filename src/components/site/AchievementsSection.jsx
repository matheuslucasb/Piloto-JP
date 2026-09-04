import { achievement } from '../../data/siteContent.js'
import { conquests } from '../../data/siteMedia.js'
import Carousel from './Carousel.jsx'

export default function AchievementsSection() {
  return (
    <>
      <div className="site-honour">
        <p className="site-honour-title">{achievement.title}</p>
        <p className="site-honour-year">{achievement.year}</p>
        <p className="site-honour-line">{achievement.line}</p>
      </div>

      <Carousel
        slides={conquests}
        variant="framed"
        label="Galeria de conquistas do clube"
      />
    </>
  )
}
