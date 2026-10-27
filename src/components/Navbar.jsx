import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          AMIT <span>SHARMA</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
