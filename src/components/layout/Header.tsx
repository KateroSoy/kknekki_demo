import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export function Header() {
  const { cart, setCartOpen, setMobileMenuOpen, setSearchOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-text-primary text-white text-[11px] font-medium tracking-widest uppercase text-center py-2 px-4 flex items-center justify-center h-8">
        Free shipping on all orders over €50
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-border py-4" : "bg-white py-5 border-b border-transparent"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Left Navigation (Desktop) & Mobile Menu Button */}
          <div className="flex-1 flex items-center gap-6">
            <button 
              className="md:hidden -ml-2 p-2 text-text-primary" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <nav className="hidden md:flex items-center gap-6 text-[12px] font-medium uppercase tracking-widest text-text-primary">
              <Link to="/products" className="hover:text-text-secondary transition-colors">Shop</Link>
              <Link to="/story" className="hover:text-text-secondary transition-colors">Story</Link>
              <Link to="/about" className="hover:text-text-secondary transition-colors">About</Link>
            </nav>
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-3xl md:text-4xl font-display font-black tracking-tighter lowercase">
              kknekki
            </Link>
          </div>

          {/* Right Utilities */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            <div className="hidden md:block text-[11px] font-medium tracking-widest uppercase text-text-secondary cursor-pointer">
              EUR
            </div>
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="hover:text-text-secondary transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="hidden md:block hover:text-text-secondary transition-colors">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <button 
              className="relative hover:text-text-secondary transition-colors" 
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-text-primary text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
