"use client";

import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { userData } from "@/lib/data";
import { downloadVCard } from "@/lib/vcf";

export default function SaveContactButton() {
  const handleSave = () => {
    downloadVCard({
      name: userData.name,
      title: userData.title,
      phone: userData.phone,
      email: userData.email,
      website: userData.website,
      location: userData.location,
    });
  };

  const transition = { type: "spring", stiffness: 400, damping: 25 } as const;

  return (
    <motion.button
      onClick={handleSave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02, 
        y: -3,
        backgroundColor: "#6366f1", // Indigo-500
        transition 
      }}
      whileTap={{ scale: 0.98, transition }}
      className="flex items-center justify-center gap-3 w-full max-w-xs py-5 px-8 rounded-3xl bg-indigo-600 text-white font-black shadow-2xl shadow-indigo-500/40 transition-all duration-300 group mx-auto uppercase tracking-widest text-sm"
    >
      <UserPlus size={22} strokeWidth={3} className="group-hover:animate-bounce" />
      Save Contact
    </motion.button>
  );
}
