import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { CAFE } from '../data/config.js'
import Reveal from './Reveal.jsx'

export default function Location() {
  const q = encodeURIComponent(CAFE.mapQuery)
  return (
    <section id="visit" className="section container">
      <Reveal><h2>Come say hello</h2></Reveal>
      <div className="split visit">
        <Reveal>
          <ul className="info">
            <li><MapPin size={20} /><span>{CAFE.address}</span></li>
            <li><Phone size={20} /><span>{CAFE.phone}<br />{CAFE.email}</span></li>
            <li><Clock size={20} /><dl>{CAFE.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl></li>
          </ul>
          <a className="btn" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer"><Navigation size={16} /> Get directions</a>
        </Reveal>
        <Reveal delay={0.1}>
          <iframe className="map" title={`Map showing ${CAFE.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://maps.google.com/maps?q=${q}&output=embed`} />
        </Reveal>
      </div>
    </section>
  )
}
