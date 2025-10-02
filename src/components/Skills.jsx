import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiLeetcode } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, color: "text-orange-600", title: "HTML" },
    { icon: FaCss3Alt, color: "text-blue-600", title: "CSS" },
    { icon: FaJs, color: "text-yellow-500", title: "JavaScript" },
    { icon: FaReact, color: "text-blue-400", title: "React" },
    { icon: FaNodeJs, color: "text-green-600", title: "Node.js" },
    { icon: SiExpress, color: "text-gray-800", title: "Express.js" },
    { icon: SiMongodb, color: "text-green-600", title: "MongoDB" },
    { icon: FaJava, color: "text-red-600", title: "Java" },
    { icon: SiLeetcode, color: "text-orange-500", title: "DSA" },
    { icon: TbSql, color: "text-blue-900", title: "SQL" },
  ];

  return (
    <section
      id="skills"
      className="bg-blue-100 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-48 py-12 md:py-16"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Heading + Tagline */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-wide font-serif">
            My Skills
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            A curated collection of tools and technologies I master to craft
            high-quality, modern, and scalable web applications.
          </p>
        </div>

        {/* Right Side: Skills Icons */}
        <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer transform transition-all hover:scale-110 hover:shadow-lg p-2 rounded-lg bg-white"
              >
                <Icon
                  className={`${skill.color} w-10 h-10 sm:w-12 sm:h-12`}
                  title={skill.title}
                />
                <span className="text-xs sm:text-sm mt-1 text-gray-700">
                  {skill.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
