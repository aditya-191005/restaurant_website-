import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    title: "Ambience",
    size: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    title: "Fine Dining",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    title: "Our Kitchen",
    size: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    title: "Signature Platter",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    title: "Chef at Work",
    size: "col-span-2 row-span-1"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Visual Storytelling
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-display font-extrabold mb-8 tracking-tighter"
            >
              The Hashtag <span className="text-primary italic">Gallery</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-muted text-xl max-w-2xl leading-relaxed"
            >
              A glimpse into our world of culinary passion and aesthetic comfort. See why we are Jorhat's favorite destination.
            </motion.p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300"
          >
            <Camera size={20} className="text-primary" /> Follow @hashtag_jorhat
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[1000px] md:h-[800px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-[3rem] group cursor-pointer ${img.size}`}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-700 brightness-[0.7] group-hover:brightness-100"
                onError={(e) => { e.target.src = '/placeholderimg.png'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Gallery</span>
                  <h4 className="text-2xl font-display font-bold text-white">{img.title}</h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
