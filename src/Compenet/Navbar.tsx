// src/components/Navbar.js

import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Codepulse
        </div>
        <div className="space-x-4">
          <Link to="" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="About" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="Services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link to="Contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
