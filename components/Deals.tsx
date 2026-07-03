import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const bestSellers = [
    { name: "Spicy Peri Peri Paneer", price: "£9 - £13", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600" },
    { name: "Farmhouse Supreme", price: "£10 - £15", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
    { name: "Triple Cheese Overload", price: "£11 - £16", img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600" },
    { name: "BBQ Chicken Blaze", price: "£10 - £15", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" }
];

const Deals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = direction === 'left' ? -300 : 300;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#F9F4E8] overflow-hidden">
        {/* Carousel Header */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-6xl text-center text-[#23120B] mb-2">Top Tasty Picks</h2>
        <h3 className="text-3xl md:text-5xl text-center text-[#FF9F1C]">From Our Oven</h3>
        
        <div className="flex justify-end gap-2 mt-8">
            <button onClick={() => scroll('left')} className="p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                <ChevronLeft />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                <ChevronRight />
            </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-8 px-4 md:px-20 pb-12 snap-x snap-mandatory"
      >
        {bestSellers.map((item, idx) => (
            <motion.div 
                key={idx}
                className="min-w-[280px] md:min-w-[350px] snap-center bg-white p-4 rounded-3xl shadow-xl border-2 border-[#23120B] group hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">Hot</div>
                </div>
                <h4 className="font-display text-xl mb-2">{item.name}</h4>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-600">{item.price}</span>
                    <button className="bg-[#FF9F1C] text-black px-4 py-1 rounded-full text-sm font-bold border border-black shadow-[2px_2px_0px_black] active:translate-y-0.5 active:shadow-none transition-all">
                        Add
                    </button>
                </div>
            </motion.div>
        ))}
      </div>

      {/* Large Deals Banners */}
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-5xl font-display text-[#23120B] mb-10 border-b-4 border-[#FF9F1C] inline-block pb-2">Hot Deals</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#23120B] rounded-3xl p-8 md:p-12 text-[#F9F4E8] relative overflow-hidden flex flex-col justify-center min-h-[300px]"
            >
                <div className="relative z-10">
                    <span className="bg-[#FF9F1C] text-black font-bold px-3 py-1 rounded mb-4 inline-block">Special Offer</span>
                    <h3 className="text-4xl md:text-5xl font-display mb-2">2 Medium Pizzas</h3>
                    <p className="text-xl mb-6 font-mono opacity-80">One + One</p>
                    <div className="text-5xl font-bold text-[#FF9F1C]">£18 <span className="text-lg text-white font-normal">only</span></div>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" 
                    className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full object-cover opacity-50 rotate-12"
                    alt="Pizza deal"
                />
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#FF9F1C] rounded-3xl p-8 md:p-12 text-[#23120B] relative overflow-hidden min-h-[300px]"
            >
                <div className="absolute top-0 right-0 p-4">
                    <div className="checkerboard w-24 h-24 opacity-20"></div>
                </div>
                <h3 className="text-4xl md:text-5xl font-display mb-4">Super Tasty Pizza</h3>
                <p className="text-2xl font-bold italic mb-8">Best Deal Today!</p>
                <div className="bg-white inline-block px-6 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_black] rotate-[-2deg]">
                    <span className="text-4xl font-black block">30% OFF!</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Use Code: PIZZAHOME</span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deals;