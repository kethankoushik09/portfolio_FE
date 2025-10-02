import React from "react";
import Lottie from "lottie-react";
import quizAnimation from "../assets/QuizMode.json"; // 👈 place Quiz mode.json in assets folder

const educationData = [
  {
    title: "Schooling (SSC)",
    institution: "Town Model School",
    year: "2019",
  },
  {
    title: "Intermediate",
    institution: "Sri Chaitanya Junior College",
    year: "2019 - 2021",
  },
  {
    title: "Bachelor's Degree (B.Tech)",
    institution: "G Pullaiah College of Engineering and Technology",
    year: "2021 - 2025",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-blue-100 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 lg:px-48 py-16"
    >
      {/* Left Section - Education Blocks */}
      <div className="flex-1 flex flex-col space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Education
        </h2>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-900">{edu.title}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <span className="text-sm text-gray-600">{edu.year}</span>
          </div>
        ))}
      </div>

      {/* Right Section - Animation */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <Lottie
          animationData={quizAnimation}
          loop={true}
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
};

export default Education;
