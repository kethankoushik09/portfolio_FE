import React from "react";
import KethanImage from "../assets/kethan.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-blue-100 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-48 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start gap-10 "
    >
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden animate-blob-amoeba">
          <img
            src={KethanImage}
            alt="Kethan Gaikwad"
          className="w-full h-full object-cover rounded-[90%_80%_70%_20%/60%_40%_70%_20%] border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Who Am I, Really? 
        </h2>
        <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
          👋 Hi! I'm <strong>Kethan Gaikwad</strong>, a B.Tech 2025 graduate and a passionate Full Stack Developer. I specialize in creating responsive, dynamic, and user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB.
        </p>
        <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
          Over the past few years, I have built several projects ranging from e-commerce platforms to interactive web apps, focusing on clean code, efficient performance. Each project has strengthened my problem-solving skills and my ability to turn ideas into practical, scalable solutions.
        </p>
        <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
          Beyond coding, I am a basketball player, which has taught me teamwork, dedication, and discipline—qualities I carry into my development work. I enjoy exploring new technologies, collaborating on exciting projects, and continuously learning to grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
