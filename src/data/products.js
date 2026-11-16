import { img } from './config.js'
export const CATEGORIES = ['All', 'Coffee', 'Bakery', 'Desserts']
const p = (id, name, category, price, description) => ({ id, name, category, price, description, image: img(id) })
export const products = [
  p('cappuccino', 'Cappuccino', 'Coffee', 190, 'Double ristretto, silky steamed milk, a thick foam cap.'),
  p('flat-white', 'Flat White', 'Coffee', 210, 'Velvety microfoam over a bold, caramel-sweet espresso.'),
  p('cold-brew', 'Cold Brew', 'Coffee', 230, 'Steeped for 18 hours. Smooth, low acid, served over ice.'),
  p('pour-over', 'Pour Over', 'Coffee', 260, 'Single-origin beans brewed by hand, one cup at a time.'),
  p('croissant', 'Butter Croissant', 'Bakery', 160, 'Laminated by hand, baked until shatteringly crisp.'),
  p('almond-croissant', 'Almond Croissant', 'Bakery', 190, 'Twice-baked with frangipane and toasted almonds.'),
  p('sourdough', 'Sourdough Loaf', 'Bakery', 320, 'Slow-fermented for 36 hours with a blistered crust.'),
  p('cinnamon-roll', 'Cinnamon Roll', 'Bakery', 180, 'Soft, spiced and finished with cream cheese glaze.'),
  p('tiramisu', 'Tiramisu', 'Desserts', 280, 'Espresso-soaked sponge layered with mascarpone cream.'),
  p('cheesecake', 'Basque Cheesecake', 'Desserts', 310, 'Burnt top, creamy centre, nothing else needed.'),
  p('tart', 'Dark Chocolate Tart', 'Desserts', 260, 'Crisp shell filled with 70% cocoa ganache and sea salt.'),
  p('affogato', 'Affogato', 'Desserts', 240, 'Vanilla gelato drowned in a fresh shot of espresso.'),
]
