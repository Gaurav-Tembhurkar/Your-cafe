import { CAFE } from '../data/config.js'
export const formatINR = (n) => '₹' + n.toLocaleString('en-IN')

export function buildOrderMessage(items, subtotal, customer) {
  const lines = items.map((i) => `• ${i.qty} × ${i.name} — ${formatINR(i.price * i.qty)}`)
  return [`New order for ${CAFE.name}`, '', ...lines, '', `Subtotal: ${formatINR(subtotal)}`,
    `Name: ${customer.name}`, customer.note ? `Note: ${customer.note}` : null].filter((l) => l !== null).join('\n')
}

// Checkout providers. Add a payment gateway by registering another entry here
// (e.g. razorpay: { label, submit(items, subtotal, customer) }). Only WhatsApp exists today.
export const providers = {
  whatsapp: {
    label: 'Order on WhatsApp',
    submit(items, subtotal, customer) {
      const url = `https://wa.me/${CAFE.whatsappNumber}?text=${encodeURIComponent(buildOrderMessage(items, subtotal, customer))}`
      window.open(url, '_blank', 'noopener,noreferrer')
    },
  },
}
