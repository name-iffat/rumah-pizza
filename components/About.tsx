import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1605888955907-d4bb98979b8f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1697155836250-e3ba3a24fbd5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=600",
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-5xl md:text-6xl text-[#23120B] mb-6 leading-tight">
                            Di mana Setiap Potongan <br />
                            <span className="text-[#FF9F1C]">Sempurna Bercerita</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                            Bahan-bahan kami segar, ketuhar kami panas, dan pasukan kami bersemangat untuk menyajikan pizza terbaik kepada anda. Daripada Margherita klasik hingga ledakan rasa yang luar biasa, setiap pizza dibuat dengan niat, keseronokan dan sedikit keajaiban pizza.
                        </p>
                        <button className="bg-[#23120B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#FF9F1C] hover:text-black transition-colors shadow-[4px_4px_0px_#FF9F1C]">
                            Pesan di - GrabFood
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FF9F1C] rounded-full opacity-20 blur-xl"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src={images[0]} className="rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white" alt="Pizza party" />
                            <img src={images[1]} className="rounded-2xl shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white mt-8" alt="Eating pizza" />
                        </div>
                    </motion.div>
                </div>

                {/* Scrolling Gallery Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full overflow-x-auto hide-scrollbar pb-8"
                >
                    <div className="flex gap-4 min-w-max">
                        {images.concat(images).map((src, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                                className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] flex-shrink-0 relative group"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${idx}`}
                                    className="w-full h-full object-cover rounded-xl border-4 border-[#23120B] shadow-[6px_6px_0px_#FF9F1C]"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors rounded-xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="h-8 w-full bg-[#23120B] mt-12 relative overflow-hidden">
                <div className="checkerboard-white w-full h-full opacity-50"></div>
            </div>
        </section>
    );
};

export default About;