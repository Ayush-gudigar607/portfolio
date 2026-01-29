import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className=''>
  <div className="lines  flex flex-col md:mt-8 md:mb-10">
    <span className="h-[5px] w-[140px] rounded-full bg-[#2f3b4f] animate-line1" />
    <span className="h-[5px] w-[200px] rounded-full bg-[#2f3b4f] mt-2 ml-4 md:ml-6 animate-line2" />
  </div>

  <h1 className="text-3xl md:text-4xl font-bold ml-8 md:ml-20 mb-6 md:mb-0 animate-title">
    Who Am I?
  </h1>
  <div className='w-full min-h-[38vw] flex flex-col md:flex-row gap-3 md:gap-8 px-4 md:px-12 py-6 md:py-8'>
    {/* Left side - Image Grid */}
    <div className='w-full md:w-[40%] grid grid-cols-2 gap-3 md:gap-4 auto-rows-fr'>
      {/* Top Left Image */}
      <div className='relative w-full h-[180px] md:h-[300px] grayscale hover:grayscale-0 transition-all duration-300 animate-img-1'>
        <Image
          src='/profile.png'
          alt='Profile 1'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      
      {/* Top Right Image */}
      <div className='relative w-full h-[180px] md:h-[300px] row-span-1 grayscale hover:grayscale-0 transition-all duration-300 mt-8 md:mt-12 animate-img-2'>
        <Image
          src='/profile.png'
          alt='Profile 2'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      
      {/* Bottom Image - spans across */}
      <div className='relative w-full h-[150px] md:h-[250px] col-span-2 grayscale hover:grayscale-0 transition-all duration-300 -mt-6 md:-mt-8 animate-img-3'>
        <Image
          src='/profile.png'
          alt='Profile 3'
          fill
          className='object-cover rounded-lg'
        />
      </div>
    </div>
    
    {/* Right side - Text Content */}
    <div className='w-full md:w-[60%] h-full p-3 md:p-22 space-y-4 md:space-y-6 text-[#2b2b2b] overflow-y-auto'>
        <h1 className='text-3xl md:text-4xl font-bold pl-3 md:pl-6 animate-text-1'>Ayush</h1>
        <p className='text-gray-600 text-justify title text-base md:text-2xl ml-3 md:ml-5 space-y-2 md:space-y-3 animate-text-2'>
          <span className='leading-[1.6] md:leading-[1.9] text-gray-700'>Hey there, I'm <strong className='text-black'>Ayush</strong>, a passionate Web Developer with a growing expertise in Artificial Intelligence.</span>
          <span className='leading-[1.6] md:leading-[1.9] text-gray-700'>Hailing from <strong className='text-black'>Mangalore ,  Karnataka</strong> , I'm currently pursuing my B.E. in Computer Engineering at Srinivas Institute of Technology, Valachil, Mangalore.</span>
          <span className='leading-[1.6] md:leading-[1.9] text-gray-700'>I specialize in building <strong className='text-black'>full-stack web applications</strong>   using modern frameworks and tools, focusing on creating scalable, high-performance, and user-friendly systems.</span>
          <span className='leading-[1.6] md:leading-[1.9] text-gray-700'>My work bridges modern web technologies and intelligent systems from developing robust backend architectures and responsive frontends to exploring Generative AI tools, LLMs, and AI-powered applications.</span>
          <span className='leading-[1.6] md:leading-[1.9] text-gray-700'>Beyond development, I stay curious about design, system architecture, and emerging technologies.</span>
        </p>
    </div>
  </div>
</div>

  )
}

export default Intro