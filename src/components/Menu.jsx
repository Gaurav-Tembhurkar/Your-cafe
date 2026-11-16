import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CATEGORIES, products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import Reveal from './Reveal.jsx'

export default function Menu() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? products : products.filter((p) => p.category === cat)
  return (
    <section id="menu" className="section container">
      <Reveal><h2>The menu</h2><p className="lead">Made fresh each day. Prices in Indian rupees.</p></Reveal>
      <div className="filters" role="group" aria-label="Menu categories">
        {CATEGORIES.map((c) => (
          <button key={c} aria-pressed={cat === c} className={`chip ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        <AnimatePresence mode="popLayout">{shown.map((p) => <ProductCard key={p.id} product={p} />)}</AnimatePresence>
      </div>
    </section>
  )
}
