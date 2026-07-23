import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border mt-auto">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-display mb-4">Join the community</h2>
            <p className="text-text-secondary text-sm md:text-base max-w-md">
              Be the first to know about new collections, creative stories, and special offers.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <form className="flex border-b border-text-primary pb-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent flex-1 text-sm outline-none placeholder:text-text-secondary uppercase tracking-widest font-medium"
              />
              <button type="submit" className="text-xs font-medium uppercase tracking-widest hover:text-text-secondary transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-sm">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest mb-2">Explore</h3>
            <Link to="/products" className="text-text-secondary hover:text-text-primary">All Products</Link>
            <Link to="/story" className="text-text-secondary hover:text-text-primary">Our Story</Link>
            <Link to="/about" className="text-text-secondary hover:text-text-primary">About</Link>
            <Link to="/store-locator" className="text-text-secondary hover:text-text-primary">Store Locator</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest mb-2">Help</h3>
            <Link to="/faq" className="text-text-secondary hover:text-text-primary">FAQ</Link>
            <Link to="/shipping" className="text-text-secondary hover:text-text-primary">Shipping</Link>
            <Link to="/returns" className="text-text-secondary hover:text-text-primary">Returns</Link>
            <Link to="/contact" className="text-text-secondary hover:text-text-primary">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest mb-2">Legal</h3>
            <Link to="/privacy" className="text-text-secondary hover:text-text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-text-secondary hover:text-text-primary">Terms of Service</Link>
            <Link to="/wholesale" className="text-text-secondary hover:text-text-primary">Wholesale</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest mb-2">Social</h3>
            <a href="#" className="text-text-secondary hover:text-text-primary">Instagram</a>
            <a href="#" className="text-text-secondary hover:text-text-primary">TikTok</a>
            <a href="#" className="text-text-secondary hover:text-text-primary">Pinterest</a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border gap-4 text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Kknekki. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Europe (EUR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
