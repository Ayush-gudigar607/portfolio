"use client"
import Navbar from "./components/Home/navbar"
import Sidebar from "./components/Home/Sidebar"
import About from "./components/About/About"
import Hero from "./components/Home/Hero"
import React from "react"
import { useActiveSection } from "./hooks/useActiveSection"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"
import MenuUI from "./components/Menu/Menu"

export default function Page() {
  useActiveSection();

  return (
    <div className=" flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <Hero  />
            <About />
            <Project />
            <Contact/>
            
          </div>
    </div>
  )
}