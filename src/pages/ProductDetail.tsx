import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mock';
import { useState } from 'react';
import React from 'react';
import { Button } from '../components/ui/Button';
import { formatPrice } from '../lib/utils';
import { useStore } from '../store/useStore';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

export function ProductDetail() {
  const { slug } = useParams();
  const product = mockProducts.find(p => p.slug === slug) || mockProducts[0]; // fallback for demo
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('detail');
  
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 py-8 md:py-16">
      
      {/* Breadcrumbs */}
      <div className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-text-secondary mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-text-primary">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-text-primary">Products</Link>
        <span>/</span>
        <span className="text-text-primary">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.images.map((img, i) => (
              <ImageWithSkeleton 
                key={i}
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                wrapperClassName={`aspect-[4/5] ${i === 0 ? 'md:col-span-2' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info (Sticky) */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-32 flex flex-col gap-8">
            
            {/* Title & Price */}
            <div>
              {product.isNew && <span className="text-[10px] font-medium uppercase tracking-widest bg-black text-white px-2 py-1 mb-4 inline-block">New</span>}
              <h1 className="text-3xl md:text-5xl font-display mb-2">{product.name}</h1>
              <p className="text-text-secondary text-sm md:text-base mb-6">{product.subtitle}</p>
              <div className="flex items-center gap-4">
                <span className="text-xl font-medium">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <span className="text-text-secondary line-through">{formatPrice(product.compareAtPrice)}</span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium uppercase tracking-widest">Color: <span className="text-text-secondary">{selectedColor.name}</span></span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.id}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor.id === color.id ? 'border-black p-0.5' : 'border-transparent hover:border-border'}`}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                  >
                    <div className="w-full h-full rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 pt-4 border-t border-border">
              <div className="flex gap-4">
                <div className="flex items-center border border-border h-14 w-32">
                  <button className="flex-1 h-full hover:bg-surface-soft flex items-center justify-center" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className="flex-1 text-center text-sm">{quantity}</span>
                  <button className="flex-1 h-full hover:bg-surface-soft flex items-center justify-center" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
              <p className="text-xs text-text-secondary text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4" /> Standard shipping 1-3 business days
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              <AccordionItem 
                title="Product Details" 
                isOpen={openAccordion === 'detail'} 
                onClick={() => toggleAccordion('detail')}
              >
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{product.description}</p>
                <ul className="list-disc pl-4 text-sm text-text-secondary space-y-2">
                  {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </AccordionItem>
              
              <AccordionItem 
                title="Material & Care" 
                isOpen={openAccordion === 'care'} 
                onClick={() => toggleAccordion('care')}
              >
                <h4 className="text-xs font-medium uppercase tracking-widest mb-2">Material</h4>
                <p className="text-sm text-text-secondary mb-4">{product.material.join(', ')}</p>
                <h4 className="text-xs font-medium uppercase tracking-widest mb-2">Care</h4>
                <ul className="list-disc pl-4 text-sm text-text-secondary space-y-1">
                  {product.careInstructions.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </AccordionItem>

              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => toggleAccordion('shipping')}
              >
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Free standard shipping on orders over 50 EUR. Returns accepted within 14 days of receiving your item. The item must be unused and in its original condition.
                </p>
              </AccordionItem>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, isOpen, onClick, children }: { title: string, isOpen: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <div className="border-b border-border">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-text-secondary transition-colors"
        onClick={onClick}
      >
        <span className="text-xs font-medium uppercase tracking-widest">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}
