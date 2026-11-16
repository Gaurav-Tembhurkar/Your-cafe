import { useState } from 'react'
// Shows the photo; if the file is missing, a tonal placeholder keeps the layout intact.
export default function Img({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`ph ${className}`} role="img" aria-label={alt}><span>{alt}</span></div>
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} {...rest} />
}
