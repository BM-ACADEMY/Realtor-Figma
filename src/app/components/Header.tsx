import { Link, useLocation } from 'react-router';
import { Menu, X, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/properties', label: 'PROPERTIES' },
    { path: '/#about', label: 'ABOUT' },
    { path: '/#contact', label: 'CONTACT' },
  ];

  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Home className="w-6 h-6 text-[#E63946]" strokeWidth={2.5} />
            </div>
            <span
              className={`text-2xl tracking-tighter ${isSolid ? 'text-[#1A1A1A]' : 'text-white'}`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              <span className={isSolid ? 'text-[#E63946]' : 'text-white'}>Red</span>earth properties
            </span>
          </Link>

          {/* Desktop/Tablet Inline Toggle Navigation */}
          <div className="flex items-center gap-6 overflow-hidden">
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, x: 50, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: 50, width: 0 }}
                  className="flex items-center gap-8 mr-4"
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`text-xs tracking-[0.2em] font-bold transition-all hover:opacity-70 whitespace-nowrap ${
                          isSolid ? 'text-[#1A1A1A]' : 'text-white'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Navigation Toggle Button */}
            <button
              className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ${
                isSolid 
                  ? 'bg-[#E63946] text-white hover:bg-black' 
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-xs font-bold tracking-[0.2em] ml-1">
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
