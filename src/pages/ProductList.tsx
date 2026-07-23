import { useState } from 'react';
import { ProductCard } from '../components/ui/ProductCard';
import { mockProducts } from '../data/mock';
import { SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

export function ProductList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const products = mockProducts;

  return (
    <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 py-12 flex flex-col min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display mb-4 tracking-tight uppercase">Shop All</h1>
        <p className="text-text-secondary max-w-xl">
          Explore the full range of Kknekki hair ties. Find the perfect colors for your everyday style.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-border mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:text-text-secondary transition-colors"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <span className="text-xs text-text-secondary uppercase tracking-widest">{products.length} Products</span>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-medium uppercase tracking-widest text-text-secondary hidden md:block">Sort by:</span>
          <select className="bg-transparent text-xs font-medium uppercase tracking-widest outline-none cursor-pointer p-2 w-full md:w-auto border md:border-none border-border">
            <option>Most Relevant</option>
            <option>New Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8 relative">
        {/* Desktop Sidebar Filter (Simple Version) */}
        {isFilterOpen && (
          <aside className="hidden md:block w-64 shrink-0 pr-8 animate-in slide-in-from-left-4 duration-300">
            <div className="sticky top-24 flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest mb-4 border-b border-border pb-2">Category</h3>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                  <li><button className="hover:text-text-primary text-left">All Products</button></li>
                  <li><button className="hover:text-text-primary text-left">Original Kknekki</button></li>
                  <li><button className="hover:text-text-primary text-left">Slim Kknekki</button></li>
                  <li><button className="hover:text-text-primary text-left">Bundles</button></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest mb-4 border-b border-border pb-2">Collection</h3>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                  <li><button className="hover:text-text-primary text-left">Classic</button></li>
                  <li><button className="hover:text-text-primary text-left">Pastels</button></li>
                  <li><button className="hover:text-text-primary text-left">Neutral</button></li>
                  <li><button className="hover:text-text-primary text-left">Multi</button></li>
                </ul>
              </div>
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <div className={`flex-1 grid grid-cols-2 ${isFilterOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-x-4 gap-y-12 md:gap-x-8 transition-all duration-300`}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}
