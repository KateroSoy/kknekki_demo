export type ProductColor = {
  id: string;
  name: string;
  hex: string;
  image?: string;
  stock: number;
};

export type ProductImage = {
  src: string;
  alt: string;
  type: 'product' | 'detail' | 'lifestyle';
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: 'EUR';
  category: string;
  collection: string[];
  tags: string[];
  colors: ProductColor[];
  images: ProductImage[];
  material: string[];
  careInstructions: string[];
  benefits: string[];
  stock: number;
  isNew: boolean;
  isBestseller: boolean;
  rating: number;
  reviewCount: number;
};

export type CartItem = {
  id: string;
  productId: string;
  product: Product;
  color: ProductColor;
  quantity: number;
};
