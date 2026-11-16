import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Img from './Img.jsx'
import { formatINR } from '../lib/checkout.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { add } = useCart()
  return (
    <motion.article layout className="card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Img className="card-img" src={product.image} alt={`${product.name}, ${product.category.toLowerCase()}`} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card-foot">
          <span className="price">{formatINR(product.price)}</span>
          <motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -1 }} className="btn sm" onClick={() => add(product)} aria-label={`Add ${product.name} to cart`}>
            <Plus size={16} /> Add
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
