import { Clock, Droplets, Snowflake } from 'lucide-react'
import { img } from '../data/config.js'
import { products } from '../data/products.js'
import { formatINR } from '../lib/checkout.js'
import { useCart } from '../context/CartContext.jsx'
import Img from './Img.jsx'
import Reveal from './Reveal.jsx'

export default function ColdBrew() {
  const { add } = useCart()
  const product = products.find((p) => p.id === 'cold-brew')
  return (
    <section id="cold-brew" className="section cb">
      <div className="container split">
        <Reveal>
          <h2>Cold brew, slowly.</h2>
          <p>We steep coarsely ground beans in cold water, then strain and serve over ice. The result is smooth and naturally sweet, with very little bitterness.</p>
          <ul className="cb-facts">
            <li><Clock size={20} /> Steeped for 18 hours</li>
            <li><Droplets size={20} /> Smooth and low in acid</li>
            <li><Snowflake size={20} /> Served over ice</li>
          </ul>
          <div className="cb-buy">
            <span className="price">{formatINR(product.price)}</span>
            <button className="btn" onClick={() => add(product)}>Add cold brew</button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Img className="about-img" src={img('cold-brew-hero')} alt="Glass of cold brew coffee over ice" />
        </Reveal>
      </div>
    </section>
  )
}