"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { userData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
  },
};

export default function PortfolioSlider() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full space-y-6"
    >
      <div className="flex items-center gap-4 px-2">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
          Design Showcase
        </h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div ref={carouselRef} className="relative w-full overflow-hidden">
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          variants={containerVariants}
          className="flex gap-4 cursor-grab active:cursor-grabbing px-2"
        >
          {userData.portfolio.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative min-w-[200px] h-[280px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex-shrink-0 backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <p className="text-[10px] font-black text-white uppercase tracking-widest opacity-80">Collection</p>
                <h3 className="text-white font-black text-sm tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Helper Hint */}
        <div className="flex justify-center mt-4">
          <p className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500">Swipe to Explore</p>
        </div>
      </div>
    </motion.div>
  );
}
