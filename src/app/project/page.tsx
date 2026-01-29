import React from 'react'
import Projectpage from '../components/project/Projectpage'
import Navbar from '../components/Home/navbar'
import Sidebar from '../components/Home/Sidebar'
import Plist from './Plist'
import Quote from '../components/quote/Quote'
import GetInTouch from '../components/contact/Aboutcontact'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
         
          <main className="flex-1 flex flex-col">
            <Navbar />
            <Projectpage/>
            <Plist/>
            <Quote/>
            <GetInTouch/>
            
          </main>
        </div>
  )
}

export default page