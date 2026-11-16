import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatINR, providers } from '../lib/checkout.js'
import Img from './Img.jsx'

export default function Cart() {
  const { items, open, setOpen, dispatch, subtotal, count } = useCart()
  const [checkout, setCheckout] = useState(false)
  const [customer, setCustomer] = useState({ name: '', note: '' })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open, setOpen])
  useEffect(() => { if (!items.length) setCheckout(false) }, [items.length])

  const submit = (e) => {
    e.preventDefault()
    providers.whatsapp.submit(items, subtotal, customer)
  }
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="scrim" className="scrim" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside key="drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Your cart"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}>
            <div className="drawer-head"><h2>Your order ({count})</h2>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close cart"><X size={22} /></button></div>
            {items.length === 0 ? (
              <div className="empty"><ShoppingBag size={40} /><p>Your bag is empty.</p>
                <a className="btn" href="#menu" onClick={() => setOpen(false)}>Browse the menu</a></div>
            ) : (
              <>
                <ul className="lines">
                  {items.map((i) => (
                    <li key={i.id}>
                      <Img className="thumb" src={i.image} alt={i.name} />
                      <div className="grow"><strong>{i.name}</strong><span className="amt">{formatINR(i.price * i.qty)}</span>
                        <div className="qty">
                          <button onClick={() => dispatch({ type: 'change', id: i.id, delta: -1 })} aria-label={`Decrease ${i.name}`}><Minus size={14} /></button>
                          <span aria-live="polite">{i.qty}</span>
                          <button onClick={() => dispatch({ type: 'change', id: i.id, delta: 1 })} aria-label={`Increase ${i.name}`}><Plus size={14} /></button>
                        </div></div>
                      <button className="icon-btn" onClick={() => dispatch({ type: 'remove', id: i.id })} aria-label={`Remove ${i.name}`}><Trash2 size={18} /></button>
                    </li>
                  ))}
                </ul>
                <div className="drawer-foot">
                  <div className="sub"><span>Subtotal</span><strong>{formatINR(subtotal)}</strong></div>
                  {!checkout ? (
                    <button className="btn full" onClick={() => setCheckout(true)}>Checkout</button>
                  ) : (
                    <form onSubmit={submit}>
                      <label>Your name<input required value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} autoComplete="name" /></label>
                      <label>Note (optional)<textarea rows="2" value={customer.note} onChange={(e) => setCustomer({ ...customer, note: e.target.value })} /></label>
                      <button className="btn full" type="submit">{providers.whatsapp.label}</button>
                      <p className="note">No online payment. Your order opens in WhatsApp and the café confirms it with you.</p>
                    </form>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
