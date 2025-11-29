
import React from 'react';
import { Plus, AlertTriangle } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  cartQuantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd, cartQuantity }) => {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isMaxReached = cartQuantity >= product.stock;

  return (
    <div className={`group relative flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-neon-sm ${isOutOfStock ? 'opacity-80' : 'hover:scale-[1.02]'}`}>
      
      {/* Out of Stock Overlay */}
      {isOutOfStock && (
        <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
          <span className="px-4 py-1.5 bg-red-500/20 border border-red-500/50 text-red-200 text-xs font-bold rounded-full uppercase tracking-widest backdrop-blur-md shadow-lg transform rotate-[-10deg]">
            Sold Out
          </span>
        </div>
      )}

      {/* Tag */}
      {product.tag && !isOutOfStock && (
        <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-lg shadow-lg">
          <span className="text-[10px] font-bold text-black uppercase tracking-wider">
            {product.tag}
          </span>
        </div>
      )}

      {/* Image Area */}
      <div className="relative aspect-square overflow-hidden bg-white/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ease-out opacity-90 ${!isOutOfStock && 'group-hover:scale-110 group-hover:opacity-100'} ${isOutOfStock && 'grayscale'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs text-primary font-medium uppercase tracking-wide opacity-80">
            {product.category}
          </div>
          
          {/* Stock Indicator */}
          {!isOutOfStock && (
            <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
              isLowStock 
                ? 'text-orange-400 border-orange-400/30 bg-orange-400/10 animate-pulse' 
                : 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
            }`}>
              {isLowStock && <AlertTriangle className="w-3 h-3" />}
              {isLowStock ? `Only ${product.stock} left!` : `${product.stock} in stock`}
            </div>
          )}
        </div>

        <h3 className="text-sm font-bold text-white leading-tight mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className={`text-base font-bold ${isOutOfStock ? 'text-gray-500 line-through' : 'text-white'}`}>
            ₹{product.price}
          </span>
          
          <button 
            onClick={() => onAdd(product)}
            disabled={isOutOfStock || isMaxReached}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group/btn ${
              isOutOfStock || isMaxReached
                ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                : 'bg-white/10 hover:bg-primary hover:text-black hover:shadow-neon-sm active:scale-90'
            }`}
            aria-label={isOutOfStock ? "Out of stock" : isMaxReached ? "Max quantity reached" : "Add to cart"}
            title={isMaxReached ? "Max quantity reached" : undefined}
          >
            <Plus className={`w-4 h-4 transition-transform ${(!isOutOfStock && !isMaxReached) && 'group-hover/btn:rotate-90'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
