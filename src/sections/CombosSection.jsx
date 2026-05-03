import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Check, Star, ShoppingCart } from 'lucide-react';
import { combos } from '../data';
import { useCart } from '../context/CartContext';

const CombosSection = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Big Flavors, Better Value
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tighter"
          >
            Hashtag <span className="text-primary italic">Value</span> Combos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Perfect for parties or a family feast. Our curated combos bring together our best-selling items at an unbeatable price.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {combos.map((combo, i) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-12 rounded-[3rem] bg-card/40 backdrop-blur-2xl border border-white/5 overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                    <Star size={12} fill="currentColor" /> Best Value
                  </div>
                  <h3 className="text-4xl font-display font-bold mb-6 text-white leading-tight">
                    {combo.name}
                  </h3>
                  <p className="text-muted/70 mb-10 text-lg leading-relaxed font-medium">
                    {combo.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Check size={14} />
                        </div>
                        <span className="text-white/80 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-muted mb-1">Price</span>
                      <span className="text-4xl font-black flex items-center gap-1">
                        <IndianRupee size={28} className="text-primary" />
                        {combo.price}
                      </span>
                    </div>
                    <button 
                      onClick={() => addToCart(combo)}
                      className="btn-primary h-14 px-8 text-xs flex items-center gap-2"
                    >
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 h-full flex items-center"
                  >
                    <img 
                      src={combo.image} 
                      alt={combo.name}
                      className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] rounded-[2rem]"
                      onError={(e) => { e.target.src = '/placeholderimg.png'; }}
                    />
                  </motion.div>
                  {/* Decorative element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[80px] rounded-full -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CombosSection;
