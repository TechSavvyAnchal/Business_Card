"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, Zap } from "lucide-react";
import { userData } from "@/lib/data";

const iconMap = {
  Layers: Layers,
  PenTool: PenTool,
  Zap: Zap,
};

export default function ServiceHighlights() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {userData.services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] || Layers;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ 
                y: -6,
                rotateX: 4,
                rotateY: 4,
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="relative p-4 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/40 group overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              />
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 mb-3 transition-all group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-[10px] text-zinc-100 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-[9px] font-bold text-zinc-500 leading-tight">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
