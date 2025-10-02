import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <AboutSection />
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
