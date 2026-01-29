"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.58, 1.0] as const },
  },
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className=" imagediv w-full min-h-screen flex flex-col md:flex-row px-6 md:px-24"
    >
      {/* IMAGE */}
      <motion.div
        variants={itemVariants}
        className="order-1 md:order-2 w-full md:w-[40%] flex justify-center items-center px-2 md:px-0 md:ml-12 md:p-20 mt-10 md:mt-0"
      >
        <div className="relative w-[280px] h-[360px] md:w-[800px] md:h-[800px] group">
          <Image
            src="/projects.avif"
            alt="Profile"
            fill
            sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 32rem"
            className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
          />
        </div>
      </motion.div>

      {/* TEXT */}
      <div className="about order-2 md:order-1 w-full md:w-[60%] flex flex-col justify-center ml-12 md:ml-12 p-20 md:mt-0">
        
        <motion.h1
          variants={itemVariants}
          className="abouttext text-[48px] md:text-[120px] lg:text-[170px] font-semibold text-black leading-none"
        >
          My Projects 
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="lines  mt-3 md:mt-9 flex flex-col"
        >
          <span className="h-[3px] w-[80px] md:w-[120px] rounded-full bg-[#2f3b4f]" />
          <span className="h-[4px] w-[140px] md:w-[200px] rounded-full bg-[#2f3b4f] mt-2 ml-4 md:ml-6" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-5  md:mt-10 text-gray-500 max-w-md text-base md:text-nowrap md:text-4xl"
        >
         Featured projects I’ve built and am building.
        </motion.p>

        <Link href="/project">
          <motion.button
            variants={itemVariants}
            className="learnmore mt-8 w-fit px-6 py-5 rounded-full bg-[#2f3b4f] text-2xl text-white hover:bg-[#3f4b5f] transition-colors"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Project;
