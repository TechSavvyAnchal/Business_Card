"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full p-8 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 text-center space-y-3 backdrop-blur-3xl"
      >
        <CheckCircle2 className="mx-auto text-indigo-400" size={40} />
        <h3 className="text-lg font-black text-white uppercase tracking-widest">Message Dispatched</h3>
        <p className="text-sm text-zinc-400">Our team will establish a connection shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-xs font-black text-indigo-400 underline decoration-2 underline-offset-8 uppercase tracking-widest"
        >
          Send another transmission
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-4 px-1">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
          Direct Transmission
        </h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
          <input
            required
            type="text"
            placeholder="Identity / Name"
            className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 focus:border-indigo-500/50 outline-none transition-all text-sm font-medium text-white placeholder:text-zinc-600"
          />
          <input
            required
            type="email"
            placeholder="Communication Endpoint / Email"
            className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 focus:border-indigo-500/50 outline-none transition-all text-sm font-medium text-white placeholder:text-zinc-600"
          />
        </div>
        <textarea
          required
          placeholder="Detailed Briefing / Message"
          rows={4}
          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 focus:border-indigo-500/50 outline-none transition-all text-sm font-medium text-white placeholder:text-zinc-600 resize-none"
        />
        <button
          disabled={status === "loading"}
          className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl shadow-indigo-500/20 group active:scale-[0.98]"
        >
          {status === "loading" ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send size={16} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Initialize Transmission
            </>
          )}
        </button>
      </form>
    </div>
  );
}
