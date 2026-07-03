import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#FF9F1C] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="checkerboard w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left relative z-20"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-[#23120B] uppercase tracking-tighter font-display mb-8">
              Made
              <br />
              Fresh
              <br />
              <span className="text-white drop-shadow-[4px_4px_0px_#23120B] stroke-black">Devoured Fast.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <button className="group flex items-center justify-center gap-2 bg-[#23120B] text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[4px_4px_0px_white]">
                Order Now
                <span className="group-hover:translate-x-1 transition-transform">😋</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors border-2 border-black shadow-[4px_4px_0px_black]">
                Get It Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs font-bold mt-3 opacity-70 ml-2 text-center lg:text-left">*Terms apply on first orders</p>
          </motion.div>

          {/* Right Content - Pizza Image */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            >
              {/* Rotating Pizza */}
              <motion.img
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=1000"
                alt="Delicious Pizza"
                className="w-full h-full object-cover rounded-full shadow-[0px_20px_50px_rgba(0,0,0,0.3)] border-4 border-white relative z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Decorative Tag */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 bg-white text-black font-bold px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_black] z-20 rotate-12"
              >
                Fresh Out the Oven! 🔥
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Strip Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#23120B] flex items-center overflow-hidden border-t-4 border-black z-30">
        <div className="checkerboard-white absolute top-0 left-0 w-full h-2"></div>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-white font-display text-2xl">FRESH INGREDIENTS</span>
              <span className="text-[#FF9F1C]">✦</span>
              <span className="text-white font-display text-2xl">PIPING HOT</span>
              <span className="text-[#FF9F1C]">✦</span>
              <span className="text-white font-display text-2xl">PERFECT CRUST</span>
              <span className="text-[#FF9F1C]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;