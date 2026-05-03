import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, IndianRupee, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-white/10 z-[201] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart size={24} className="text-primary" />
                <h2 className="text-2xl font-display font-bold">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-muted mb-6">
                    <ShoppingCart size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cart is empty</h3>
                  <p className="text-muted">Start adding delicious items to your order!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = '/placeholderimg.png'; }} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-muted hover:text-primary transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold flex items-center">
                          <IndianRupee size={14} /> {item.price}
                        </span>
                        <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-muted hover:text-white"><Minus size={14} /></button>
                          <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-muted hover:text-white"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/10 space-y-6 bg-background/50 backdrop-blur-xl">
                <div className="flex justify-between items-center">
                  <span className="text-muted font-bold tracking-widest uppercase text-xs">Total Amount</span>
                  <span className="text-3xl font-black flex items-center">
                    <IndianRupee size={24} className="text-primary" /> {cartTotal}
                  </span>
                </div>
                <button className="btn-primary w-full h-16 text-lg font-black tracking-widest">
                  CHECKOUT NOW
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
