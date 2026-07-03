import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservation' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8 py-4 ${
          isScrolled ? 'bg-[#FF9F1C] shadow-lg py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-lg bg-white/90 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#home" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
            <div className="bg-white p-2 rounded-full border-2 border-black">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#23120B] rounded-full flex items-center justify-center text-[#FF9F1C]">
                <Pizza className="w-8 h-8 md:w-10 md:h-10 fill-[#FF9F1C]" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-display text-lg text-black bg-white px-2 rounded">The Pizza Home</span>
            </div>
          </a>

          {/* Right Links (Desktop) */}
          <div className="hidden md:flex gap-8">
            {navLinks.slice(2, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-lg bg-white/90 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden bg-white p-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_black]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-[#FF9F1C] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-6 right-6 bg-white p-2 rounded-full border-2 border-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-4xl text-black hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;