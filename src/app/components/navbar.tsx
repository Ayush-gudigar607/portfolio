// Navbar.tsx
import React from 'react';

export default function Navbar(): React.ReactElement {
  return (
    <nav
      className="
        sticky top-0 z-50
        flex justify-between items-center 
        px-4 sm:px-8 md:px-14 py-6 md:py-8 w-full
          bg-[#ededed]  backdrop-blur-md shadow-sm
      "
    >
      <h2 className="font-semibold text-xl sm:text-2xl tracking-wide text-black">
        AYUSH
      </h2>

     <button className="space-y-1.5" aria-label="Toggle Menu">
  <div className="w-9 h-[4px] bg-neutral-900 rounded"></div>
  <div className="w-9 h-[4px] bg-neutral-900 rounded"></div>
  <div className="w-9 h-[4px] bg-neutral-900 rounded"></div>
</button>

    </nav>
  );
}
