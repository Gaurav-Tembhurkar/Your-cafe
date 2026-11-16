# Your Café
`npm install` then `npm run dev` (build: `npm run build`).

**Customise:** `src/data/config.js` (name, WhatsApp number, address, hours, map query, socials) and `src/data/products.js` (menu).

**Photos:** online placeholders are set in `src/data/config.js` (`IMAGES`). Swap any value for your own URL or a file in `public/images/`.

**Payments:** none are integrated. Orders go out via WhatsApp. To add a gateway, register a provider in `src/lib/checkout.js`.
