
import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (isOpen) {
      setTimeLeft(120);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercentage = (timeLeft / 120) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#1A1A24] border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-scale-in overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-500/20 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <CheckCircle className="w-12 h-12 text-green-500" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Order Placed!</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Your order is placed and arriving in <span className="text-primary font-bold">2 mins</span>.
            </p>

            {/* Countdown Card */}
            <div className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left flex-1">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Estimated Arrival</p>
                        <p className="text-sm text-gray-300">Room Delivery</p>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white tabular-nums">
                        {minutes}:{seconds.toString().padStart(2, '0')}
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(168,129,255,0.5)]"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                    <span>Cooking</span>
                    <span>On the way</span>
                    <span>Arriving</span>
                </div>
            </div>

            <button 
                onClick={onClose}
                className="w-full py-4 rounded-xl bg-primary text-black font-bold text-lg hover:bg-white hover:scale-[1.02] transition-all shadow-neon"
            >
                Awesome, thanks!
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
