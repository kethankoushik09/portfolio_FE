import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll"; // <-- import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 text-gray-800 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        {/* Left: Profile */}
        <div className="flex items-center">
         
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="font-bold text-lg cursor-pointer"
          >
           Kethan Gaikwad
          </Link>
        </div>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-400 transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 px-6 py-4 space-y-4">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
