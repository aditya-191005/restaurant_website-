import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, Send, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-display font-extrabold mb-8 tracking-tighter leading-tight"
            >
              Visit <span className="text-primary italic">Us</span> Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-muted text-xl max-w-xl mb-16 leading-relaxed font-medium"
            >
              Whether you're looking for a quick bite or a grand celebration, Hashtag Restro & Cafe is your perfect destination in Jorhat.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", value: "+91 98765 43210", action: "Call Now", color: "primary" },
                { icon: MessageSquare, title: "WhatsApp", value: "+91 98765 43210", action: "Chat Now", color: "secondary" },
                { icon: MapPin, title: "Location", value: "KB Road, Jorhat, Assam", action: "Get Directions", color: "primary" },
                { icon: Clock, title: "Opening Hours", value: "11:00 AM - 10:30 PM", action: "Daily Service", color: "secondary" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all duration-500`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-widest block mb-1">{item.title}</span>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.value}</h4>
                    <button className="text-primary font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-2 transition-transform">
                      {item.action} <Send size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Map/CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full -z-10" />
            <div className="p-12 rounded-[4rem] bg-card/30 backdrop-blur-3xl border border-white/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-display font-bold mb-6">Need a Table?</h3>
                <p className="text-muted text-lg mb-10 leading-relaxed font-medium">
                  Planning a special occasion? Book your table in advance and let us prepare a memorable experience for you and your loved ones.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  {["Outdoor Seating", "Birthday Parties", "Home Delivery", "Free Wi-Fi"].map(tag => (
                    <span key={tag} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="btn-primary h-20 text-xl font-black tracking-widest flex items-center justify-center gap-4">
                  <Navigation size={24} /> BOOK A TABLE NOW
                </button>
                <button className="btn-secondary h-20 text-xl font-black tracking-widest">
                  EXPLORE FULL MENU
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
