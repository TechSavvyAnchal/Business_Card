"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { userData } from "@/lib/data";

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${userData.name}'s Digital Business Card`,
          text: `Check out ${userData.name}'s digital business card!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Error copying:", err);
      }
    }
  };

  return (
    <motion.button
      onClick={handleShare}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg text-zinc-600 dark:text-zinc-400"
    >
      <Share2 size={20} />
    </motion.button>
  );
}
