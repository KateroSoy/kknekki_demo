import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { ToastContainer } from '../ui/ToastContainer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global Overlays */}
      <CartDrawer />
      <MobileMenu />
      <SearchOverlay />
      <ToastContainer />
    </div>
  );
}
