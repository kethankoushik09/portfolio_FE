import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
 import robotHi from "../assets/robotHi.json"; 
const Home = () => {
  const fullName = "Kethan Gaikwad";
  const tagline = "Full Stack Developer";

  const [nameIndex, setNameIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTagline, setDisplayedTagline] = useState("");

  // Typing animation for name
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  // Typing animation for tagline (only once)
  useEffect(() => {
    let i = 0;
    const typeTagline = () => {
      if (i <= tagline.length) {
        setDisplayedTagline(tagline.slice(0, i));
        i++;
        setTimeout(typeTagline, 120);
      }
    };
    typeTagline();
  }, []);

  return (
    <section id="home" className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 lg:px-48 bg-blue-100">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-center space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hi, I'm
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {displayedName}
        </h2>
        <h3 className="text-xl md:text-2xl text-blue-700 font-semibold">
          {displayedTagline}
        </h3>

        <p className="text-gray-700 text-base md:text-lg max-w-md mt-4">
          Passionate about crafting modern, functional, and visually appealing
          web applications. I specialize in React, Node.js, Express, and modern
          JavaScript, aiming to turn creative ideas into seamless digital
          experiences.
        </p>

        <div className="flex space-x-4 mt-6">
          <a
            href="#contact"
            className="animated-btn px-6 py-3 font-semibold rounded"
          >
            Contact Me
          </a>
          {/* Download Resume Button */}
          
          <a
            href="/kethanResume.pdf"
            download="Kethan_Gaikwad_Resume.pdf"
            className="animated-btn px-6 py-3 font-semibold rounded flex items-center gap-2"
          >
            
            Download Resume
            <FaDownload size={18} />
          </a>
        </div>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/kethan-gaikwad-a55b76259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/kethankoushik09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/kethan_gaikwad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>

      {/* Right Section */}
     
<div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <div>
          <Lottie animationData={robotHi} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
