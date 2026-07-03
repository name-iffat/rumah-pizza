import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 relative bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#F9F4E8] rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-[#FF9F1C]">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-display text-[#23120B] mb-4">Book a Table</h2>
                <p className="text-gray-600">Reserve your spot for the best pizza in Manchester!</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Name*</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Phone Number*</label>
                    <input type="tel" placeholder="(+44) 161 123 4567" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Email*</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Number of Guests*</label>
                    <select className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]">
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>Large Group (8+)</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Tarikh*</label>
                    <input type="date" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Masa*</label>
                    <input type="time" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]" />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="font-bold text-[#23120B]">Special Requests</label>
                    <textarea rows={3} placeholder="Birthday decorations, high chair, allergies..." className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]"></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#FF9F1C] text-[#23120B] font-display text-2xl py-4 rounded-xl border-2 border-[#23120B] shadow-[4px_4px_0px_#23120B] hover:shadow-[2px_2px_0px_#23120B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                        Book Now
                    </motion.button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;