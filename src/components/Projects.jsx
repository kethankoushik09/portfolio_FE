import React from "react";
import { FaGithub } from "react-icons/fa";
import ipodImg from "../assets/ipodImg.jpg"; 
import foodRecipeImg from "../assets/foodRecipeImg.png";
import ksWellnessImg from "../assets/KsWellnessImg.png";
import devTinderImg from "../assets/devTinderImg.png";

// Projects data
const projects = [
  {
    title: "iPod",
    description:
      "Interactive iPod application using React with gesture-based navigation and music playback controls.",
    image: ipodImg,
    technologies: ["React", "CSS", "ZingTouch"],
    features: ["Music Library", "Play/Pause", "Volume Control", "Gestures"],
    githubUrl: "https://github.com/kethankoushik09/Ipod",
    liveUrl: "https://kethankoushik09.github.io/Ipod/",
    category: "Frontend",
  },
  {
    title: "Food Recipe",
    description:
      "Recipe tracking app with search, favorites, and detailed recipe views.",
    image: foodRecipeImg,
    technologies: ["React", "CSS", "Routing", "Redux"],
    features: ["Recipe Search", "Favorites", "Details View", "Router Nav"],
    githubUrl: "https://github.com/kethankoushik09/Food-recipe",
    liveUrl: "https://kethankoushik09.github.io/Food-recipe/",
    category: "Frontend",
  },
  {
    title: "KS Wellness",
    description:
      "Full-stack medical platform for booking doctor appointments with JWT authentication.",
    image: ksWellnessImg,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Cloudinary"],
    features: ["Booking", "JWT Auth", "Dashboards", "Cloudinary"],
    githubUrl: "https://github.com/kethankoushik09/Health-bridge",
    liveUrl: "https://wellness-rust-gamma.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "Dev Tinder",
    description:
      "Social matching app like Tinder with real-time chat and responsive UI.",
    image: devTinderImg,
    technologies: ["React", "Express", "Tailwind CSS", "DaisyUI"],
    features: ["Profile Creation", "Feed", "Chat", "Responsive UI"],
    githubUrl: "https://github.com/kethankoushik09/DevTinder_web",
    liveUrl: "https://dev-tinder-web-kk.vercel.app/",
    category: "Full Stack",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Things I’ve Built, Line by Line
        </h2>
        <p className="text-gray-600 mt-2">
          A showcase of my works blending frontend and full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden transform hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-3 mt-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md hover:bg-gray-900 transition"
                >
                  <FaGithub className="inline mr-1" /> Code
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
