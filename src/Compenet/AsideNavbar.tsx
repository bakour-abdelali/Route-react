// src/components/Navbar.js

import {  NavLink } from "react-router-dom";



const AsideNavbar = () => {
  return (
    <aside>
    <nav className="bg-gray-800 p-4 flex-col">
      
       
        <div className=" flex flex-col">
        <NavLink to="/learn" end className="text-white">
        StartQuck
          </NavLink>  
          <NavLink to="/learn/tutorial" className="text-white">
          tutorial tic tac toe
          </NavLink>
          <NavLink to="/learn/thinking" className="text-white">
            thinking in react
          </NavLink>
          <NavLink to="/learn/installation" className="text-white">
            installation
          </NavLink>
        
        </div>
      
    </nav>
    </aside>
  );
}

export default AsideNavbar;
