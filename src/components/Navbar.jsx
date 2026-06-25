import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-10 lg:px-24 py-5 flex flex-col md:flex-row justify-between items-center gap-5 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 text-white">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-blue-400 cursor-pointer">
        TILAK
      </h2>

      <ul className="flex flex-wrap justify-center gap-5 md:gap-10 text-sm md:text-lg font-medium">
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
    </nav>
  );
}

export default Navbar;