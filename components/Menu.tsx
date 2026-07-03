import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Leaf } from 'lucide-react';

const pizzas = [
  {
    category: 'veg',
    items: [
      { name: "Margherita Magic", desc: "Classic tomato sauce, mozzarella, and a golden thin crust.", price: "£8.95", large: "£12.95" },
      { name: "Farmhouse Crunch", desc: "Mushrooms, bell peppers, olives and onions on a cheesy base.", price: "£9.95", large: "£13.95" },
      { name: "Paneer Tandoori Twist", desc: "Spiced paneer with onions, capsicum and tikka sauce.", price: "£9.95", large: "£13.95" },
      { name: "Cheesy Corn Carnival", desc: "Sweetcorn, jalapeño, olives, and melted cheese.", price: "£8.95", large: "£12.95" },
    ]
  },
  {
    category: 'non-veg',
    items: [
      { name: "Pepperoni Powerhouse", desc: "Layers of pepperoni with mozzarella on a crispy crust.", price: "£10.95", large: "£15.95" },
      { name: "BBQ Chicken Melt", desc: "Grilled chicken with BBQ sauce, onions and gooey cheese.", price: "£10.95", large: "£15.95" },
      { name: "Tandoori Chicken Blaze", desc: "Chicken tikka with onions, capsicum, and smoky spices.", price: "£11.95", large: "£16.95" },
      { name: "Meat Lovers Supreme", desc: "Pepperoni, sausage, chicken, and ham loaded to the max.", price: "£12.95", large: "£17.95" },
    ]
  }
];

const addons = [
  { name: 'Extra Cheese', price: '£2.50' },
  { name: 'Garlic Sauce', price: '£1.50' },
  { name: 'Chocolate Lava Cake', price: '£5.95' },
  { name: 'Coke', price: '£1.95' }
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
            <h2 className="text-5xl md:text-7xl text-[#FF9F1C] mb-4">A Pizza Lover's Choice</h2>
            <div className="flex justify-center gap-4 mt-8">
                <button 
                    onClick={() => setActiveTab('veg')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#FF9F1C] font-bold text-lg transition-all ${activeTab === 'veg' ? 'bg-[#FF9F1C] text-[#23120B]' : 'text-[#FF9F1C] hover:bg-[#FF9F1C]/10'}`}
                >
                    <Leaf className="w-5 h-5" /> Veg Pizzas
                </button>
                <button 
                    onClick={() => setActiveTab('non-veg')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#FF9F1C] font-bold text-lg transition-all ${activeTab === 'non-veg' ? 'bg-[#FF9F1C] text-[#23120B]' : 'text-[#FF9F1C] hover:bg-[#FF9F1C]/10'}`}
                >
                    <Flame className="w-5 h-5" /> Meat Pizzas
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
                            <span className="block text-xs text-white/50">Regular</span>
                        </div>
                    </div>
                    <p className="text-white/70 mb-2 font-light">{item.desc}</p>
                    <div className="flex justify-between items-center mt-2">
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(s => <Sparkles key={s} className="w-3 h-3 text-yellow-500" />)}
                         </div>
                         <span className="text-sm font-bold text-[#FF9F1C]">Large: {item.large}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Addons Section - Quick Look */}
        <div className="mt-16 pt-8 border-t-2 border-[#FF9F1C] border-dashed">
            <h3 className="text-3xl font-display text-center mb-8">Add-ons & Desserts</h3>
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