import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import signatureImg from '../assets/images/signature.png';

const SignatureSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Signature Experience
            </span>
            <h2 className="text-5xl lg:text-8xl font-display font-extrabold mb-8 tracking-tighter leading-tight">
              The Famous <br />
              <span className="text-primary italic">Chicken Lollipop</span>
            </h2>
            <p className="text-muted/80 text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Not just a dish, but a legacy. Our Chicken Lollipops are seasoned with a secret blend of 12 spices, fried to a crisp perfection, and served with our signature tangy dip.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                "Traditional Spice Blend",
                "Crispy Exterior, Juicy Core",
                "Secret Tangy Dip"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ArrowRight size={16} />
                  </div>
                  <span className="text-lg font-bold text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 btn-primary h-16 px-10"
            >
              Order Now
            </motion.button>
          </motion.div>

          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Background Parallax Element */}
            <motion.div 
              style={{ y }}
              className="absolute w-[120%] h-[120%] border border-white/5 rounded-full z-0 pointer-events-none"
            />
            
            {/* Main Image with Parallax and Glow */}
            <div className="relative z-10 w-full max-w-[550px]">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                <motion.img 
                  style={{ rotate }}
                  src={signatureImg} 
                  alt="Signature Chicken Lollipop"
                  className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] relative z-10"
                  onError={(e) => { e.target.src = '/placeholderimg.png'; }}
                />
              </motion.div>
            </div>

            {/* Decorative Floating Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 -left-10 p-8 rounded-3xl bg-card/60 backdrop-blur-2xl border border-white/10 z-20"
            >
              <div className="text-6xl font-display font-black text-primary mb-2 italic">#1</div>
              <div className="text-white font-bold tracking-widest text-xs uppercase">Most Loved Dish</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
