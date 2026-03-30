import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/#about', label: 'About Us' },
    { path: '/#testimonials', label: 'Testimonials' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className="text-2xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              <span className="text-[#E63946]">Red</span>
              <span className="text-[#1A1A1A]">earth properties</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#E63946]'
                    : 'text-[#1A1A1A] hover:text-[#E63946]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-[#E63946] text-white px-6 py-3 rounded-lg hover:bg-[#d32f3d] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 ${
                  location.pathname === item.path
                    ? 'text-[#E63946]'
                    : 'text-[#1A1A1A]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="block bg-[#E63946] text-white px-6 py-3 rounded-lg text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
