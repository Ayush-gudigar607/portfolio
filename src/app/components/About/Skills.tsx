import React from 'react'
import Application from '../skills/Application'

const Skills = () => {
  return (
       <div className='flex flex-col items-center justify-center text-center w-full py-12 md:py-20 px-4 md:px-8 space-y-4 md:space-y-6 bg-gray-100 mt-20 md:mt-10'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Skills & Expertise</h1>
            <p className='text-base md:text-2xl lg:text-4xl text-gray-500 w-full md:w-[80%] lg:w-[60%] leading-relaxed'>Explore my technical skills across different domains. Click on any category to see the specific technologies and tools I work with.</p>
            <Application/>
    </div>
  )
  
}

export default Skills