// src/components/Navbar.js

import {  NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center card">
        <div className="text-white text-2xl font-bold">
          Codepulse
        </div>
        <div className="space-x-4">
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          <NavLink to="/About" className="text-white">
            About
          </NavLink>
          <NavLink to="/Services" className="text-white">
            Services
          </NavLink>
          <NavLink to="/Contact" className="text-white">
            Contact
          </NavLink>
          <NavLink to="/learn" className="text-white">
          learn
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
