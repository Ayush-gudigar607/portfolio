import Navbar from "./components/navbar"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import React from "react"

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}
