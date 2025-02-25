import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wheat } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/bhadrakali/main/logo.png" 
              alt="Bhadrakali Rice & Spices"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-amber-700"
                >
                  Home
                </button>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-amber-700"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-amber-700"
                >
                  About
                </Link>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-amber-700"
                >
                  Testimonials
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-amber-700">
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className={`text-gray-700 hover:text-amber-700 ${location.pathname === '/products' ? 'text-amber-700' : ''}`}
                >
                  Products
                </Link>
                <Link 
                  to="/about" 
                  className={`text-gray-700 hover:text-amber-700 ${location.pathname === '/about' ? 'text-amber-700' : ''}`}
                >
                  About
                </Link>
                <Link to="/#testimonials" className="text-gray-700 hover:text-amber-700">
                  Testimonials
                </Link>
              </>
            )}
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-amber-700 ${location.pathname === '/contact' ? 'text-amber-700' : ''}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
              >
                Home
              </button>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
              >
                Testimonials
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block px-3 py-2 hover:text-amber-700 hover:bg-amber-50 rounded-md ${
                  location.pathname === '/products' ? 'text-amber-700 bg-amber-50' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 hover:text-amber-700 hover:bg-amber-50 rounded-md ${
                  location.pathname === '/about' ? 'text-amber-700 bg-amber-50' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </>
          )}
          <Link
            to="/contact"
            className={`block px-3 py-2 hover:text-amber-700 hover:bg-amber-50 rounded-md ${
              location.pathname === '/contact' ? 'text-amber-700 bg-amber-50' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}