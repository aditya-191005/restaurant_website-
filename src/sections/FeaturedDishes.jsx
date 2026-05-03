import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ShoppingCart, Flame, Star, Search } from 'lucide-react';
import { featuredDishes } from '../data';
import { useCart } from '../context/CartContext';

const FeaturedDishes = () => {
  const { setSelectedItem, addToCart } = useCart();

  return (
    <section className="py-32 bg-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Chef's Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-display font-extrabold tracking-tighter"
            >
              Featured <span className="text-primary italic">Delights</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="h-1 w-24 bg-primary/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full w-full bg-primary" 
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => setSelectedItem(dish)}
              className="glass-card group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/placeholderimg.png'; }}
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {dish.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-background/60 backdrop-blur-xl text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5 flex items-center gap-2">
                      {tag === 'Bestseller' && <Flame size={12} className="text-primary" fill="currentColor" />}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest bg-primary/80 backdrop-blur-md px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    <Search size={16} /> View Details
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">4.9 (120+)</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-2">{dish.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black flex items-center gap-1">
                    <IndianRupee size={20} className="text-primary" />
                    {dish.price}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(dish);
                    }}
                    className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_10px_20px_rgba(255,77,45,0.3)] hover:scale-110 transition-transform"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
