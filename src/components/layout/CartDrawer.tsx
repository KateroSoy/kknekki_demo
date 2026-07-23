import { X, Minus, Plus } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { formatPrice } from '../../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useEffect, useRef } from 'react';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

export function CartDrawer() {
  const { isCartOpen, setCartOpen, cart, updateQuantity, removeFromCart } = useStore();
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const FREE_SHIPPING_THRESHOLD = 50;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-overlay backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-md bg-background h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 ease-out"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-sm font-medium uppercase tracking-widest">Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 -mr-2 hover:opacity-70">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          {/* Shipping Progress */}
          {cart.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-text-secondary text-center">
                {isFreeShipping 
                  ? 'Congratulations! You get free shipping.' 
                  : `Add ${formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping.`}
              </p>
              <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-text-primary h-full transition-all duration-500 ease-out"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center">
              <p className="text-text-secondary text-sm">Your shopping bag is empty.</p>
              <Button onClick={() => { setCartOpen(false); navigate('/products'); }}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Link 
                    to={`/products/${item.product.slug}`} 
                    className="w-24 h-32 shrink-0"
                    onClick={() => setCartOpen(false)}
                  >
                    <ImageWithSkeleton 
                      src={item.product.images[0].src} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-col flex-1 py-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="text-sm font-medium uppercase tracking-wider leading-tight">
                          <Link to={`/products/${item.product.slug}`} onClick={() => setCartOpen(false)}>
                            {item.product.name}
                          </Link>
                        </h3>
                        <span className="text-sm shrink-0">{formatPrice(item.product.price)}</span>
                      </div>
                      <p className="text-xs text-text-secondary">{item.color.name}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          className="w-8 h-8 flex items-center justify-center hover:bg-surface-soft"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-xs text-center">{item.quantity}</span>
                        <button 
                          className="w-8 h-8 flex items-center justify-center hover:bg-surface-soft"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] uppercase tracking-widest text-text-secondary hover:text-text-primary underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium uppercase tracking-widest">Subtotal</span>
              <span className="text-lg">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-text-secondary mb-6 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <Button 
              className="w-full" 
              onClick={() => {
                setCartOpen(false);
                navigate('/checkout');
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
