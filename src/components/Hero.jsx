import { motion } from 'framer-motion'
import { CAFE, img } from '../data/config.js'
import Img from './Img.jsx'

const rise = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } })

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <motion.h1 {...rise(0.1)}>Life begins after coffee.</motion.h1>
        <motion.p {...rise(0.3)}>{CAFE.name} is a small specialty coffee bar and bakery. We roast with care, bake before sunrise and keep a table free for you.</motion.p>
        <motion.a {...rise(0.45)} whileHover={{ y: -2 }} className="btn" href="#menu">Explore menu</motion.a>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <Img className="hero-img" src={img('hero')} alt="Cappuccino with latte art on a ceramic cup in warm morning light" loading="eager" />
        <span className="tag t1">Roasted weekly</span>
        <span className="tag t2">Baked every morning</span>
      </motion.div>
    </section>
  )
}
