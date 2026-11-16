import { createContext, useContext, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)

function reducer(items, a) {
  switch (a.type) {
    case 'add': {
      const found = items.find((i) => i.id === a.product.id)
      return found ? items.map((i) => (i.id === found.id ? { ...i, qty: i.qty + 1 } : i)) : [...items, { ...a.product, qty: 1 }]
    }
    case 'change':
      return items.map((i) => (i.id === a.id ? { ...i, qty: i.qty + a.delta } : i)).filter((i) => i.qty > 0)
    case 'remove': return items.filter((i) => i.id !== a.id)
    case 'clear': return []
    default: return items
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])
  const [open, setOpen] = useState(false)
  const value = useMemo(() => ({
    items, open, setOpen, dispatch,
    count: items.reduce((n, i) => n + i.qty, 0),
    subtotal: items.reduce((n, i) => n + i.qty * i.price, 0),
    add: (product) => dispatch({ type: 'add', product }),
  }), [items, open])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)
