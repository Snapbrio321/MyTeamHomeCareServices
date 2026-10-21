import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq"      element={<FAQ />} />
            <Route path="/contact"  element={<Contact />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="pt-32 pb-20 text-center min-h-screen bg-gray-50">
                <p className="text-7xl font-extrabold text-teal-600 mb-4">404</p>
                <h1 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h1>
                <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary inline-flex">Go Back Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
