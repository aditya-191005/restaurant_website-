import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, IndianRupee, ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden pt-20">
      {/* Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-muted text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <Star size={12} className="text-primary" fill="currentColor" /> 4.8 Rating
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-muted text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <MapPin size={12} className="text-primary" /> Jorhat, Assam
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-muted text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <IndianRupee size={12} className="text-primary" /> ₹500 for two
              </motion.span>
            </div>

            <h1 className="text-7xl lg:text-[120px] font-display font-extrabold leading-[0.9] mb-8 tracking-tighter">
              Hashtag <br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(255,77,45,0.3)]">Restro</span> <br />
              & Cafe
            </h1>
            
            <p className="text-xl text-muted/80 mb-12 max-w-lg leading-relaxed font-medium">
              A cinematic culinary journey where tradition meets modern luxury. Experience the heart of Jorhat through our signature flavors.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#menu" className="btn-primary group h-16 px-10 text-lg">
                Explore Menu
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </a>
              <a href="#contact" className="btn-secondary h-16 px-10 text-lg">
                <Phone size={20} className="text-primary" /> Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Image (Floating Cutout) */}
          <motion.div
            style={{ y: y2, scale }}
            className="relative flex justify-center items-center"
          >
            {/* Glowing effect behind image */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full z-0"
            />
            
            <motion.div 
              style={{ rotate }}
              className="relative z-10 w-full max-w-[650px]"
            >
              <img 
                src="/src/assets/images/hero.png" 
                alt="Signature Dish" 
                className="w-full h-auto drop-shadow-[0_50px_80px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110"
                onError={(e) => { e.target.src = '/placeholderimg.png'; }}
              />
            </motion.div>
            
            {/* Floating details */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-10 -right-5 p-6 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/10 z-20 hidden lg:block"
            >
              <span className="text-primary font-bold text-lg mb-1 block">Signature</span>
              <span className="text-white text-sm font-medium">Chef's Special Noodles</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted/30"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;