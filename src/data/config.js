export const CAFE = {
  name: 'Your Café',
  tagline: 'Slow coffee, warm bread, good company.',
  whatsappNumber: '910000000000', // country code + number, digits only
  address: '[Your street address], [City], [State] [PIN]', // placeholder
  mapQuery: 'Nagpur, Maharashtra', // replace with your café's address or name
  phone: '+91 00000 00000',
  email: 'hello@yourcafe.example',
  hours: [['Mon – Fri', '8:00 am – 9:00 pm'], ['Sat – Sun', '8:00 am – 10:00 pm']],
  socials: [['Instagram', 'https://instagram.com/'], ['Facebook', 'https://facebook.com/'], ['X', 'https://x.com/']],
}
export const LINKS = [['Home', '#home'], ['Menu', '#menu'], ['Cold Brew', '#cold-brew'], ['Our Story', '#story'], ['Gallery', '#gallery'], ['Visit', '#visit']]
// Online photos (loremflickr serves Flickr photos by keyword; `lock` keeps each one fixed).
// To use your own photo, replace a value with a full URL or '/images/name.jpg' (file in public/images).
const f = (w, h, tags, lock) => `https://loremflickr.com/${w}/${h}/${tags}/all?lock=${lock}`
const IMAGES = {
  'cold-brew-hero': 'https://images.unsplash.com/photo-1565990436705-4bc429d16511?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  hero: 'https://images.unsplash.com/photo-1732303835711-5cac131b5380?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  about: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  cappuccino: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'flat-white': f(600, 450, 'flatwhite,coffee', 32),
  'cold-brew': f(600, 450, 'iced,coffee', 33),
  'pour-over': f(600, 450, 'pourover,coffee', 34),
  croissant: f(600, 450, 'croissant', 35),
  'almond-croissant': f(600, 450, 'almond,croissant', 36),
  sourdough: f(600, 450, 'sourdough', 37),
  'cinnamon-roll': f(600, 450, 'cinnamon,roll', 38),
  tiramisu: f(600, 450, 'tiramisu', 39),
  cheesecake: f(600, 450, 'cheesecake', 40),
  tart: f(600, 450, 'chocolate,tart', 41),
  affogato: f(600, 450, 'affogato', 42),
}
export const img = (name) => IMAGES[name]
