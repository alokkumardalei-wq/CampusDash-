
import React, { useEffect, useState } from 'react';
import { X, Package, Clock, CheckCircle, XCircle, MapPin, Calendar, ShoppingBag } from 'lucide-react';
import { Order, User } from '../types';
import { mockBackend } from '../services/mockBackend';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const OrdersModal: React.FC<OrdersModalProps> = ({ isOpen, onClose, user }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && user) {
      setLoading(true);
      mockBackend.getUserOrders(user.id)
        .then(data => {
          setOrders(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen, user]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#1A1A24] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[85vh] animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#1A1A24] rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-xl">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Order History</h2>
              <p className="text-xs text-gray-400">Past purchases and status</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-gray-500">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center opacity-60">
              <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
              <h3 className="text-lg font-bold text-white">No orders yet</h3>
              <p className="text-sm text-gray-400 max-w-xs mx-auto mt-1">
                Looks like you haven't ordered anything yet. Time to stock up!
              </p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                
                {/* Order Header */}
                <div className="p-4 bg-black/20 flex flex-wrap gap-4 justify-between items-center border-b border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{order.id}</span>
                      <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full border ${
                        order.status === 'confirmed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                        order.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                        'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-0.5">Total Amount</p>
                    <p className="text-lg font-bold text-primary">₹{order.totalAmount}</p>
                  </div>
                </div>

                {/* Items */}
                <div className="p-4 space-y-3">
                  {order.items.map((item, idx) => (
                    <div key={`${order.id}-item-${idx}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-200 truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-bold text-gray-300">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer / Delivery Info */}
                <div className="p-3 bg-white/5 flex items-center gap-2 text-xs text-gray-400 px-4">
                   <MapPin className="w-3.5 h-3.5" />
                   <span>Delivered to: <span className="text-gray-300 font-medium">{order.deliveryDetails.room}, {order.deliveryDetails.hostel}</span></span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersModal;
