import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Leaf } from 'lucide-react';

const pizzas = [
  {
    category: 'veg',
    items: [
      { name: "Margherita Magic", desc: "Sos tomato klasik, mozzarella, dan kerak nipis keemasan.", price: "RM 25.90", large: "RM 35.90" },
      { name: "Farmhouse Crunch", desc: "Cendawan, lada benggala, zaitun dan bawang di atas asas berkeju.", price: "RM 28.90", large: "RM 38.90" },
      { name: "Paneer Tandoori Twist", desc: "Paneer berempah dengan bawang, kapsikum dan sos tikka.", price: "RM 27.90", large: "RM 37.90" },
      { name: "Cheesy Corn Carnival", desc: "Jagung emas, jagung manis, jalapeño, zaitun, dan keju cair.", price: "RM 24.90", large: "RM 34.90" },
    ]
  },
  {
    category: 'non-veg',
    items: [
      { name: "Pepperoni Powerhouse", desc: "Lapisan pepperoni dengan mozzarella di atas kerak.", price: "RM 32.90", large: "RM 42.90" },
      { name: "BBQ Chicken Melt", desc: "Ayam panggang dengan sos BBQ, bawang dan keju likat.", price: "RM 29.90", large: "RM 39.90" },
      { name: "Tandoori Chicken Blaze", desc: "Ayam tikka dengan bawang, kapsikum, dan rempah asap.", price: "RM 31.90", large: "RM 41.90" },
      { name: "Meat Lovers Supreme", desc: "Pepperoni, sosej, ayam, dan ham dimuatkan sepenuhnya.", price: "RM 35.90", large: "RM 45.90" },
    ]
  }
];

const addons = [
  { name: 'Keju Tambahan', price: 'RM 5.90' },
  { name: 'Sos Bawang Putih', price: 'RM 3.90' },
  { name: 'Lava Coklat', price: 'RM 12.90' },
  { name: 'Coke', price: 'RM 4.90' }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'veg' | 'non-veg'>('veg');

  return (
    <section id="menu" className="py-24 bg-[#23120B] text-[#F9F4E8] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#FF9F1C] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#FF9F1C] opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h2 className="text-5xl md:text-7xl text-[#FF9F1C] mb-4">Pilihan Pencinta Pizza</h2>
            <div className="flex justify-center gap-4 mt-8">
                <button 
                    onClick={() => setActiveTab('veg')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#FF9F1C] font-bold text-lg transition-all ${activeTab === 'veg' ? 'bg-[#FF9F1C] text-[#23120B]' : 'text-[#FF9F1C] hover:bg-[#FF9F1C]/10'}`}
                >
                    <Leaf className="w-5 h-5" /> Pizza Sayuran
                </button>
                <button 
                    onClick={() => setActiveTab('non-veg')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#FF9F1C] font-bold text-lg transition-all ${activeTab === 'non-veg' ? 'bg-[#FF9F1C] text-[#23120B]' : 'text-[#FF9F1C] hover:bg-[#FF9F1C]/10'}`}
                >
                    <Flame className="w-5 h-5" /> Pizza Daging
                </button>
            </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {pizzas.find(p => p.category === activeTab)?.items.map((item, idx) => (
                <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group border-b border-[#FF9F1C]/30 pb-6 hover:bg-[#FF9F1C]/5 p-4 rounded-xl transition-colors cursor-pointer"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-2xl text-[#FF9F1C] group-hover:text-white transition-colors">{item.name}</h3>
                        <div className="text-right">
                            <span className="block font-bold text-lg">{item.price}</span>
                            <span className="block text-xs text-white/50">Biasa</span>
                        </div>
                    </div>
                    <p className="text-white/70 mb-2 font-light">{item.desc}</p>
                    <div className="flex justify-between items-center mt-2">
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(s => <Sparkles key={s} className="w-3 h-3 text-yellow-500" />)}
                         </div>
                         <span className="text-sm font-bold text-[#FF9F1C]">Besar: {item.large}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Addons Section - Quick Look */}
        <div className="mt-16 pt-8 border-t-2 border-[#FF9F1C] border-dashed">
            <h3 className="text-3xl font-display text-center mb-8">Tambahan & Pencuci Mulut</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {addons.map((addon) => (
                    <div key={addon.name} className="bg-[#3D2616] p-4 rounded-lg text-center hover:scale-105 transition-transform">
                        <p className="font-bold">{addon.name}</p>
                        <p className="text-[#FF9F1C]">{addon.price}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;