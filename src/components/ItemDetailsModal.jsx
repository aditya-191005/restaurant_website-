import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, IndianRupee, Flame, Star, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ItemDetailsModal = () => {
  const { selectedItem, setSelectedItem, addToCart } = useCart();

  if (!selectedItem) return null;

  return (
    <AnimatePresence>
      {selectedItem && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-card rounded-t-[3rem] border-t border-white/10 z-[101] overflow-hidden max-h-[90vh]"
          >
            <div className="container mx-auto px-6 py-12 relative">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/placeholderimg.png'; }}
                  />
                  <div className="absolute top-6 left-6 flex gap-3">
                    {selectedItem.tags?.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-background/60 backdrop-blur-xl text-xs font-bold uppercase tracking-widest rounded-full border border-white/5 flex items-center gap-2">
                        {tag === 'Popular' && <Flame size={14} className="text-primary" fill="currentColor" />}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                        {selectedItem.category}
                      </span>
                      <h2 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
                        {selectedItem.name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-2xl">
                      <Star size={18} fill="currentColor" />
                      <span className="text-lg font-bold">4.9</span>
                    </div>
                  </div>

                  <p className="text-muted text-xl leading-relaxed mb-10 font-medium">
                    {selectedItem.description}
                  </p>

                  <div className="flex items-center justify-between p-8 rounded-[2rem] bg-white/5 border border-white/10 mb-10">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase font-bold tracking-widest text-muted mb-1">Price</span>
                      <span className="text-4xl font-black flex items-center gap-1">
                        <IndianRupee size={32} className="text-primary" />
                        {selectedItem.price}
                      </span>
                    </div>
                    
                    {/* Quantity controls could go here if needed, but keeping it simple for now */}
                  </div>

                  <button 
                    onClick={() => {
                      addToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="btn-primary w-full h-20 text-xl font-black tracking-widest flex items-center justify-center gap-4"
                  >
                    <ShoppingCart size={24} /> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ItemDetailsModal;
