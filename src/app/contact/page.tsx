import { Contact, Sidebar } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Home/navbar'
import Hero from '../components/Home/Hero'
import Contact from '../components/contact/Contact'

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navbar />
            <Contact/>
            
          </main>
        </div>
  )
}

export default Page