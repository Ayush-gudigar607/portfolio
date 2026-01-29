// Navbar.tsx
"use client"
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuUI from '../Menu/Menu';
import Stairs from '../common/Stairs';

export default function Navbar(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav
      className="
        fixed  top-0 z-50
        flex justify-between items-center 
        px-4 sm:px-8 md:px-14 py-6  md:py-8 w-full
          bg-[#ededed]  bg-transparent  backdrop-blur-md shadow-sm
      "
    >
      <h2 className="font-semibold text-xl sm:text-2xl tracking-wide text-black">
        AYUSH
      </h2>

     <button onClick={toggleMenu} className="w-10 h-10 z-[60] relative flex flex-col items-center justify-center" aria-label="Toggle Menu">
  <div className={`w-9 h-[4px] bg-neutral-900 rounded transition-all duration-300 absolute ${
    isMenuOpen ? 'rotate-45' : 'translate-y-[-8px]'
  }`}></div>
  <div className={`w-9 h-[4px] bg-neutral-900 rounded transition-all duration-300 ${
    isMenuOpen ? 'opacity-0' : 'opacity-100'
  }`}></div>
  <div className={`w-9 h-[4px] bg-neutral-900 rounded transition-all duration-300 absolute ${
    isMenuOpen ? '-rotate-45' : 'translate-y-[8px]'
  }`}></div>
</button>
    </nav>

    {/* Menu Overlay with stairs animation */}
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <div key="menu" className="fixed inset-0 z-40">
          <Stairs trigger={isMenuOpen}>
            <MenuUI onClose={() => setIsMenuOpen(false)} />
          </Stairs>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}
