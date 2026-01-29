"use client";

import { Mail, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import React from "react";
import "../../app/globals.css";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-start mt-10">
      {/* Email */}
      <a
        href="mailto:alvalen.shafel04@gmail.com"
        className="social-btn"
        aria-label="Email"
      >
        <Mail size={30} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/"
        target="_blank"
        className="social-btn"
        aria-label="GitHub"
      >
        <Github size={30} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        className="social-btn"
        aria-label="LinkedIn"
      >
        <Linkedin size={30} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        className="social-btn"
        aria-label="Instagram"
      >
        <Instagram size={30} />
      </a>

      {/* Discord / Chat */}
      <a
        href="#"
        className="social-btn"
        aria-label="Discord"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
