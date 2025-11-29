
import React from 'react';
import { ShoppingBag, Menu, Zap, Search, User as UserIcon, LogOut, Package } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  user: User | null;
  onAuthClick: () => void;
  onLogout: () => void;
  onOrdersClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartClick, 
  searchQuery, 
  setSearchQuery,
  user,
  onAuthClick,
  onLogout,
  onOrdersClick
}) => {
  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-[#0D0D12]/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#0D0D12]/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
          <div className="p-2 bg-primary rounded-xl shadow-neon-sm group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white hidden sm:inline-block">
            Campus<span className="text-primary">Dash</span>
          </span>
          <span className="text-xl font-bold tracking-tight text-white sm:hidden">
            C<span className="text-primary">D</span>
          </span>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 max-w-md mx-6">
          <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
             </div>
             <input 
               type="text" 
               placeholder="Search munchies, tech..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="block w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-500"
             />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          
          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3 mr-2">
            {user ? (
              <div className="flex items-center gap-3 group relative">
                <div className="text-right hidden lg:block">
                  <p className="text-xs text-gray-400">Welcome,</p>
                  <p className="text-sm font-bold text-white max-w-[100px] truncate">{user.name}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 flex items-center justify-center text-white font-bold shadow-lg">
                  {user.name.charAt(0)}
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-12 w-48 bg-[#1A1A24] border border-white/10 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl z-50 flex flex-col transform origin-top-right">
                  <div className="px-4 py-2 border-b border-white/5 mb-1 lg:hidden">
                     <p className="text-xs text-gray-500">Signed in as</p>
                     <p className="text-sm font-bold text-white truncate">{user.name}</p>
                  </div>
                  <button 
                    onClick={onOrdersClick}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-colors"
                  >
                    <Package className="w-4 h-4" />
                    My Orders
                  </button>
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-red-400 hover:bg-white/5 flex items-center gap-2 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button 
                  onClick={onAuthClick}
                  className="text-sm font-bold text-white hover:text-primary transition-colors px-4 py-2"
                >
                  Log In
                </button>
                <button 
                  onClick={onAuthClick}
                  className="text-sm font-bold text-black bg-white hover:bg-primary transition-colors px-5 py-2.5 rounded-full shadow-lg hover:shadow-neon-sm"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="w-px h-6 bg-white/10 hidden md:block" />
          
          <button 
            onClick={onCartClick}
            className="relative p-3 hover:bg-white/10 rounded-full transition-all group hover:scale-105"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-black shadow-neon-sm border-2 border-[#0D0D12]">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={user ? undefined : onAuthClick} 
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors relative group"
          >
            {user ? (
               <div className="h-8 w-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-xs">
                 {user.name.charAt(0)}
               </div>
            ) : (
              <UserIcon className="w-6 h-6 text-gray-300" />
            )}
            
            {/* Mobile Dropdown for Logged In User */}
            {user && (
              <div className="absolute right-0 top-12 w-48 bg-[#1A1A24] border border-white/10 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl z-50 flex flex-col transform origin-top-right">
                  <div className="px-4 py-2 border-b border-white/5 mb-1">
                     <p className="text-xs text-gray-500">Signed in as</p>
                     <p className="text-sm font-bold text-white truncate">{user.name}</p>
                  </div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); onOrdersClick(); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Package className="w-4 h-4" />
                    My Orders
                  </div>
                  <div 
                    onClick={(e) => { e.stopPropagation(); onLogout(); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-red-400 hover:bg-white/5 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
          <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
             </div>
             <input 
               type="text" 
               placeholder="Search essentials..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="block w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-500"
             />
          </div>
      </div>
    </header>
  );
};

export default Header;
