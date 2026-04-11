"use client";

import { motion } from "framer-motion";
import { userData } from "@/lib/data";
import { WhatsappIcon, PhoneIcon } from "./SocialIcons";

const actions = [
  { 
    icon: PhoneIcon, 
    label: "Call Now", 
    href: `tel:${userData.phone}`, 
    color: "bg-white text-zinc-950 shadow-xl shadow-white/5" 
  },
  { 
    icon: WhatsappIcon, 
    label: "WhatsApp", 
    href: `https://wa.me/${userData.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi YourLabelOne! I'm interested in getting custom branded water bottles. Could you please share more details?")}`, 
    color: "bg-[#25D366] text-white shadow-xl shadow-green-500/20" 
  },
];

export default function ActionBar() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className={`${action.color} flex items-center justify-center gap-3 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg transition-all duration-300`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <action.icon className="w-5 h-5 drop-shadow-sm" />
          <span>{action.label}</span>
        </motion.a>
      ))}
    </div>
  );
}
