import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#23120B] text-[#F9F4E8] overflow-hidden">
            {/* Top Marquee */}
            <div className="py-8 border-b border-[#FF9F1C]/20 bg-[#2D1B0E]">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 mx-8">
                            <span className="text-4xl md:text-6xl font-display text-[#FF9F1C]">ORDER - MISSION</span>
                            <span className="text-4xl md:text-6xl font-display text-white stroke-text">ORDER - JUST EAT</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 bg-[#FF9F1C] rounded-full flex items-center justify-center mb-6 border-4 border-[#F9F4E8]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                                alt="Logo"
                                className="w-12 h-12 invert brightness-0"
                            />
                        </div>
                        <h3 className="text-3xl font-display mb-4">The Pizza Home</h3>
                        <p className="opacity-70 max-w-xs">Ready to Enjoy a Slice of Happiness? Serving the best since 2010.</p>
                    </div>

                    {/* Locations */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-2xl font-display text-[#FF9F1C] mb-6">Our Locations</h4>
                        <div className="space-y-6">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 w-full max-w-xs hover:bg-white/10 transition-colors cursor-pointer">
                                <h5 className="font-bold flex items-center justify-center gap-2 mb-2"><MapPin className="w-4 h-4 text-[#FF9F1C]" /> City Centre</h5>
                                <p className="text-sm opacity-60">123 Deansgate, Manchester M3 2BW</p>
                                <button className="text-[#FF9F1C] text-sm mt-2 underline">View on Map</button>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 w-full max-w-xs hover:bg-white/10 transition-colors cursor-pointer">
                                <h5 className="font-bold flex items-center justify-center gap-2 mb-2"><MapPin className="w-4 h-4 text-[#FF9F1C]" /> Northern Quarter</h5>
                                <p className="text-sm opacity-60">45 Tib Street, Manchester M4 1LX</p>
                                <button className="text-[#FF9F1C] text-sm mt-2 underline">View on Map</button>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center md:items-end justify-center">
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="p-3 bg-[#FF9F1C] rounded-full text-[#23120B] hover:scale-110 transition-transform">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-3 bg-[#FF9F1C] rounded-full text-[#23120B] hover:scale-110 transition-transform">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-3 bg-[#FF9F1C] rounded-full text-[#23120B] hover:scale-110 transition-transform">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                        <p className="text-[#FF9F1C] font-display text-xl">Follow the fun @ThePizzaHome</p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
                    <p>&copy; 2024 The Pizza Home. Designed by AI.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;