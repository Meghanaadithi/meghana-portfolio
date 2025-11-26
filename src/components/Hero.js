import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { hero } from "../data";   // <-- FIXED (use hero, not about)
import meghana from "../assets/meghana.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-left">

        <p className="hero-hey">Hey!!</p>

        <h1 className="hero-name">{hero.name}</h1>

        <p className="hero-tagline">
          Building applications rooted in algorithmic thinking.
        </p>

        {/* ICONS + RESUME BUTTON */}
        <div className="hero-links">
          
          {/* Email */}
          <a href={`mailto:${hero.email}`} className="icon-btn">
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a href={hero.linkedin} className="icon-btn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a href={hero.github} className="icon-btn" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          {/* Resume Button */}
          <a href={hero.resumeLink} target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume
          </a>

        </div>
      </div>

      {/* PHOTO */}
      <div className="hero-photo-wrapper">
        <img src={meghana} alt="Meghana" className="hero-photo" />
      </div>

    </section>
  );
};

export default Hero;
