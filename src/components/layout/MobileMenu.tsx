import { X, ChevronRight } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useStore();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const closeMenu = () => setMobileMenuOpen(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'All Products', to: '/products' },
    { label: 'Original Kknekki', to: '/collection/original' },
    { label: 'Slim Kknekki', to: '/collection/slim' },
    { label: 'Our Story', to: '/story' },
    { label: 'About Us', to: '/about' },
    { label: 'Store Locator', to: '/store-locator' },
  ];

  const utilities = [
    { label: 'Login / Register', to: '/account' },
    { label: 'Wishlist', to: '/wishlist' },
    { label: 'FAQ', to: '/faq' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-overlay backdrop-blur-sm"
        onClick={closeMenu}
      />
      
      {/* Drawer */}
      <div className="relative w-[90%] max-w-sm bg-background h-full flex flex-col shadow-2xl animate-in slide-in-from-left duration-300 ease-out">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-xl tracking-tight uppercase">Kknekki</span>
          <button onClick={closeMenu} className="p-2 -mr-2">
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="flex items-center justify-between px-6 py-4 text-xl font-display tracking-tight hover:bg-surface-soft border-b border-border/50"
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
              </Link>
            ))}
          </nav>
          
          <div className="px-6 py-8 flex flex-col gap-6">
            {utilities.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-border bg-surface-soft/50">
          <div className="flex justify-between items-center text-xs font-medium uppercase tracking-widest text-text-secondary">
            <span>Europe (EUR)</span>
            <a href="#" className="hover:text-text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
