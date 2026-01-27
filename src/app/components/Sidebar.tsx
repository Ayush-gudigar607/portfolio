import { Home, User, Folder, Mail } from "lucide-react"
import React from "react"

export default function Sidebar() {
  const menuItems = [
    { Icon: Home, label: "Home" },
    { Icon: User, label: "About" },
    { Icon: Folder, label: "Projects" },
    { Icon: Mail, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar - Left Flush Capsule */}
      <nav className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 
                    w-[80px] h-[550px] bg-[#2f3b4f] 
                    rounded-r-[40px] flex-col items-center justify-center 
                    shadow-2xl z-50">
        <div className="flex flex-col space-y-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center w-full cursor-pointer"
            >
              {/* Active Indicator Bar - Matches Screenshot */}
              {index === 0 && (
                <div className="absolute left-0 w-[5px] h-8 bg-white rounded-r-full" />
              )}
              
              <item.Icon
                size={40}
                strokeWidth={2.5}
                className={`${index === 0 ? 'text-white' : 'text-gray-400'}
                  transition-all duration-300
                  group-hover:text-white`}
              />

                <div className="absolute bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform" />
              <span className="absolute left-20 scale-0 group-hover:scale-100 transition-all 
                             bg-[#2f3b4f] text-white text-xs px-3 py-2 rounded-lg shadow-xl font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </nav>

      
    </>
  )
}