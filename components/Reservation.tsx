import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 relative bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#F9F4E8] rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-[#FF9F1C]">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-display text-[#23120B] mb-4">Tempah Meja</h2>
                <p className="text-gray-600">Tempah tempat anda untuk pizza terbaik di bandar!</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Nama*</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Nombor Telefon*</label>
                    <input type="tel" placeholder="(+60) 123-456-789" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Email*</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="font-bold text-[#23120B]">Jumlah Orang*</label>
                    <select className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]">
                        <option>2 Tetamu</option>
                        <option>4 Tetamu</option>
                        <option>6 Tetamu</option>
                        <option>Kumpulan Besar (8+)</option>
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
                    <label className="font-bold text-[#23120B]">Permintaan Istimewa</label>
                    <textarea rows={3} placeholder="Hiasan hari jadi, kerusi bayi, dll..." className="w-full bg-white border-2 border-[#23120B]/20 rounded-lg p-3 focus:outline-none focus:border-[#FF9F1C]"></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#FF9F1C] text-[#23120B] font-display text-2xl py-4 rounded-xl border-2 border-[#23120B] shadow-[4px_4px_0px_#23120B] hover:shadow-[2px_2px_0px_#23120B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                        Tempah Sekarang
                    </motion.button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;