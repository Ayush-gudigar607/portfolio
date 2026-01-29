"use client";
import { Home, User, Folder, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Sidebar() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const menuItems = [
    { Icon: Home, label: "Home", hash: "#home" },
    { Icon: User, label: "About", hash: "#about" },
    { Icon: Folder, label: "Projects", hash: "#projects" },
    { Icon: Mail, label: "Contact", hash: "#contact" },
  ];

  const handleNavigation = (hash: string) => {
    // Update hash in URL
    window.location.hash = hash;
    
    // Smooth scroll to section
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 
                    w-[80px] h-[550px] bg-[#2f3b4f] 
                    rounded-r-[40px] flex-col items-center justify-center 
                    shadow-2xl z-50">
      <div className="flex flex-col space-y-10">
        {menuItems.map((item, index) => {
          const isActive = activeHash === item.hash;
          return (
            <div
              key={index}
              onClick={() => handleNavigation(item.hash)}
              className="group relative flex items-center justify-center w-full cursor-pointer"
            >
              {isActive && (
                <div className="absolute left-0 w-[5px] h-8 bg-white rounded-r-full" />
              )}
              
              <item.Icon
                size={40}
                strokeWidth={2.5}
                className={`${isActive ? 'text-white' : 'text-gray-400'}
                  transition-all duration-300
                  group-hover:text-white`}
              />

              <div className={`absolute bottom-0 w-full h-[2px] bg-white transition-transform ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
              
              <span className="absolute left-20 scale-0 group-hover:scale-100 transition-all 
                             bg-[#2f3b4f] text-white text-xs px-3 py-2 rounded-lg shadow-xl font-medium">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}