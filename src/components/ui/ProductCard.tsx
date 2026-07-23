import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { formatPrice } from '../../lib/utils';
import { useStore } from '../../store/useStore';
import { Heart, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';
import React from 'react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const isWishlisted = wishlist.includes(product.id);
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const mainImage = product.images[0]?.src;
  const hoverImage = product.images[1]?.src || mainImage;
  const defaultColor = product.colors[0];

  return (
    <>
      <div className="group relative flex flex-col gap-3">
        <div 
          className="relative block aspect-[4/5] overflow-hidden bg-surface-soft cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to={`/products/${product.slug}`} className="absolute inset-0 z-0">
            <ImageWithSkeleton
              src={isHovered ? hoverImage : mainImage}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
            {product.isNew && (
              <span className="bg-surface text-text-primary text-[10px] uppercase px-2 py-1 tracking-wider">New</span>
            )}
            {product.isBestseller && (
              <span className="bg-surface text-text-primary text-[10px] uppercase px-2 py-1 tracking-wider">Bestseller</span>
            )}
          </div>

          {/* Quick View / Add overlay (Desktop) */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsQuickViewOpen(true);
              }}
              className="flex-1 bg-white text-text-primary h-10 text-[10px] font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors border border-transparent hover:border-black"
            >
              Quick View
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, defaultColor, 1);
              }}
              className="flex-1 bg-black text-white h-10 text-[10px] font-medium uppercase tracking-wider hover:bg-text-secondary transition-colors"
            >
              Quick Add
            </button>
          </div>
        </div>

        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-2 right-2 p-2 hover:scale-110 transition-transform z-10"
          aria-label="Toggle wishlist"
        >
          <Heart className={cn("w-5 h-5", isWishlisted ? "fill-text-primary text-text-primary" : "text-text-primary")} strokeWidth={1.5} />
        </button>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary truncate pr-4">
              <Link to={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <span className="text-sm text-text-primary">{formatPrice(product.price)}</span>
          </div>
          <p className="text-xs text-text-secondary">{product.colors.length} {product.colors.length === 1 ? 'Color' : 'Colors'}</p>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white w-full max-w-3xl flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-text-secondary hover:text-text-primary bg-white/80 rounded-full md:bg-transparent md:rounded-none"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px] bg-surface-soft">
              <ImageWithSkeleton src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
              <div className="mb-6 flex-1">
                <h3 className="text-2xl font-display uppercase tracking-wider mb-2">{product.name}</h3>
                <p className="text-lg mb-6">{formatPrice(product.price)}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {product.description || "The original Kknekki is recognized as one of the best hair ties in the world. The unique weaving technique makes them extremely gentle to any kind of hair and they won't fade, fray or slacken, even when worn in salt water."}
                </p>
                
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest font-medium mb-3 block">Available Colors</span>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map(color => (
                      <div 
                        key={color.id}
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    addToCart(product, defaultColor, 1);
                    setIsQuickViewOpen(false);
                  }}
                  className="w-full bg-black text-white h-12 text-xs font-medium uppercase tracking-wider hover:bg-text-secondary transition-colors"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/products/${product.slug}`}
                  className="w-full text-center bg-surface text-text-primary h-12 flex items-center justify-center text-xs font-medium uppercase tracking-wider hover:bg-surface-soft transition-colors border border-border"
                  onClick={() => setIsQuickViewOpen(false)}
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setIsQuickViewOpen(false)} />
        </div>
      )}
    </>
  );
}
