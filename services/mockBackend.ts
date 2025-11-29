import { User, Product, CartItem, Order } from '../types';
import { PRODUCTS } from '../constants';

// Keys for localStorage (Simulating Database Tables)
const USERS_KEY = 'campus_dash_users';
const SESSION_KEY = 'campus_dash_session';
const PRODUCTS_KEY = 'campus_dash_products';
const ORDERS_KEY = 'campus_dash_orders';

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockBackend = {
  // --- DATABASE INITIALIZATION ---
  initializeDatabase() {
    // Seed products if they don't exist
    if (!localStorage.getItem(PRODUCTS_KEY)) {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(PRODUCTS));
    }
    // Initialize orders table if empty
    if (!localStorage.getItem(ORDERS_KEY)) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify([]));
    }
  },

  // --- AUTHENTICATION ---

  async login(email: string, password: string): Promise<User> {
    await delay(800); // Simulate API latency

    const usersStr = localStorage.getItem(USERS_KEY);
    const users = usersStr ? JSON.parse(usersStr) : [];

    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...safeUser } = user; // Exclude password from session
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
    return safeUser;
  },

  async signup(name: string, email: string, password: string): Promise<User> {
    await delay(1000);

    const usersStr = localStorage.getItem(USERS_KEY);
    const users = usersStr ? JSON.parse(usersStr) : [];

    if (users.find((u: any) => u.email === email)) {
      throw new Error('User already exists with this email');
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password, // In a real app, this would be hashed
      joinedAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
    return safeUser;
  },

  async logout(): Promise<void> {
    await delay(200);
    localStorage.removeItem(SESSION_KEY);
  },

  getCurrentUser(): User | null {
    const sessionStr = localStorage.getItem(SESSION_KEY);
    return sessionStr ? JSON.parse(sessionStr) : null;
  },

  // --- PRODUCT & INVENTORY MANAGEMENT ---

  async getProducts(): Promise<Product[]> {
    this.initializeDatabase();
    await delay(300); // Simulate network fetch
    const products = localStorage.getItem(PRODUCTS_KEY);
    return products ? JSON.parse(products) : [];
  },

  // --- ORDER PROCESSING & PAYMENT ---

  async placeOrder(
    userId: string, 
    items: CartItem[], 
    deliveryDetails: { hostel: string; room: string },
    totalAmount: number
  ): Promise<Order> {
    await delay(1500); // Simulate payment gateway processing

    const products: Product[] = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || '[]');
    const orders: Order[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');

    // 1. Transaction Start: Validate Stock
    for (const item of items) {
      const productIndex = products.findIndex(p => p.id === item.id);
      if (productIndex === -1) throw new Error(`Product ${item.name} no longer available`);
      
      if (products[productIndex].stock < item.quantity) {
        throw new Error(`Insufficient stock for ${item.name}. Only ${products[productIndex].stock} left.`);
      }
    }

    // 2. Deduct Stock (Update Database)
    items.forEach(item => {
      const productIndex = products.findIndex(p => p.id === item.id);
      products[productIndex].stock -= item.quantity;
    });
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));

    // 3. Create Order Record
    const newOrder: Order = {
      id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      userId,
      items,
      totalAmount,
      status: 'confirmed', // Payment successful
      createdAt: new Date().toISOString(),
      deliveryDetails
    };

    // 4. Save Order
    orders.push(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

    return newOrder;
  },

  async getUserOrders(userId: string): Promise<Order[]> {
    await delay(500);
    const orders: Order[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    return orders.filter(o => o.userId === userId).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // --- ANALYTICS (For Admin) ---
  async getOrderStats() {
    const orders: Order[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    return {
      totalOrders: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + order.totalAmount, 0),
      activeUsers: new Set(orders.map(o => o.userId)).size
    };
  }
};