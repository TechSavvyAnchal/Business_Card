"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  Globe,
  ArrowRight,
  MapPin
} from "lucide-react";
import { 
  InstagramIcon, 
  FacebookIcon,
  StarIcon
} from "./SocialIcons";
import { cn } from "@/lib/utils";

const iconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Star: StarIcon,
  Globe: Globe,
  MapPin: MapPin,
};

interface LinkButtonProps {
  name: string;
  url: string;
  icon: keyof typeof iconMap;
  index: number;
  color?: string;
}

export default function LinkButton({ name, url, icon, index, color }: LinkButtonProps) {
  const Icon = iconMap[icon] || Globe;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative block w-full outline-none"
    >
      <motion.div 
        // Magnetic/Tilt Style Animation on Hover
        whileHover={{ 
          y: -6,
          rotateX: 4,
          rotateY: -4,
          scale: 1.01,
          transition: { 
            type: "spring" as const,
            stiffness: 400,
            damping: 10
          } 
        }}
        className={cn(
          "relative flex items-center justify-between w-full p-4 lg:p-6 rounded-3xl transition-all duration-500 overflow-hidden",
          "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
          "hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        )}
      >
        {/* Interactive Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* Shimmer Effect */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />

        <div className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
          color || "from-zinc-100 to-white"
        )} />


        <div className="relative z-10 flex items-center gap-5">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-500 shadow-xl bg-gradient-to-br",
            color || "from-zinc-800 to-black",
            "group-hover:shadow-2xl group-hover:scale-105"
          )}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-black text-lg tracking-tighter text-zinc-100 group-hover:text-white transition-colors duration-500">
            {name}
          </span>
        </div>
        
        <div className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 bg-white/5">
          <ArrowRight className="text-zinc-500 transition-all duration-500 group-hover:text-white group-hover:translate-x-1" size={18} strokeWidth={3} />
        </div>
      </motion.div>
    </motion.a>
  );
}
