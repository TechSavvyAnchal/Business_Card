"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { userData } from "@/lib/data";

const contactDetails = [
  { 
    icon: Mail, 
    title: "Email", 
    value: userData.email, 
    href: `mailto:${userData.email}`,
    color: "text-blue-500"
  },
  { 
    icon: Phone, 
    title: "Phone", 
    value: userData.phone, 
    href: `tel:${userData.phone}`,
    color: "text-emerald-500"
  },
];

export default function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full space-y-6"
    >
      <div className="flex items-center gap-4 px-2">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
          Contact Details
        </h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {/* Horizontal Row for Email & Phone */}
        <div className="grid grid-cols-2 gap-3">
          {contactDetails.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              whileHover={{ y: -3 }}
              className="group flex flex-col p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors">
                <item.icon size={18} className={item.color} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1">{item.title}</span>
              <span className="text-[11px] font-black text-zinc-100 truncate">{item.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Slim Location Row */}
        <motion.a
          href={`https://www.google.com/maps?q=${encodeURIComponent(userData.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className="group flex items-center justify-between p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <MapPin size={18} className="text-amber-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Location</span>
              <span className="text-[11px] font-black text-zinc-100">{userData.location}</span>
            </div>
          </div>
          <ExternalLink size={14} className="text-zinc-500 group-hover:text-zinc-100 transition-colors" />
        </motion.a>
      </div>
    </motion.div>
  );
}
