import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Users, Zap } from 'lucide-react';
import { features } from '../data';

const iconMap = {
  Utensils,
  Coffee,
  Users,
  Zap
};

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            The Hashtag Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tighter"
          >
            Crafting <span className="text-primary italic">Memorable</span> Moments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We go beyond just serving food. We create an atmosphere where every detail is designed for your comfort and joy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[2.5rem] bg-card/30 backdrop-blur-xl border border-white/5 hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted/70 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
