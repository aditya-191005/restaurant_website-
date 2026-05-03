import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndianRupee, ShoppingCart, Search, Flame, ArrowRight } from 'lucide-react';
import { categories, menuItems } from '../data';
import { useCart } from '../context/CartContext';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Indian Non-Veg');
  const { setSelectedItem, addToCart } = useCart();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Culinary Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-8xl font-display font-extrabold mb-8 tracking-tighter"
          >
            Our <span className="text-primary italic">Menu</span>
          </motion.h2>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-4 mb-20 max-w-6xl mx-auto pb-6 px-4 no-scrollbar whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 border ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-[0_10px_30px_rgba(255,77,45,0.4)]' 
                : 'bg-white/5 text-muted border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    onClick={() => setSelectedItem(item)}
                    className="glass-card group cursor-pointer"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/placeholderimg.png'; }}
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.tags?.map(tag => (
                          <span key={tag} className="px-4 py-1.5 bg-background/60 backdrop-blur-xl text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5 flex items-center gap-2">
                            {tag === 'Popular' && <Flame size={12} className="text-primary" fill="currentColor" />}
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
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                        <span className="text-2xl font-black flex items-center gap-1">
                          <IndianRupee size={18} className="text-primary" />
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-2">
                        {item.description}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <ShoppingCart size={16} /> Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-primary/40 mb-8 border border-white/5">
                  <Search size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Nothing in <span className="text-primary italic">{activeCategory}</span>
                </h3>
                <p className="text-muted text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  We're currently updating our secret recipes for this category. Stay tuned for something delicious!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.slice(0, 3).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      {cat} <ArrowRight size={14} className="text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
