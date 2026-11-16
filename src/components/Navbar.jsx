import { useEffect, useState } from 'react'
import { ShoppingBag, Menu as MenuIcon, X, Moon, Sun } from 'lucide-react'
import { CAFE, LINKS } from '../data/config.js'
import { useCart } from '../context/CartContext.jsx'

const getInitialTheme = () => {
  try { const saved = localStorage.getItem('theme'); if (saved) return saved } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const { count, setOpen: openCart } = useCart()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const dark = theme === 'dark'
  return (
    <header className="nav">
      <div className="container nav-in">
        <a href="#home" className="logo">{CAFE.name}</a>
        <nav id="primary-nav" className={`links ${open ? 'show' : ''}`} aria-label="Primary">
          {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setTheme(dark ? 'light' : 'dark')} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button className="icon-btn bag" onClick={() => openCart(true)} aria-label={`Open cart, ${count} items`}>
            <ShoppingBag size={22} />{count > 0 && <span className="badge">{count}</span>}
          </button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label="Toggle menu">
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}