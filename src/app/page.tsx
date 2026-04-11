"use client";

import { motion } from "framer-motion";
import ProfileHeader from "@/components/ProfileHeader";
import ActionBar from "@/components/ActionBar";
import SaveContactButton from "@/components/SaveContactButton";
import LinkButton from "@/components/LinkButton";
import ContactInfo from "@/components/ContactInfo";
import ShareButton from "@/components/ShareButton";
import RatingSection from "@/components/RatingSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import PortfolioSlider from "@/components/PortfolioSlider";
import { GeometricPattern } from "@/components/GeometricPattern";
import { userData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 260, 
      damping: 20 
    }
  }
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden flex flex-col items-center justify-start py-8 lg:py-16 font-sans selection:bg-indigo-500/30 px-4">
      {/* Precision Geometric Background Stage */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Aura Glows */}
        <motion.div
          initial={false}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          initial={false}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"
        />

        <motion.div 
          initial={false}
          animate={{ 
            x: [-10, 10, -10],
            y: [-10, 10, -10],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-50"
        >
          <GeometricPattern />
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#71717a_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-50" />
      </div>

      <ShareButton />

      {/* Balanced Card Architecture */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl flex flex-col gap-12 lg:gap-20"
      >
        
        {/* Identity Block */}
        <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
          <ProfileHeader />
          <motion.div 
            className="w-full max-w-2xl mt-8 space-y-6"
            variants={itemVariants}
          >
            <ActionBar />
            <SaveContactButton />
          </motion.div>
        </motion.div>
        
        {/* Services & Portfolio Block */}
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-16 lg:gap-24">
          
          <motion.div variants={itemVariants}>
            <ServiceHighlights />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PortfolioSlider />
          </motion.div>

          <div className="w-full py-16 border-y border-white/10 relative bg-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
            <RatingSection />
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 px-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
                Official Channels
              </h2>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {userData.socials.map((social, index) => (
                <motion.div key={social.name} variants={itemVariants}>
                  <LinkButton
                    name={social.name}
                    url={social.url}
                    icon={social.icon as any}
                    index={index}
                    color={social.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bulk Orders Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="w-full p-8 lg:p-12 rounded-[3rem] bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
          >
            {/* Animated Background Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl -z-10"
            />
            
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
              </div>
              <div className="space-y-3 text-center">
                <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-white uppercase font-[family-name:var(--font-outfit)]">
                  Bulk Orders Available
                </h2>
                <p className="text-zinc-400 font-medium text-sm lg:text-base leading-relaxed">
                  Looking for labels in large quantities? <br className="hidden lg:block"/>
                  We offer special discounts for bulk orders. Contact us for a custom quote today!
                </p>
              </div>
              <motion.a 
                href={`https://wa.me/${userData.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi YourLabelOne! I'm interested in placing a bulk order for custom water bottle labels. Can you share the pricing details?")}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
              >
                Inquire for Bulk Pricing
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Details Module */}
          <motion.div variants={itemVariants} className="p-2">
            <ContactInfo />
          </motion.div>

          {/* High-Impact Footer */}
          <motion.footer 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }
              }
            }}
            className="mt-8 mb-20 flex flex-col items-center gap-10 px-4 text-center"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 0.9, scale: 1 }
              }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="relative w-48 h-24 transition-all z-0"
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain contrast-[1.2] brightness-[1.2]" />
            </motion.div>

            {/* Premium Email Contact Block */}
            <motion.a 
              href={`mailto:${userData.email}`}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative flex items-center gap-4 p-4 lg:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA4335] to-[#c5221f] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Contact via Email
                </span>
                <span className="text-zinc-100 font-bold tracking-tight text-sm lg:text-base font-[family-name:var(--font-outfit)]">
                  {userData.email}
                </span>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 overflow-hidden pointer-events-none" />
            </motion.a>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6"
            >
              <h2 className="text-2xl lg:text-4xl font-black tracking-tighter text-zinc-100 leading-tight">
                Get Your Custom Label Water Bottle Now
              </h2>
              <p 
                className="text-[10px] lg:text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed"
                suppressHydrationWarning
              >
                © {new Date().getFullYear()} Precision Labeling Solutions
              </p>
            </motion.div>
          </motion.footer>
        </motion.div>
      </motion.main>
    </div>
  );
}
