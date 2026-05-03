import React from 'react';
import { Camera, Globe, Heart, Share2, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-black mb-8">
              HASHTAG<span className="text-primary">RESTRO</span>
            </h2>
            <p className="text-muted/70 text-lg leading-relaxed mb-10 font-medium">
              A cinematic culinary journey in the heart of Jorhat. We blend tradition with modern luxury to create an unforgettable dining experience.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Share2].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-6">
              {['Home', 'Full Menu', 'About Us', 'Gallery', 'Book a Table'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-primary font-bold text-lg transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-widest uppercase">Legal</h4>
            <ul className="space-y-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-primary font-bold text-lg transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-white/5">
              <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-muted text-sm mb-8 leading-relaxed">
                Join our newsletter to receive updates on new dishes and special offers.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 px-6 text-white text-sm focus:border-primary transition-colors outline-none"
                />
                <button className="absolute right-2 top-2 h-10 px-4 bg-primary rounded-xl text-white font-bold text-xs uppercase tracking-widest">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted/50 text-sm font-medium">
            © 2024 Hashtag Restro & Cafe. Crafted with <Heart size={14} className="inline text-primary mx-1" fill="currentColor" /> for Food Lovers.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-muted hover:text-white transition-colors uppercase font-bold text-[10px] tracking-[0.4em]"
          >
            Back to Top 
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
