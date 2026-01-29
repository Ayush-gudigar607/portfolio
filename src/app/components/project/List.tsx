'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  year: number;
  category: 'web' | 'ai' | 'other';
}

const projects: Project[] = [
   {
    id: 1,
    title: 'DealDrop',
    description:
      'A modern deal discovery and tracking platform that helps users find, save, and monitor the best online deals with smooth UI animations and a real-time backend powered by Supabase.',
    image:"/dealdrop.jpg",
    tech: ['Next.js', 'Supabase', 'K72', 'React', 'Framer Motion'],
    github: '#',
    live: '#',
    year: 2025,
    category: 'web',
    
  },
  {
    id: 2,
    title: 'URL Shortener',
    description:
      'A high-performance URL shortening service with custom aliases, click tracking, analytics, and secure link management built using Node.js, Express, PostgreSQL, and Drizzle ORM.',
    image:
     '/url-shortner.jpg',  
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Drizzle', 'JavaScript'],
    github: '#',
    live: '#',
    year: 2025,
    category: 'web',
  },
  {
    id: 3,
    title: 'Income & Expense Tracker',
    description:
      'A full-stack financial management system that allows users to track income and expenses, view monthly analytics, and manage their personal finances through a powerful interactive dashboard.',
    image:
      '/exIn.png',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    github: '#',
    live: '#',
    year: 2025,
    category: 'other',
  },
  
  {
  id: 4,
  title: 'K72',
  description:
    'A modern deal discovery and tracking platform that helps users find, save, and monitor the best online deals with smooth UI animations, secure authentication using Kinde (K72), and a real-time backend powered by Supabase.',
  image:
    '/k72.jpg',
  tech: ['Next.js', 'Supabase', 'Kinde (K72)', 'React', 'Framer Motion'],
  github: '#',
  live: '#',
  year: 2025,
  category: 'web',
}

  
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full w-[100%]"
    >
      <div className="relative min-h-[400px] overflow-hidden rounded-lg bg-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
        {/* Year Badge */}
        <div className="absolute top-0 left-0 bg-gray-700 text-white px-4 py-2 text-sm font-semibold rounded-br-lg z-20">
          {project.year}
        </div>

        {/* Image on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Background Large Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10 group-hover:opacity-0 transition-opacity duration-300">
          <h2 className="text-[80px] md:text-[120px] font-bold text-gray-300/30 leading-none text-center px-4">
            {project.title.split(' ')[0]}
          </h2>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full justify-between pt-12 group-hover:text-white transition-colors duration-300">
          {/* Title and Description */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black group-hover:text-white transition-colors duration-300">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs md:text-sm bg-gray-600/90 text-white rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="w-full h-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-8xl lg:text-nowrap font-bold text-black mb-8">
            Other Note Worthy Projects
          </h2>
          
          {/* Decorative Lines */}
          <div className="lines mt-3 md:mt-6 flex flex-col mb-8">
            <span className="h-[3px] w-[80px] md:w-[120px] rounded-full bg-[#2f3b4f]" />
            <span className="h-[4px] w-[140px] md:w-[200px] rounded-full bg-[#2f3b4f] mt-2 ml-4 md:ml-6" />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
