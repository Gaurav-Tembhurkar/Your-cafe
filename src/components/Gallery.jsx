import { motion } from 'framer-motion'
import { img } from '../data/config.js'
import Img from './Img.jsx'
import Reveal from './Reveal.jsx'

const shots = [
  'Barista preparing espresso at the machine', 'Latte art in a minimal ceramic cup', 'Golden croissants on a wooden board',
  'Warm wooden café interior with natural light', 'Friends sharing coffee and pastries at a table', 'Fresh sourdough loaves cooling on a rack',
]
export default function Gallery() {
  return (
    <section id="gallery" className="section container">
      <Reveal><h2>Inside the café</h2></Reveal>
      <div className="gallery">
        {shots.map((alt, i) => (
          <motion.figure key={alt} className={`g g${i}`} whileHover={{ scale: 0.985 }} transition={{ duration: 0.3 }}>
            <Img src={img(`gallery-${i + 1}`)} alt={alt} />
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
