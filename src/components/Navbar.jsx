import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 text-white">
      <div className="px-6 md:px-10 lg:px-24 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-blue-400 cursor-pointer">
          TILAK
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:text-blue-400 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-black/90 backdrop-blur-lg">
          {navLinks.map((link) => (
            <li key={link.path} className="w-full text-center">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-4 hover:bg-blue-500/20 hover:text-blue-400 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;