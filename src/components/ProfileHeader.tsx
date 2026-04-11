"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { userData } from "@/lib/data";

export default function ProfileHeader() {
  const bioChars = Array.from(userData.bio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex flex-col items-center w-full pt-0"
    >
      {/* Super-Scale Logo Section */}
      <div className="relative w-full flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="relative w-full max-w-[400px] h-72 lg:max-w-[600px] lg:h-[400px] select-none z-0"
        >
          <Image
            src="/logo.png"
            alt={userData.name}
            fill
            className="object-contain contrast-[1.2] brightness-[1.2]"
            priority
            unoptimized
          />
        </motion.div>

        {/* Refined Tagline & Bio - Lowered to clear the logo */}
        <div className="relative -mt-8 lg:-mt-12 z-10 flex flex-col items-center w-full px-6">
          <div className="flex flex-col items-center gap-3">
            <div className="h-[2px] w-10 bg-indigo-500/40 rounded-full" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 bg-white/5 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/10 shadow-xl">
              {userData.tagline}
            </p>
          </div>
          
          <div className="max-w-xl mx-auto text-zinc-400 text-lg lg:text-xl font-light leading-relaxed text-center mt-8 px-4 min-h-[4.5em] font-[family-name:var(--font-outfit)] tracking-tight">
            {bioChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 0.5 + index * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
