
import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ArrowRight, Trash2, MapPin, ChevronLeft, Loader2, AlertCircle } from 'lucide-react';
import { CartItem, User } from '../types';
import { mockBackend } from '../services/mockBackend';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
  user: User | null;
  onOrderComplete: () => void;
}

const DELIVERY_FEE = 30;

// Removed 'success' step as it's now handled by a separate modal
type CheckoutStep = 'cart' | 'address';

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onClearCart,
  user,
  onOrderComplete
}) => {
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [hostel, setHostel] = useState(user?.hostel || '');
  const [room, setRoom] = useState(user?.room || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Reset step when cart opens/closes
  useEffect(() => {
    if (isOpen) {
      if (cartItems.length === 0) setStep('cart');
      document.body.style.overflow = 'hidden';
      // Pre-fill user data if available
      if (user) {
        if (user.hostel) setHostel(user.hostel);
        if (user.room) setRoom(user.room);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, cartItems.length, user]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setStep('address');
      setError(null);
    }
  };

  const handlePlaceOrder = async () => {
    if (!hostel || !room) return;
    if (!user) {
      setError("Please log in to place an order");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      await mockBackend.placeOrder(
        user.id,
        cartItems,
        { hostel, room },
        total + DELIVERY_FEE
      );
      
      // Successfully placed order
      onOrderComplete(); // This triggers the App to show success modal and clear cart
      onClose();         // Close the sidebar immediately
      setStep('cart');   // Reset for next time
      setHostel('');
      setRoom('');
      
    } catch (err: any) {
      setError(err.message || "Failed to place order");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative w-full md:w-[480px] bg-[#121218] h-full shadow-2xl flex flex-col border-l border-white/10 transform transition-transform duration-300 ease-out animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#121218]/80 backdrop-blur-xl z-10">
          <div className="flex items-center gap-3">
            {step === 'address' && (
              <button 
                onClick={() => setStep('cart')}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white mr-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            <h2 className="text-xl font-bold text-white">
              {step === 'cart' ? 'Your Cart' : 'Delivery Details'}
            </h2>
            {step === 'cart' && (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-white">
                {cartItems.length}
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 relative">
          
          {/* STEP 1: CART ITEMS */}
          {step === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-2 animate-pulse">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Your cart is empty</h3>
                    <p className="text-base text-gray-400 max-w-[240px] mx-auto">
                      Stock up on essentials before the batch closes.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="mt-6 px-8 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all text-sm font-bold border border-primary/20 hover:border-primary"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pb-24">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/40 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-bold text-base text-white line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{item.category}</p>
                          {/* Low stock warning in cart */}
                          {item.stock <= 5 && (
                            <p className="text-xs text-orange-400 mt-1">Only {item.stock} left!</p>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-base font-bold text-primary">₹{(item.price * item.quantity)}</span>
                          <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/5">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                              {item.quantity === 1 ? <Trash2 className="w-4 h-4 text-red-400" /> : '-'}
                            </button>
                            <span className="text-sm font-bold w-6 text-center text-white">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              disabled={item.quantity >= item.stock}
                              className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
                                item.quantity >= item.stock 
                                  ? 'text-gray-600 cursor-not-allowed' 
                                  : 'hover:bg-white/10 text-gray-400 hover:text-white'
                              }`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* STEP 2: ADDRESS FORM */}
          {step === 'address' && (
            <div className="space-y-6 animate-fade-in-up">
              {!user && (
                 <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm flex items-center gap-2">
                   <AlertCircle className="w-4 h-4" />
                   You need to log in to complete your order.
                 </div>
              )}

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm flex items-center gap-2 animate-shake">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">We deliver directly to your door.</p>
                  <p className="text-xs text-gray-500 mt-1">Please ensure your room details are correct.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Hostel Block</label>
                  <select 
                    value={hostel}
                    onChange={(e) => setHostel(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  >
                    <option value="" disabled>Select your hostel</option>
                    <option value="Boys Hostel A">Boys Hostel A</option>
                    <option value="Boys Hostel B">Boys Hostel B</option>
                    <option value="Girls Hostel A">Girls Hostel A</option>
                    <option value="Girls Hostel B">Girls Hostel B</option>
                    <option value="PG Block">PG Block</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Room Number</label>
                  <input 
                    type="text" 
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="e.g. 304"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-white font-bold mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Items ({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{DELIVERY_FEE}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/5 mt-2">
                    <span>Total to Pay</span>
                    <span>₹{total + DELIVERY_FEE}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#121218]/90 backdrop-blur-xl border-t border-white/10 space-y-4 shadow-[0_-20px_40px_rgba(0,0,0,0.4)]">
            {step === 'cart' ? (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Delivery Fee</span>
                    <span>₹{DELIVERY_FEE}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span>₹{(total + DELIVERY_FEE)}</span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-xl bg-primary text-black font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-neon hover:shadow-lg active:scale-[0.98]"
                >
                  Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              // Address Step Footer
              <button 
                onClick={handlePlaceOrder}
                disabled={!hostel || !room || isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-neon hover:shadow-lg active:scale-[0.98] ${
                  (!hostel || !room || isSubmitting) 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed shadow-none' 
                    : 'bg-primary text-black hover:bg-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay ₹${total + DELIVERY_FEE} & Order`
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
