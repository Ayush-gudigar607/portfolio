"use client";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="w-full min-h-screen bg-[#ededed] flex flex-col justify-between">
      
      {/* Center CTA */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <p className="text-gray-400 tracking-[0.35em] uppercase mb-6">
          Want something like this?
        </p>
        <a
          href="/contact"
          className="group flex items-center gap-2 md:gap-4 text-[44px] md:text-[96px] font-extrabold text-black hover:opacity-80 transition"
        >
          Get In Touch
          <span className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center border-2 md:border-4 border-black rounded-full group-hover:translate-x-2 transition flex-shrink-0">
            <ArrowRight className="w-5 h-5 md:w-9 md:h-9" />
          </span>
        </a>
      </div>

      {/* Footer */}
      <div className="w-full px-10 pb-6">
        <div className="w-full h-[1px] bg-black mb-6" />
        <p className="text-center text-gray-600 text-sm">
          ©2026 – Ayush
        </p>
      </div>
    </section>
  );
}
