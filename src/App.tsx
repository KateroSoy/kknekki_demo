import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Wishlist } from './pages/Wishlist';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="collection/:slug" element={<ProductList />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="wishlist" element={<Wishlist />} />
          
          {/* Fallbacks for demo */}
          <Route path="story" element={<Navigate to="/" replace />} />
          <Route path="store-locator" element={<Navigate to="/" replace />} />
          <Route path="faq" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
