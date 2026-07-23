import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { mockProducts } from '../data/mock';
import React from 'react';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

export function Home() {
  const bestsellers = mockProducts.filter(p => p.isBestseller).slice(0, 4);
  const newArrivals = mockProducts.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-soft">
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2000&auto=format&fit=crop" 
            alt="The Summer Color Edit" 
            className="w-full h-full object-cover animate-in zoom-in-105 duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-display font-medium max-w-4xl text-balance mb-6 leading-tight uppercase tracking-widest">
            New Arrivals
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="bg-white text-black hover:bg-white/90 px-12 py-4" onClick={() => window.location.href = '/products'}>
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Categories / Explore */}
      <section className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/collection/original" className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-surface-soft block">
            <ImageWithSkeleton 
              src="https://images.unsplash.com/photo-1615397323246-8802dce82046?q=80&w=1200&auto=format&fit=crop" 
              alt="Original Kknekki" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20 pointer-events-none" />
            <div className="absolute bottom-8 left-8 pointer-events-none">
              <h2 className="text-3xl font-display text-white uppercase tracking-wider mb-2">Original</h2>
              <span className="text-xs font-medium uppercase tracking-widest text-white border-b border-white pb-1">Shop Now</span>
            </div>
          </Link>
          <Link to="/collection/slim" className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-surface-soft block">
            <ImageWithSkeleton 
              src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1200&auto=format&fit=crop" 
              alt="Slim Kknekki" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20 pointer-events-none" />
            <div className="absolute bottom-8 left-8 pointer-events-none">
              <h2 className="text-3xl font-display text-white uppercase tracking-wider mb-2">Slim</h2>
              <span className="text-xs font-medium uppercase tracking-widest text-white border-b border-white pb-1">Shop Now</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase">Bestsellers</h2>
          </div>
          <Link to="/products" className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary border-b border-border pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 mt-12 border-t border-border">
        <div className="flex flex-col justify-center px-8 py-24 md:px-24 md:py-32 bg-white">
          <h2 className="text-4xl md:text-6xl font-display mb-8 text-balance uppercase tracking-tight">The world's best hair tie</h2>
          <p className="text-text-secondary mb-12 max-w-md leading-relaxed">
            Recognized as one of the best hair ties in the world. The unique weaving technique makes them extremely gentle on any kind of hair and they won't fade, fray or slacken, even when worn in salt water.
          </p>
          <div>
            <Button variant="outline" className="border-black px-12" onClick={() => window.location.href = '/story'}>Read our story</Button>
          </div>
        </div>
        <div className="aspect-square lg:aspect-auto lg:h-[800px]">
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1605335515783-6628b0561bf7?q=80&w=1200&auto=format&fit=crop" 
            alt="Kknekki details" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black text-white py-6 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8 text-2xl md:text-3xl font-display uppercase tracking-widest">
          <span>kknekki</span>
          <span className="text-white/50">•</span>
          <span>the original</span>
          <span className="text-white/50">•</span>
          <span>kknekki</span>
          <span className="text-white/50">•</span>
          <span>the original</span>
          <span className="text-white/50">•</span>
          <span>kknekki</span>
          <span className="text-white/50">•</span>
          <span>the original</span>
          <span className="text-white/50">•</span>
          <span>kknekki</span>
          <span className="text-white/50">•</span>
          <span>the original</span>
          <span className="text-white/50">•</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
