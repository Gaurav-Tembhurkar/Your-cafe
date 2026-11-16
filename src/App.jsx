import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Location from './components/Location.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import ColdBrew from './components/ColdBrew.jsx'
import './App.css'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main><Hero /><Menu /><ColdBrew /><About /><Gallery /><Reviews /><Location /></main>
      <Footer />
      <Cart />
    </MotionConfig>
  )
}
