# Your Café

A modern website for a specialty coffee shop and bakery, with a working shopping cart and WhatsApp ordering. Built with React, Vite and Framer Motion.

## Features

- Sticky navigation with a live cart count and a mobile menu
- Hero section, menu, story, gallery, reviews and location sections
- Menu filters for Coffee, Cold Brew, Bakery and Desserts
- A dedicated Cold Brew section with its own menu
- Light and dark theme, saved in the browser
- Shopping cart drawer with add, remove, quantity controls and an accurate ₹ subtotal
- Checkout that sends the order to WhatsApp
- Google Maps embed with a directions button
- Responsive layout for desktop, tablet and mobile
- Subtle animations that respect the visitor's reduced-motion setting

## Tech stack

- React 18 and JavaScript
- Vite
- Framer Motion
- Lucide React icons
- Plain CSS

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/Gaurav-Tembhurkar/your-cafe.git
cd your-cafe
npm install
npm run dev
```

Open the link shown in the terminal, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

The finished site is in the `dist` folder.

## Customising

| What | Where |
| --- | --- |
| Café name, WhatsApp number, address, hours, map location, social links | `src/data/config.js` |
| Menu items, prices and categories | `src/data/products.js` |
| Photos | `IMAGES` list in `src/data/config.js` |
| Colors and styling | `src/App.css` |

To use your own photo, replace its value in `IMAGES` with an image link, or save the file in `public/images/` and use `'/images/name.jpg'`.

## Project structure

```
src/
  components/   Navbar, Hero, Menu, ColdBrew, About, Gallery, Reviews, Location, Cart, Footer
  context/      CartContext.jsx (cart state)
  data/         config.js, products.js
  lib/          checkout.js (WhatsApp ordering)
  App.jsx
  App.css
  main.jsx
```

## Ordering and payments

Orders are sent through WhatsApp, and the café confirms each one with the customer. **No online payment is integrated.** To add a payment gateway later, register a new provider in `src/lib/checkout.js`.

## Before launch

- Replace the placeholder address, phone number, email and WhatsApp number in `src/data/config.js`
- Replace the sample reviews with real customer reviews
- Replace the online placeholder photos with your own
- Review the sample menu items and prices

## Deploying

The site works on free hosts such as Vercel and Netlify. Use `npm run build` as the build command and `dist` as the output folder.
