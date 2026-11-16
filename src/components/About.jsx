import { CAFE, img } from '../data/config.js'
import Img from './Img.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="story" className="section alt">
      <div className="container split">
        <Reveal><Img className="about-img" src={img('about')} alt="Sunlit café interior with wooden tables and ceramic cups" /></Reveal>
        <Reveal delay={0.1}>
          <h2>More than coffee. A feeling.</h2>
          <p>{CAFE.name} began with a simple idea: a café should feel like the best part of your morning. We buy beans from small farms, roast them in small batches and pull every shot with patience.</p>
          <p>The ovens start before dawn. Croissants, loaves and cakes come out warm, and they are gone by the afternoon. Sit by the window, stay as long as you like.</p>
          <p className="note">Sample copy. Replace with your own story.</p>
        </Reveal>
      </div>
    </section>
  )
}
