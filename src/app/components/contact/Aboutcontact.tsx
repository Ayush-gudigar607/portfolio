"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="w-full min-h-screen bg-[#ededed] flex flex-col justify-between">
      
      {/* Center CTA - Rise from bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center flex-1 text-center px-6"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 tracking-[0.35em] uppercase mb-6"
        >
          Want something like this?
        </motion.p>
        
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            ease: "easeOut", 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="group flex items-center gap-2 md:gap-4 text-[44px] md:text-[96px] font-extrabold text-black hover:opacity-80 transition"
        >
          Get In Touch
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center border-2 md:border-4 border-black rounded-full group-hover:translate-x-2 transition flex-shrink-0"
          >
            <ArrowRight className="w-5 h-5 md:w-9 md:h-9" />
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full px-10 pb-6"
      >
        <div className="w-full h-[1px] bg-black mb-6" />
        <p className="text-center text-gray-600 text-sm">
          ©2026 – Ayush
        </p>
      </motion.div>
    </section>
  );
}
