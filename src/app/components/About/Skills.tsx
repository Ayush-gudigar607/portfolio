'use client';
import React from 'react'
import Application from '../skills/Application'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center text-center w-full py-20 md:py-32 px-4 md:px-8 bg-gray-100'>
      {/* Heading - Fade from bottom */}
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='text-4xl md:text-6xl lg:text-8xl font-bold mb-6'
      >
        Skills & Expertise
      </motion.h1>
      
      {/* Subtitle - Fade upward with delay */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className='text-base md:text-2xl lg:text-4xl text-gray-500 w-full md:w-[80%] lg:w-[60%] leading-relaxed mb-12'
      >
        Explore my technical skills across different domains. Click on any category to see the specific technologies and tools I work with.
      </motion.p>
      
      {/* Application Component - Will handle card animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='w-full'
      >
        <Application/>
      </motion.div>
    </section>
  )
}

export default Skills