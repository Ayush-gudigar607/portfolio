import { Sidebar } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Home/navbar'
import About from '../components/About/About'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
            <About/>
          </main>
        </div>
  )
}

export default page