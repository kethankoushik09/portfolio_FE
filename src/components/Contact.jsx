import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:5000/api/contact"
          : "https://portfolio-be-kj18.onrender.com/api/contact";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Thanks for reaching out! I got your message.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-blue-100 py-16 px-6 md:px-20 lg:px-48 min-h-screen flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Section - Contact Info */}
      <div className="flex-1 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 text-lg">
          Feel free to reach out via email or phone.{" "}
        </p>
        <p className="text-gray-700 text-lg mb-4">
          I am always open for interesting projects and collaborations.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-900" size={22} />
            <a
              href="mailto:kethankoushik09@gmail.com"
              className="text-black hover:text-blue-900 transition-colors"
            >
              kethankoushik09@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-900" size={22} />
            <a
              href="tel:7981586263"
              className="text-black hover:text-blue-900 transition-colors"
            >
              7981586263
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-9">
          <a
            href="https://www.linkedin.com/in/kethan-gaikwad-a55b76259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <FaLinkedin size={38} />
          </a>
          <a
            href="https://github.com/kethankoushik09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-900 transition-colors"
          >
            <FaGithub size={38} />
          </a>
          <a
            href="https://www.instagram.com/kethan_gaikwad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-black transition-colors"
          >
            <FaInstagram size={38} />
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex-1 w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 transition resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
