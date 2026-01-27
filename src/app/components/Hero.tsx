import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-[1fr_520px] px-2 md:px-24 bg-[#ededed] gap-y-10 md:gap-x-32">

      {/* TEXT */}
      <div className="order-2 md:order-1 w-full md:max-w-6xl space-y-4 md:space-y-6 flex flex-col items-center mt-0 md:mt-22 md:items-start text-center md:text-left">

        {/* Name */}
        <h1 className="text-gray-500 text-sm tracking-[0.4em] md:text-[40px] md:ml-7">
          AYUSH
        </h1>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-[10rem] leading-tight md:leading-[1.05] font-extrabold text-black mb-2 lg:px-5"
          style={{ fontFamily: 'Poppins, Arial, sans-serif' }}
        >
          Full Stack <br className="hidden md:block" /> Developer
        </h1>

        {/* Description */}
        <p className="text-[#8b929e] text-sm sm:text-base md:text-[30px] leading-relaxed max-w-[90%] sm:max-w-[600px] md:max-w-[1200px] tracking-wide md:mt-10 lg:px-6">
          Hi! I’m Ayush, a junior full-stack developer specializing in modern web development
          with a growing focus on artificial intelligence. I’m passionate about building scalable,
          user-friendly applications and exploring AI technologies like generative models and LLM integrations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start w-full sm:w-auto md:ml-7 pt-3">
          <button className="bg-[#2f3b4f] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-md hover:bg-[#1e2533] transition">
            Download CV
          </button>
          <button className="border-2 border-[#2f3b4f] text-[#2f3b4f] px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white hover:bg-[#f5f5f5] transition">
            Contact Me
          </button>
        </div>

      </div>

      {/* IMAGE */}
      <div className="order-1 md:order-2 flex justify-center items-center w-full md:w-auto mt-0  sm:mt-15">
        <div className="relative overflow-hidden border-4 border-[#ededed] shadow-lg w-36 h-36 sm:w-48 sm:h-48 rounded-full md:rounded-[45%] md:w-[600px] md:h-[500px] lg:w-[500px] lg:h-[700px] bg-white">
          <Image
            src="/Ayush.png"
            alt="Profile"
            fill
            sizes="(max-width: 640px) 10rem, (max-width: 1024px) 20rem, 32rem"
            className="object-cover grayscale"
          />
        </div>
      </div>

    </section>
  );
}
