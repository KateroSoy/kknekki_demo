import { useStore } from '../store/useStore';
import { formatPrice } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

export function Checkout() {
  const { cart } = useStore();
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const FREE_SHIPPING_THRESHOLD = 50;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-display mb-6">Cart is Empty</h1>
        <p className="text-text-secondary mb-8 max-w-md">Please add products to your cart before proceeding to checkout.</p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Left: Form */}
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-display mb-2">Checkout (Demo)</h1>
          <p className="text-sm text-text-secondary">This is a simulated checkout. No real payments are processed.</p>
        </div>

        <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); alert('Demo Order Created Successfully!'); }}>
          
          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <input type="email" placeholder="Email" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
              <input type="tel" placeholder="Phone Number" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
              <input type="text" placeholder="Last Name" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
              <input type="text" placeholder="Address" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black md:col-span-2" required />
              <input type="text" placeholder="City" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
              <input type="text" placeholder="State/Province" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
              <input type="text" placeholder="Zip/Postal Code" className="w-full border border-border bg-transparent p-4 text-sm outline-none focus:border-black" required />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest mb-6">Payment Method</h2>
            <div className="flex flex-col gap-3 border border-border p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="accent-black" />
                <span className="text-sm">Credit Card (Stripe Demo)</span>
              </label>
              <div className="border-t border-border my-2"></div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="accent-black" />
                <span className="text-sm">PayPal</span>
              </label>
            </div>
          </section>

          <Button type="submit" size="lg" className="w-full mt-4">
            Confirm Order
          </Button>
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className="bg-surface-soft p-6 md:p-10 h-fit sticky top-32">
        <h2 className="text-sm font-medium uppercase tracking-widest mb-8">Order Summary</h2>
        
        <div className="flex flex-col gap-6 mb-8 border-b border-border pb-8">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-20 h-24 bg-surface shrink-0 relative">
                <ImageWithSkeleton src={item.product.images[0].src} alt={item.product.name} className="w-full h-full object-cover" />
                <span className="absolute -top-2 -right-2 bg-text-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-medium uppercase tracking-wider">{item.product.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{item.color.name}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-8 border-b border-border pb-8 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Shipping</span>
            <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-lg md:text-xl font-medium">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
      
    </div>
  );
}
