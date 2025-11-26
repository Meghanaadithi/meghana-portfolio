import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bar">
      
      {/* Left Section */}
      <div className="footer-left">
        © 2025 <span className="footer-name">Meghana Adithi Bongu</span>
      </div>

      {/* Icons Section */}
      <div className="footer-icons">
        <a
          href="mailto:meghanaadithio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/meghanaadithi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/meghanaadithi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      {/* Resume Button */}
      <div className="footer-right">
        <a
          href="https://drive.google.com/file/d/1Bf_hM-vvkNyPRIUlIdh15OgVgc-WpSK4/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-resume-btn"
        >
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
