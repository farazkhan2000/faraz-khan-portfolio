import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-4 fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-2 rounded-lg border-2">
        <div>
          <h2>Faraz Khan</h2>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Work</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-900">
          Download CV
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
