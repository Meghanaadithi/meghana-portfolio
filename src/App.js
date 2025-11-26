import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
