"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StarIcon } from "./SocialIcons";

export default function RatingSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (star: number) => {
    setRating(prev => prev === star ? 0 : star);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      className="w-full text-center space-y-6"
    >
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-xs font-black text-zinc-100 uppercase tracking-[0.4em]">rate us</h3>
        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest px-4 text-center">Rate your experience with our branding services</p>
      </div>
      
      <div className="flex items-center justify-center gap-3">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = (hover > 0 && star <= hover) || (hover === 0 && star <= rating);
          
          return (
            <motion.button
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleRating(star)}
              whileHover={{ 
                scale: 1.3, 
                rotate: 15,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.8 }}
              className="focus:outline-none"
            >
              <StarIcon
                style={{
                  // Amber if active, 50% White (Glass) otherwise
                  color: isActive ? "#fbbf24" : "rgba(255, 255, 255, 0.5)",
                  fill: isActive ? "#fbbf24" : "rgba(255, 255, 255, 0.1)"
                }}
                className={cn(
                  "w-10 h-10 transition-all duration-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]",
                  !isActive && "hover:opacity-100"
                )}
              />
            </motion.button>
          );
        })}
      </div>
      
      {rating > 0 && (
        <motion.p 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] font-black text-amber-500 uppercase tracking-widest"
        >
          Thank you for your {rating}-star rating!
        </motion.p>
      )}
    </motion.div>
  );
}
