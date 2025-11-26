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
    <nav className="nav">
      <div className="nav-logo">MB</div>
      <ul className="nav-links">
        {items.map((item) => (
          <li key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
