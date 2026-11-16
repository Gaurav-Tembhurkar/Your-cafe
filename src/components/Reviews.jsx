import { Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

// SAMPLE CONTENT: replace with genuine customer reviews before launch.
const reviews = [
  ['Sample Customer A', 'The flat white is the best in the neighbourhood, and the croissants disappear fast.'],
  ['Sample Customer B', 'A calm, beautiful space. I come here to work and always stay longer than planned.'],
  ['Sample Customer C', 'The tiramisu alone is worth the trip. Friendly staff and great coffee.'],
]
export default function Reviews() {
  return (
    <section className="section alt">
      <div className="container">
        <Reveal><h2>Kind words</h2><p className="lead note">Sample reviews. Replace with real customer feedback.</p></Reveal>
        <div className="reviews">
          {reviews.map(([name, text], i) => (
            <Reveal key={name} delay={i * 0.08}>
              <blockquote className="review">
                <div className="stars" role="img" aria-label="5 out of 5 stars">{[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}</div>
                <p>{text}</p><footer>{name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
