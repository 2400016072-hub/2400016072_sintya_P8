import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex gap-4 p-4 bg-white shadow-md">
      <Link
        to="/"
        className={`hover:text-blue-500 ${
          location.pathname === "/" ? "font-bold text-blue-600" : ""
        }`}
      >
        Home
      </Link>

      <Link
        to="/projects"
        className={`hover:text-blue-500 ${
          location.pathname === "/projects" ? "font-bold text-blue-600" : ""
        }`}
      >
        Projects
      </Link>

      <Link
        to="/contact"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
