"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.58, 1.0] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 120, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 120, damping: 18, mass: 0.9 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <motion.section
      id="home"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={`
        min-h-screen grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]
        items-center bg-[#ededed]
        /* ↓‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑-
         * NEW HORIZONTAL padding (reduced gap)
         * ----------------------------------------------------------------- */
        px-4 md:px-12 lg:px-16 xl:px-20
        py-24 gap-y-14 md:gap-x-24 overflow-hidden
      `}
    >
      {/* TEXT */}
      <motion.div
        style={{ opacity, scale, y }}
        variants={containerVariants}
        className={`
          order-2 md:order-1 w-full min-w-0
          space-y-4 md:space-y-6
          flex flex-col items-center md:items-start
          text-center md:text-left
        `}
      >
        <motion.h1
          variants={itemVariants}
          className="text-gray-500 text-sm tracking-[0.4em] md:text-[40px] mt-5"
        >
          AYUSH
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-3xl md:text-[7rem] leading-tight md:leading-[1.05] font-extrabold text-black"
          style={{ fontFamily: "Poppins, Arial, sans-serif" }}
        >
          Full Stack<span className="hidden md:block">Developer</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[#8b929e] text-sm sm:text-sm md:text-[20px] leading-relaxed max-w-[90%] sm:max-w-[600px] md:max-w-[800px] tracking-wide"
        >
          Hi! I’m Ayush, a junior full‑stack developer specializing in modern web
          development with a growing focus on artificial intelligence. I’m
          passionate about building scalable, user‑friendly applications and
          exploring AI technologies like generative models and LLM integrations.
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-6">
          <button className="bg-[#2f3b4f] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full md:rounded-xl shadow-md hover:bg-[#1e2533] transition">
            Download CV
          </button>

          <a href="#contact">
            <button className="border-2 border-[#2f3b4f] text-[#2f3b4f] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full md:rounded-xl bg-white hover:bg-[#f5f5f5] transition">
              Contact Me
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="order-1 md:order-2 flex justify-center items-center w-ful"
      >
        <div
          className={`
            relative pimg overflow-hidden border-4 border-[#ededed] shadow-2xl
            w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]
            md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]
            xl:w-[520px] xl:h-[520px] rounded-full bg-white
          `}
        >
          <Image
            src="/profiles.png"
            alt="Profile"
            fill
            priority
            sizes="(max-width: 640px) 16rem, (max-width: 1024px) 24rem, 32rem"
            className="object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
