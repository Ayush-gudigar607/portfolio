import React from 'react'
import Project from '../components/project/Project'
import Navbar from '../components/Home/navbar'
import Sidebar from '../components/Home/Sidebar'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
            <Project/>
          </main>
        </div>
  )
}

export default page