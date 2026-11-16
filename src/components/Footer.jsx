import { CAFE, LINKS } from '../data/config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-in">
        <div><a href="#home" className="logo">{CAFE.name}</a><p>{CAFE.tagline}</p></div>
        <nav aria-label="Footer">{LINKS.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <nav aria-label="Social media">{CAFE.socials.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer">{l}</a>)}</nav>
      </div>
      <p className="container copy">© {new Date().getFullYear()} {CAFE.name}. All rights reserved.</p>
    </footer>
  )
}
