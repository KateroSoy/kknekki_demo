import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductColor } from '../types';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info';
}

interface StoreState {
  // Cart State
  cart: CartItem[];
  addToCart: (product: Product, color: ProductColor, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist State
  wishlist: string[];
  toggleWishlist: (productId: string) => void;

  // UI State
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;

  // Toast State
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'info') => void;
  removeToast: (id: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product, color, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.productId === product.id && item.color.id === color.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === existingItem.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
              isCartOpen: true, // Auto open cart on add
            };
          }

          const newItem: CartItem = {
            id: `${product.id}-${color.id}-${Date.now()}`,
            productId: product.id,
            product,
            color,
            quantity,
          };

          return { cart: [...state.cart, newItem], isCartOpen: true };
        });
        get().addToast(`Added ${product.name} to cart`);
      },
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),
      updateQuantity: (itemId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),

      wishlist: [],
      toggleWishlist: (productId) => {
        set((state) => {
          const isWishlisted = state.wishlist.includes(productId);
          return {
            wishlist: isWishlisted
              ? state.wishlist.filter((id) => id !== productId)
              : [...state.wishlist, productId],
          };
        });
        const isWishlisted = get().wishlist.includes(productId);
        get().addToast(isWishlisted ? 'Added to wishlist' : 'Removed from wishlist', 'info');
      },

      isCartOpen: false,
      setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      isMobileMenuOpen: false,
      setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
      isSearchOpen: false,
      setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),

      toasts: [],
      addToast: (message, type = 'success') => {
        const id = Math.random().toString(36).substring(2, 9);
        set((state) => ({
          toasts: [...state.toasts, { id, message, type }]
        }));
        // Auto remove after 3s
        setTimeout(() => {
          get().removeToast(id);
        }, 3000);
      },
      removeToast: (id) =>
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        })),
    }),
    {
      name: 'luma-loop-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
);
