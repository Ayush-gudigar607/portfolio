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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 120,      
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,        
    scale: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 120,   
        damping: 18,      
        mass: 0.9,        
      },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
};



export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      id="home"
      ref={ref}
      style={{ opacity, scale, y }} 
      variants={containerVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col md:grid md:grid-cols-[1fr_520px] px-2 md:px-24 bg-[#ededed] gap-y-10 mt-25 md:gap-x-32"
    >
      {/* TEXT */}
      <motion.div
        variants={containerVariants}
        className="order-2 md:order-1 w-full md:max-w-8xl space-y-4 md:space-y-6 flex flex-col items-center mt-0 md:mt-22 md:items-start text-center md:text-left"
      >
        <motion.h1
          variants={itemVariants}
          className="text-gray-500 text-sm tracking-[0.4em] md:text-[40px] md:ml-7"
        >
          AYUSH
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-[10rem] leading-tight md:leading-[1.05] font-extrabold text-black mb-2 lg:px-5"
          style={{ fontFamily: "Poppins, Arial, sans-serif" }}
        >
          Full Stack{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          Developer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[#8b929e] text-sm sm:text-base md:text-[30px] leading-relaxed max-w-[90%] sm:max-w-[600px] md:max-w-[1200px] tracking-wide md:mt-10 lg:px-6"
        >
          Hi! I’m Ayush, a junior full-stack developer specializing in modern
          web development with a growing focus on artificial intelligence. I’m
          passionate about building scalable, user-friendly applications and
          exploring AI technologies like generative models and LLM integrations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3 sm:gap-6 justify-center md:justify-start w-full sm:w-auto md:ml-7 pt-3"
        >
          <button className="bg-[#2f3b4f] text-white w-35 md:w-45 px-3 py-2 md:px-8 md:py-4 md:text-base text-[15px] rounded-full md:rounded-xl shadow-md hover:bg-[#1e2533] transition">
            Download CV
          </button>

          <button className="border-2 border-[#2f3b4f] w-35 md:w-45 text-[#2f3b4f] text-[15px] px-3 py-2 md:px-8 md:py-4 md:text-base rounded-full md:rounded-xl bg-white hover:bg-[#f5f5f5] transition">
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        variants={imageVariants}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="order-1 md:order-2 flex justify-center items-center w-full md:w-auto mt-0 sm:mt-15"
      >
        <div className="group relative overflow-hidden border-4 border-[#ededed] shadow-lg w-36 h-36 sm:w-48 sm:h-48 rounded-none rounded-t-full rounded-b-full md:rounded-none md:rounded-t-[50%] md:rounded-b-[50%] md:w-[500px] md:h-[500px] lg:w-[1000px] lg:h-[800px] bg-white">
          <Image
            src="/Ayush.png"
            alt="Profile"
            fill
            sizes="(max-width: 640px) 10rem, (max-width: 1024px) 20rem, 32rem"
            className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
