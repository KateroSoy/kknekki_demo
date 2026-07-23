import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'p-1',
    slug: 'kknekki-original-black',
    name: 'Kknekki Original Black',
    subtitle: 'The everyday essential',
    description: 'Recognized as one of the best hair ties in the world. The unique weaving technique makes them extremely gentle on any kind of hair and they won\'t fade, fray or slacken, even when worn in salt water.',
    price: 5.50,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Original Kknekki', 'Classic'],
    tags: ['black', 'original', 'everyday'],
    colors: [
      { id: 'c-1', name: 'Black', hex: '#000000', stock: 500 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop&hue=-90&sat=-100', alt: 'Kknekki Original Black', type: 'product' },
      { src: 'https://images.unsplash.com/photo-1615397323246-8802dce82046?q=80&w=800&auto=format&fit=crop&hue=-90&sat=-100', alt: 'Kknekki Original Black Detail', type: 'detail' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water', 'Dry flat'],
    benefits: ['Snag-free removal', 'Maintains elasticity', 'Waterproof'],
    stock: 500,
    isNew: false,
    isBestseller: true,
    rating: 5.0,
    reviewCount: 1240
  },
  {
    id: 'p-2',
    slug: 'kknekki-original-dusty-pink',
    name: 'Kknekki Original Dusty Pink',
    subtitle: 'Soft pastel favorite',
    description: 'A beautiful soft pink shade that adds a subtle pop of color. Crafted from more than 60 threads, this hair tie is highly durable and won\'t break your hair.',
    price: 5.50,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Original Kknekki', 'Pastels'],
    tags: ['pink', 'pastel', 'original'],
    colors: [
      { id: 'c-2', name: 'Dusty Pink', hex: '#D7A1A7', stock: 150 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1598539958742-b9247eb9f6bc?q=80&w=800&auto=format&fit=crop&hue=300&sat=40', alt: 'Kknekki Dusty Pink', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water'],
    benefits: ['Gentle on hair', 'Durable weave', 'Doubles as a bracelet'],
    stock: 150,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 356
  },
  {
    id: 'p-3',
    slug: 'kknekki-bundle-earth',
    name: 'Kknekki 4-Pack Earth',
    subtitle: 'Curated neutral set',
    description: 'A grounded palette of four beautiful Kknekki hair ties. Includes Olive, Sand, Brown, and Caramel. Perfect for everyday styling.',
    price: 19.50,
    compareAtPrice: 22.00,
    currency: 'EUR',
    category: 'Bundles',
    collection: ['Neutral', 'Bundles'],
    tags: ['brown', 'green', 'neutral', 'bundle'],
    colors: [
      { id: 'c-3', name: 'Mixed Earth', hex: '#8B7355', stock: 20 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1588602061280-5a3dcb1ce3c3?q=80&w=800&auto=format&fit=crop', alt: 'Earth Bundle', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water'],
    benefits: ['Value pack', 'Versatile colors', 'All-day comfort'],
    stock: 80,
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 'p-4',
    slug: 'kknekki-slim-tangerine',
    name: 'Kknekki Slim Tangerine',
    subtitle: 'Vibrant and delicate',
    description: 'The slim version of our classic Kknekki. Perfect for thinner hair or when you want a more subtle look. Still woven with the same durable technique.',
    price: 4.50,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Slim Kknekki'],
    tags: ['orange', 'vibrant', 'slim'],
    colors: [
      { id: 'c-4', name: 'Tangerine', hex: '#F48C42', stock: 60 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1585834850756-3bcf07166ea3?q=80&w=800&auto=format&fit=crop', alt: 'Tangerine Slim', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water'],
    benefits: ['Thinner profile', 'Strong hold', 'Fade resistant'],
    stock: 60,
    isNew: true,
    isBestseller: false,
    rating: 4.5,
    reviewCount: 42
  },
  {
    id: 'p-5',
    slug: 'kknekki-velvet-navy',
    name: 'Kknekki Velvet Navy',
    subtitle: 'Luxurious finish',
    description: 'A special edition Kknekki with a soft velvet finish. Adds a touch of luxury to your ponytail or wrist.',
    price: 7.00,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Velvet'],
    tags: ['blue', 'velvet', 'luxury'],
    colors: [
      { id: 'c-5', name: 'Navy', hex: '#1D2A44', stock: 100 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1620023476686-e7d6ab6222b6?q=80&w=800&auto=format&fit=crop', alt: 'Velvet Navy', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin', 'Velvet'],
    careInstructions: ['Hand wash gently in cold water'],
    benefits: ['Soft touch', 'Elegant look', 'No metal parts'],
    stock: 100,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 340
  },
  {
    id: 'p-6',
    slug: 'kknekki-original-lilac',
    name: 'Kknekki Original Lilac',
    subtitle: 'Soft pastel woven band',
    description: 'A delicate pastel purple that adds a soft touch to any outfit. The world\'s best hair tie, gentle and beautiful.',
    price: 5.50,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Original Kknekki', 'Pastels'],
    tags: ['purple', 'pastel', 'soft'],
    colors: [
      { id: 'c-6', name: 'Lilac', hex: '#C8B4E2', stock: 45 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop&hue=280&sat=40', alt: 'Lilac Mist', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water', 'Dry flat'],
    benefits: ['Gentle hold', 'Beautiful texture', 'Everyday wear'],
    stock: 45,
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 28
  },
  {
    id: 'p-7',
    slug: 'kknekki-original-sand',
    name: 'Kknekki Original Sand',
    subtitle: 'The everyday neutral',
    description: 'A warm, soft beige band that blends seamlessly into lighter hair or stands out as a crisp contrast.',
    price: 5.50,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Original Kknekki', 'Neutral'],
    tags: ['beige', 'sand', 'neutral'],
    colors: [
      { id: 'c-7', name: 'Sand', hex: '#DBCBA6', stock: 80 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1605335515783-6628b0561bf7?q=80&w=800&auto=format&fit=crop', alt: 'Soft Sand', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water'],
    benefits: ['Classic look', 'Strong grip', 'No creasing'],
    stock: 80,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 215
  },
  {
    id: 'p-8',
    slug: 'kknekki-multi-coastal',
    name: 'Kknekki Multi Coastal',
    subtitle: 'Woven beach hues',
    description: 'A blend of sand, sea, and sky. The Coastal Multi brings the beach to your everyday wardrobe with our signature multi-thread weave.',
    price: 6.00,
    currency: 'EUR',
    category: 'Hair Accessories',
    collection: ['Original Kknekki', 'Multi'],
    tags: ['blue', 'sand', 'multi', 'summer'],
    colors: [
      { id: 'c-8', name: 'Coastal Mix', hex: '#4A6D7C', stock: 30 }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop&hue=20&sat=30', alt: 'Coastal Multi Product', type: 'product' }
    ],
    material: ['Polyester', 'Elastane', 'Resin'],
    careInstructions: ['Hand wash in cold water', 'Dry flat'],
    benefits: ['Unique multi-color weave', 'Snag-free', 'Highly durable'],
    stock: 30,
    isNew: true,
    isBestseller: false,
    rating: 5.0,
    reviewCount: 44
  }
];
