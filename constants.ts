
import { Product, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Munchies', 'Tech', 'Stationery', 'Hygiene'];

// Helper to generate IDs
let idCounter = 1;
const getId = () => (idCounter++).toString();

export const PRODUCTS: Product[] = [
  // --- MUNCHIES (30 Items) ---
  {
    id: getId(),
    name: 'Spicy Red Chips',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    description: 'Extra spicy, extra crunchy.',
    stock: 4
  },
  {
    id: getId(),
    name: 'Classic Salted Chips',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1640958905846-e92ea71bdfdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsdGVkJTIwY2xhc3NzaWMlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Essential',
    stock: 0
  },
  {
    id: getId(),
    name: 'Cream & Onion Chips',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stock: 24
  },
  {
    id: getId(),
    name: 'Cheese Balls Pouch',
    price: 30,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1673160177248-7172a3642a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNoZWVzZSUyMGJhbGxzJTIwcG91Y2h8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Nacho Crisps Cheese',
    price: 60,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    stock: 8
  },
  {
    id: getId(),
    name: 'Instant Noodles Masala',
    price: 25,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
    tag: 'Exam Fuel',
    stock: 50
  },
  {
    id: getId(),
    name: 'Cup Noodles Spicy',
    price: 65,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 12
  },
  {
    id: getId(),
    name: 'Chicken Cup Noodles',
    price: 70,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Dark Chocolate Bar',
    price: 100,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1646168932800-e48f378d37bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Exam Fuel',
    stock: 30
  },
  {
    id: getId(),
    name: 'Milk Chocolate Silk',
    price: 150,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Peanut Energy Bar',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Protein Bar Choco',
    price: 80,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    tag: 'New',
    stock: 15
  },
  {
    id: getId(),
    name: 'Volt Energy Drink',
    price: 110,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1754816073033-e75577901460?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbHQlMjBlbmVyZ3klMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Exam Fuel',
    stock: 6
  },
  {
    id: getId(),
    name: 'Cola Can 330ml',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    stock: 35
  },
  {
    id: getId(),
    name: 'Lemon Soda',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Mango Juice Box',
    price: 20,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1636196738725-02cbfce43a24?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stock: 45
  },
  {
    id: getId(),
    name: 'Iced Tea Lemon',
    price: 55,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Salted Peanuts',
    price: 20,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1664527307810-63c15cb57346?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsdGVkJTIwcGVhbnV0c3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'Roasted Almonds',
    price: 200,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1722686451471-a4d114dfcd66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9hc3RlZCUyMGFsbW9uZHN8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'Cashew Nuts',
    price: 250,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzZXclMjBudXRzfGVufDB8fDB8fHww',
    stock: 18
  },
  {
    id: getId(),
    name: 'Butter Cookies',
    price: 50,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Choco Chip Cookies',
    price: 60,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1651351978830-99b7125c3ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8fDA%3D',
    tag: 'Best Seller',
    stock: 5
  },
  {
    id: getId(),
    name: 'Digestive Biscuits',
    price: 45,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1699723521107-bb297f2642ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnZXN0aXZlJTIwYmlzY3VpdHN8ZW58MHx8MHx8fDA%3D',
    stock: 22
  },
  {
    id: getId(),
    name: 'Oreo Roll',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Butter Popcorn',
    price: 80,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1661655103032-0337e3fc63a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwcG9wY29ybnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Caramel Popcorn',
    price: 120,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=400',
    stock: 12
  },
  {
    id: getId(),
    name: 'Gummy Bears',
    price: 90,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Chewing Gum Mint',
    price: 10,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hld2lvbmclMjBndW0lMjBtaW50fGVufDB8fDB8fHww',
    stock: 100
  },
  {
    id: getId(),
    name: 'Mint Candy Roll',
    price: 20,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=400',
    stock: 60
  },
  {
    id: getId(),
    name: 'Cold Coffee Bottle',
    price: 65,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1556484687-306361646640?auto=format&fit=crop&q=80&w=400',
    tag: 'Exam Fuel',
    stock: 8
  },

  // --- TECH (30 Items) ---
  {
    id: getId(),
    name: 'Type-C Fast Cable',
    price: 299,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1762421814866-1cfb462a5932?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHlwZSUyMGMlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Essential',
    stock: 20
  },
  {
    id: getId(),
    name: 'Lightning iPhone Cable',
    price: 349,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1738520420654-87cd2ad005d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHRpbmclMjBpcGhvbmUlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Micro-USB Cable',
    price: 199,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm8lMjB1c2IlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 10
  },
  {
    id: getId(),
    name: '20W Adapter',
    price: 599,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1760706403194-ee213aa9b323?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MjBXJTIwYWRhcHRlcnxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Best Seller',
    stock: 8
  },
  {
    id: getId(),
    name: 'Wired Earphones',
    price: 399,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWQlMjBlYXJwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'TWS Basic Pods',
    price: 999,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 5
  },
  {
    id: getId(),
    name: 'Wireless Mouse',
    price: 699,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Best Seller',
    stock: 18
  },
  {
    id: getId(),
    name: 'Gaming Mouse',
    price: 1299,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
    stock: 7
  },
  {
    id: getId(),
    name: 'Mousepad Standard',
    price: 199,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1700451960095-c37c0b388624?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91c2VwYWR8ZW58MHx8MHx8fDA%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'XL Gaming Mat',
    price: 499,
    category: 'Tech',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDHiW8-_89KeNr3LpeFv5LNtYWAjs20CduPObOmALQzSlExoywWWyE3hElYOYkDeqqQAzELvuVSeIGyy9RzPlJbMCI4U-puUOkFV_Q2l2M0LEhPQsLl2WTkWY',
    stock: 10
  },
  {
    id: getId(),
    name: '32GB Pen Drive',
    price: 450,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1709660850064-0ec82e1a6b5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZHJpdmV8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: '64GB Pen Drive',
    price: 650,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1726837308560-cb371e1cbb16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZHJpdmV8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'Power Bank 10000mAh',
    price: 1499,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1594843665794-446ce915d840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww',
    tag: 'Essential',
    stock: 6
  },
  {
    id: getId(),
    name: 'USB-C Hub',
    price: 1299,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1616578273461-3a99ce422de6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwYyUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 5
  },
  {
    id: getId(),
    name: 'AA Batteries (4pk)',
    price: 120,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1704895336495-bdad8efe8d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWElMjBiYXR0ZXJpZXN8ZW58MHx8MHx8fDA%3D',
    stock: 30
  },
  {
    id: getId(),
    name: 'AAA Batteries (4pk)',
    price: 120,
    category: 'Tech',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1qCBab3xWKuXzplnTpTHH-dSoQCZQyFRF1RV4mSPrYZ5zgnBcrATQ5YX6e7soZWJJrJ7tMJbwYmmaQppJJM48SJjJ91LQBJwRSTyOOGQNvrDeBzHscvZVKQ',
    stock: 25
  },
  {
    id: getId(),
    name: 'Laptop Stand',
    price: 899,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D',
    stock: 8
  },
  {
    id: getId(),
    name: 'Phone Stand',
    price: 299,
    category: 'Tech',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0kCy8EJNj0L-DjVIGe-DklIL2lSAJ1V7PiDaeORCMF4R6iKtd_GM1T9goSKu4jzNwpdGgx238WtGi-XCHTlhLJpqhKvfe8d_N02VtKdHir9AvfaLqEm5wmYJSgG6wkjJ_9-NH0sTV-OfH&usqp=CAc',
    stock: 15
  },
  {
    id: getId(),
    name: 'Screen Cleaner Kit',
    price: 250,
    category: 'Tech',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSK5cSPVuFTqURTuR4Zhe18edBHVFpPBBZwrRY77l3yvmXqn7qjoN9H4adYQEnqOrXC-pp0MRtVjH-GZf5yf-OKVSNOkdMqcYs4i03uN25Z91h3Q7RV7TO7Omb_kqYK3bIUShko4lQvWrs&usqp=CAc',
    stock: 20
  },
  {
    id: getId(),
    name: 'Bluetooth Speaker',
    price: 1499,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 6
  },
  {
    id: getId(),
    name: 'AUX Cable 1.5m',
    price: 149,
    category: 'Tech',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBCBk2dOCKfTxhME0vAm7m1iTDr2EDah3rytpRenLKIsEutbgKGwCBnKxlHJn7MtfY6FiFyQJyjjuSP9TOf8eYFROHyzl_gWccu2qp5hauB13FHP4s3lfcCjMYN5eR31YcripXiw&usqp=CAc',
    stock: 12
  },
  {
    id: getId(),
    name: 'Ethernet Cable 5m',
    price: 399,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/610wYftcf5L.jpg',
    tag: 'Exam Fuel',
    stock: 10
  },
  {
    id: getId(),
    name: 'OTG Adapter C',
    price: 99,
    category: 'Tech',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRN2CYkUkUu0LwmUGxX6cW1QGp0Tb0688JELNhHD8ZF5mvDXMYeCAPIr-0D3_o2YB0-evRkqDKLY4265-4bT573AqjTLEG9sEsg2MBSmISDyh_aJykvJtsnvBAM9tD0mav8pQ9ispJ1FA&usqp=CAc',
    stock: 15
  },
  {
    id: getId(),
    name: 'Webcam Cover',
    price: 99,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/61UeSedtwEL.jpg',
    stock: 25
  },
  {
    id: getId(),
    name: 'Cable Organizers',
    price: 199,
    category: 'Tech',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtuFphv_bvsWYheaYB2jWVv80GSqwZDL1JBVn42LKzdOkwYOxJG7e454wF0GAtBGJOnU8aOcWKil3MFL59WfJ-Nyxl8QX0kx5L2rbV9A_EgUoPonelkbXWbBtopxrC&usqp=CAc',
    stock: 18
  },
  {
    id: getId(),
    name: 'Ring Light Mini',
    price: 499,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/51q8y-lRpbL.jpg',
    stock: 8
  },
  {
    id: getId(),
    name: 'Keyboard Protector',
    price: 249,
    category: 'Tech',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSF5FngO6Q9K-zDA7zakRTzS7Rn-7mJfLLksRwt97atZp63MrcpZGgkmo5fY1afRpw9xsdDe5-BVE1IOAqcXmsFdRLgo-PqAR56a1Wm6ZjS',
    stock: 12
  },
  {
    id: getId(),
    name: 'Phone Grip/Holder',
    price: 149,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/61HRvRAnyXL.jpg',
    stock: 30
  },
  {
    id: getId(),
    name: 'USB LED Light',
    price: 120,
    category: 'Tech',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9C9fuRzrkYx5qz9x4i0tD58hjMYhAjEXSJUXT_yet6SxyJVSMnho2c5eibhoX1U-ehH2NAkXCy9oC9z4pf0o3ML5rl4fkqRpCdj26zWlB0MqFFdGoiprong',
    tag: 'Exam Fuel',
    stock: 15
  },
  {
    id: getId(),
    name: 'HDMI Cable 2m',
    price: 350,
    category: 'Tech',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQf0id7ArjTgfsiPJfcOJAD1oTyfaomSE-ZMwc8Z2czphsFzaJKDIsSS2V3ws1gF1TaNLFGJPUSKPN6lh6wSh7oPjusJSMW6PN_kE4QljXUhdz69suM1qPpZA',
    stock: 10
  },

  // --- STATIONERY (30 Items) ---
  {
    id: getId(),
    name: 'Exam Prep Notebook',
    price: 120,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400',
    tag: 'Exam Fuel',
    stock: 50
  },
  {
    id: getId(),
    name: 'Spiral A4 Register',
    price: 150,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1531346878377-a51349593f45?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 60
  },
  {
    id: getId(),
    name: 'A5 Pocket Diary',
    price: 90,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Premium Gel Pens (3)',
    price: 150,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    stock: 35
  },
  {
    id: getId(),
    name: 'Ball Pens (Pack of 5)',
    price: 50,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1568205612837-0172ef5d94b5?auto=format&fit=crop&q=80&w=400',
    stock: 45
  },
  {
    id: getId(),
    name: 'Highlighters Neon (4)',
    price: 120,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1596206145325-10874e50882e?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Sticky Notes Yellow',
    price: 60,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 40
  },
  {
    id: getId(),
    name: 'Sticky Notes Neon',
    price: 70,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1531102927237-12347313a078?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Permanent Marker',
    price: 25,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1629947879555-46b5398d5c40?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Whiteboard Marker',
    price: 30,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1629947879555-46b5398d5c40?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Mechanical Pencil',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1598539969143-690226c63b2f?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Pencil Lead 0.7mm',
    price: 20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1598539969143-690226c63b2f?auto=format&fit=crop&q=80&w=400',
    stock: 50
  },
  {
    id: getId(),
    name: 'Premium Eraser',
    price: 15,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1517260739337-6799d2df9c99?auto=format&fit=crop&q=80&w=400',
    stock: 100
  },
  {
    id: getId(),
    name: 'Metal Ruler 30cm',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1605307555132-72c6913e9a58?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Geometry Box',
    price: 150,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1596489397685-64903328dc4e?auto=format&fit=crop&q=80&w=400',
    stock: 15
  },
  {
    id: getId(),
    name: 'Glue Stick 15g',
    price: 35,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1582289545464-9f2d1591f861?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Super Glue',
    price: 10,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1582289545464-9f2d1591f861?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Clear Tape',
    price: 20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1615562089405-c4193b22031c?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Mini Stapler',
    price: 60,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1626297375254-046647900b70?auto=format&fit=crop&q=80&w=400',
    stock: 15
  },
  {
    id: getId(),
    name: 'Stapler Pins Box',
    price: 15,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1626297375254-046647900b70?auto=format&fit=crop&q=80&w=400',
    stock: 50
  },
  {
    id: getId(),
    name: 'Paper Clips (Color)',
    price: 30,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075109594-e3c757c2a784?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Binder Clips Large',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075109594-e3c757c2a784?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'A4 Ruled Sheets',
    price: 80,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1596489397685-64903328dc4e?auto=format&fit=crop&q=80&w=400',
    stock: 100
  },
  {
    id: getId(),
    name: 'A4 Blank Sheets',
    price: 80,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1596489397685-64903328dc4e?auto=format&fit=crop&q=80&w=400',
    stock: 80
  },
  {
    id: getId(),
    name: 'Scissors',
    price: 60,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1593060630761-0d85949d0124?auto=format&fit=crop&q=80&w=400',
    stock: 15
  },
  {
    id: getId(),
    name: 'Correction Pen',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1517260739337-6799d2df9c99?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Plastic Folder A4',
    price: 20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=400',
    stock: 60
  },
  {
    id: getId(),
    name: 'Stick File',
    price: 15,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=400',
    stock: 60
  },
  {
    id: getId(),
    name: 'Calculator Basic',
    price: 350,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1594903803158-450917637841?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Sketch Pens Set',
    price: 80,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
    stock: 12
  },

  // --- HYGIENE (30 Items) ---
  {
    id: getId(),
    name: 'Hand Sanitizer',
    price: 85,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 40
  },
  {
    id: getId(),
    name: 'Shampoo 250ml',
    price: 240,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?q=80&w=957&auto=format&fit=crop',
    stock: 15
  },
  {
    id: getId(),
    name: 'Hand Wash Refill',
    price: 99,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    stock: 18
  },
  {
    id: getId(),
    name: 'Bath Soap Lemon',
    price: 40,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Face Wash Neem',
    price: 150,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1556228720-19875949e24e?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    stock: 20
  },
  {
    id: getId(),
    name: 'Toothbrush Soft',
    price: 30,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1559591937-e63c02604d05?auto=format&fit=crop&q=80&w=400',
    stock: 50
  },
  {
    id: getId(),
    name: 'Toothpaste Mint',
    price: 90,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1559591937-e63c02604d05?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Deodorant Men',
    price: 199,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1616110940733-d922a9042b5c?auto=format&fit=crop&q=80&w=400',
    stock: 12
  },
  {
    id: getId(),
    name: 'Deodorant Women',
    price: 199,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1616110940733-d922a9042b5c?auto=format&fit=crop&q=80&w=400',
    stock: 12
  },
  {
    id: getId(),
    name: 'Face Tissue Box',
    price: 80,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Wet Wipes Pack',
    price: 60,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Detergent 500g',
    price: 70,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400',
    stock: 18
  },
  {
    id: getId(),
    name: 'Fabric Softener',
    price: 220,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Dish Wash Bar',
    price: 20,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1585232561307-3f8d689626de?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Scrub Pad',
    price: 15,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1585232561307-3f8d689626de?auto=format&fit=crop&q=80&w=400',
    stock: 50
  },
  {
    id: getId(),
    name: 'Toilet Roll',
    price: 40,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611f?auto=format&fit=crop&q=80&w=400',
    stock: 60
  },
  {
    id: getId(),
    name: 'Shaving Foam',
    price: 150,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1626885376043-34e8574d6343?auto=format&fit=crop&q=80&w=400',
    stock: 15
  },
  {
    id: getId(),
    name: 'Razor Pack (3)',
    price: 90,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1626885376043-34e8574d6343?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Body Lotion',
    price: 250,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Sunscreen SPF50',
    price: 350,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1556228720-19875949e24e?auto=format&fit=crop&q=80&w=400',
    tag: 'Summer',
    stock: 8
  },
  {
    id: getId(),
    name: 'Hair Oil',
    price: 120,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=400',
    stock: 15
  },
  {
    id: getId(),
    name: 'Cotton Pads',
    price: 60,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Ear Buds',
    price: 30,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Nail Cutter',
    price: 40,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1596627008778-00c732cb4d3d?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Comb',
    price: 20,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1596627008778-00c732cb4d3d?auto=format&fit=crop&q=80&w=400',
    stock: 35
  },
  {
    id: getId(),
    name: 'Mirror Small',
    price: 80,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Room Freshener',
    price: 150,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 12
  },
  {
    id: getId(),
    name: 'Mosquito Repellent',
    price: 85,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400',
    stock: 18
  },
  {
    id: getId(),
    name: 'Band-Aids Box',
    price: 40,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Pain Relief Balm',
    price: 50,
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    stock: 15
  }
];
