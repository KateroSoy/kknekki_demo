import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ui/ProductCard';
import { mockProducts } from '../data/mock';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import React from 'react';

export function Wishlist() {
  const { wishlist } = useStore();
  
  const wishlistedProducts = mockProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 py-12 md:py-20 min-h-[60vh]">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-display tracking-tight mb-4">Wishlist</h1>
        <p className="text-text-secondary">Save your favorite Kknekki products here.</p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-border">
          <p className="text-text-secondary mb-8">Your wishlist is currently empty.</p>
          <Link to="/products">
            <Button variant="outline">Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
          {wishlistedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
