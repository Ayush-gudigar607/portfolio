'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 }
}

const Intro = () => {
  return (
    <div className="">
      
      {/* Lines */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lines flex flex-col md:mt-8 md:mb-10"
      >
        <span className="h-[5px] w-[140px] rounded-full bg-[#2f3b4f]" />
        <span className="h-[5px] w-[200px] rounded-full bg-[#2f3b4f] mt-2 ml-4 md:ml-6" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold ml-8 md:ml-20 mb-6 md:mb-0"
      >
        Who Am I?
      </motion.h1>

      <div className="w-full min-h-[38vw] flex flex-col md:flex-row gap-3 md:gap-8 px-4 md:px-12 py-6 md:py-8">

        {/* Image Grid */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-[40%] grid grid-cols-2 gap-3 md:gap-4 auto-rows-fr"
        >
          <motion.div variants={fadeUp} transition={{ delay: 0.2 }} className="relative w-full h-[180px] md:h-[300px] grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/me.png" alt="Profile 1" fill className="object-cover rounded-lg" />
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.4 }} className="relative w-full h-[180px] md:h-[300px] row-span-1 grayscale hover:grayscale-0 transition-all duration-300 mt-8 md:mt-12">
            <Image src="/me.png" alt="Profile 2" fill className="object-cover rounded-lg" />
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.6 }} className="relative w-full h-[150px] md:h-[250px] col-span-2 grayscale hover:grayscale-0 transition-all duration-300 -mt-6 md:-mt-8">
            <Image src="/me.png" alt="Profile 3" fill className="object-cover rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-[60%] h-full p-3 md:p-22 space-y-4 md:space-y-6 text-[#2b2b2b] overflow-y-auto"
        >
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold pl-3 md:pl-6">
            Ayush
          </motion.h1>

          <motion.p variants={fadeUp} transition={{ delay: 0.3 }} className="text-gray-600 text-justify title text-base md:text-2xl ml-3 md:ml-5 space-y-2 md:space-y-3">
            <span className="leading-[1.6] md:leading-[1.9] text-gray-700">
              Hey there, I'm <strong className="text-black">Ayush</strong>, a passionate Web Developer with a growing expertise in Artificial Intelligence.
            </span>
            <span className="leading-[1.6] md:leading-[1.9] text-gray-700">
              Hailing from <strong className="text-black">Mangalore , Karnataka</strong>, I'm currently pursuing my B.E. in Computer Engineering at Srinivas Institute of Technology, Valachil, Mangalore.
            </span>
            <span className="leading-[1.6] md:leading-[1.9] text-gray-700">
              I specialize in building <strong className="text-black">full-stack web applications</strong> using modern frameworks and tools.
            </span>
            <span className="leading-[1.6] md:leading-[1.9] text-gray-700">
              My work bridges modern web technologies and intelligent systems, including Generative AI and LLM-based solutions.
            </span>
            <span className="leading-[1.6] md:leading-[1.9] text-gray-700">
              Beyond development, I stay curious about design, system architecture, and emerging technologies.
            </span>
          </motion.p>
        </motion.div>

      </div>
    </div>
  )
}

export default Intro
