import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/95 backdrop-blur-md
        border-b border-gray-200
        px-[6%] py-4
        flex justify-between items-center
      "
    >
      {/* LOGO */}
      <div className="text-[20px] font-bold text-black">MB</div>

      {/* NAV LINKS */}
      <ul className="flex gap-6 text-gray-600">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="
              cursor-pointer text-[15px] transition
              hover:text-black
            "
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
