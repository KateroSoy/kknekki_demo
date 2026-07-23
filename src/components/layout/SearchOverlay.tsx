import { X, Search } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { mockProducts } from '../../data/mock';
import { formatPrice } from '../../lib/utils';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

export function SearchOverlay() {
  const { isSearchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query 
    ? mockProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchOpen(false);
      navigate(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 md:pt-16">
        <div className="flex justify-end mb-8">
          <button onClick={() => setSearchOpen(false)} className="hover:opacity-70 flex items-center gap-2 text-xs uppercase tracking-widest font-medium">
            Close <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <form onSubmit={handleSearch} className="relative max-w-4xl mx-auto mb-16">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, colors, or categories..."
            className="w-full bg-transparent border-b-2 border-text-primary pb-4 text-2xl md:text-5xl font-display placeholder:text-text-secondary outline-none focus:border-black transition-colors"
          />
          <button type="submit" className="absolute right-0 bottom-4 md:bottom-6 text-text-primary hover:opacity-70">
            <Search className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </form>

        <div className="max-w-4xl mx-auto">
          {!query && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-text-secondary mb-4">Popular Searches</h3>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/products" onClick={() => setSearchOpen(false)} className="text-xl font-display hover:text-text-secondary">New Arrivals</Link></li>
                  <li><Link to="/products" onClick={() => setSearchOpen(false)} className="text-xl font-display hover:text-text-secondary">Bestsellers</Link></li>
                  <li><Link to="/products" onClick={() => setSearchOpen(false)} className="text-xl font-display hover:text-text-secondary">Bundles</Link></li>
                </ul>
              </div>
            </div>
          )}

          {query && results.length > 0 && (
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-text-secondary mb-6">Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {results.map(product => (
                  <Link key={product.id} to={`/products/${product.slug}`} onClick={() => setSearchOpen(false)} className="group flex flex-col gap-3">
                    <div className="aspect-square bg-surface-soft overflow-hidden">
                      <ImageWithSkeleton src={product.images[0].src} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider">{product.name}</h4>
                      <p className="text-xs text-text-secondary mt-1">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-text-secondary">No results found for "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
