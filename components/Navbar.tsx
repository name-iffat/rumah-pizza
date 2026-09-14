import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Pizza, Facebook, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

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
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-50 bg-[#23120B] flex flex-col"
          >
            {/* Decorative checkerboard strip */}
            <div className="checkerboard-white absolute top-0 left-0 w-full h-3 opacity-80" />
            <div className="checkerboard-white absolute bottom-0 left-0 w-full h-3 opacity-80" />

            {/* Ambient glow + rotating pizza watermark */}
            <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#FF9F1C]/20 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-16 -left-16 opacity-10 pointer-events-none"
            >
              <Pizza className="w-64 h-64 text-[#FF9F1C]" />
            </motion.div>

            <button
              className="absolute top-6 right-6 z-10 bg-[#FF9F1C] p-2 rounded-full border-2 border-black shadow-[3px_3px_0px_black] hover:rotate-90 hover:shadow-[1px_1px_0px_black] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 relative z-10">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                    className="group flex items-baseline gap-4 py-3 border-b border-white/10"
                  >
                    <span className="font-display text-sm text-[#FF9F1C]">0{i + 1}</span>
                    <span className="font-display text-4xl md:text-6xl text-white group-hover:text-[#FF9F1C] group-hover:translate-x-2 transition-all">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-white/0 group-hover:text-[#FF9F1C] group-hover:opacity-100 transition-all ml-auto" />
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.15 + navLinks.length * 0.08, duration: 0.4 }}
                className="mt-10 inline-flex items-center justify-center gap-2 bg-[#FF9F1C] text-black font-display text-xl px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_white] hover:translate-y-1 hover:shadow-[2px_2px_0px_white] transition-all w-fit"
              >
                Order Now 😋
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 px-8 md:px-16 py-8 border-t border-white/10 flex items-center justify-between"
            >
              <span className="text-white/50 text-sm">Ready to Enjoy a Slice of Happiness?</span>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-white/5 hover:bg-[#FF9F1C] hover:text-black rounded-full text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-[#FF9F1C] hover:text-black rounded-full text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-[#FF9F1C] hover:text-black rounded-full text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;