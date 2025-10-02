import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope,FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-blue-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
       

        {/* Center - Copyright */}
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} Kethan Gaikwad. All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 text-lg md:text-xl">
          <a
            href="mailto:sindhu@example.com"
            className="hover:text-pink-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/kethankoushik09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kethan-gaikwad-a55b76259/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a

            href="https://www.instagram.com/kethan_gaikwad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> 
          </a>
        </div>
      </div>
    </footer>
  );
}
