import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        w-full bg-black text-white
        px-8 py-4
        flex flex-col md:flex-row
        items-center justify-between
        gap-4 md:gap-0
      "
    >
      {/* LEFT SECTION */}
      <div className="text-[14px] opacity-90">
        © 2025 <span className="font-semibold">Meghana Adithi Bongu</span>
      </div>

      {/* ICONS SECTION */}
      <div className="flex gap-6 text-[20px]">
        <a
          href="mailto:meghanaadithio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-85 hover:opacity-100 transition"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/meghanaadithi"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-85 hover:opacity-100 transition"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/meghanaadithi"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-85 hover:opacity-100 transition"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      {/* RESUME BUTTON */}
      <a
        href="https://drive.google.com/file/d/1Bf_hM-vvkNyPRIUlIdh15OgVgc-WpSK4/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white text-black px-5 py-1.5 rounded-full
          text-[14px] font-semibold
          hover:bg-gray-200 transition
        "
      >
        Resume
      </a>
    </footer>
  );
};

export default Footer;
