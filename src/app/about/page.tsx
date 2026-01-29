"use client";
import { Sidebar } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Home/navbar'
import Aboutpage from '../components/About/Aboutpage'
import Intro from '../components/About/Intro'
import Skills from '../components/About/Skills'
import Edu from '../components/Edu'
import Quote from '../components/quote/Quote'
import GetInTouch from '../components/contact/Aboutcontact'




const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
        
          <main className="flex-1 flex flex-col">
            <Navbar />
            <Aboutpage/>
            <Intro/>
            <Skills/>
            <Edu/>
            <Quote/>
            <GetInTouch/>
           
          </main>
        </div>
  )
}

export default page