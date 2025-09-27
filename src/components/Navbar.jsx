import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container mx-auto py-4">
      <nav className="w-1/2 mx-auto flex justify-between items-center p-2 rounded-lg border">
        <div className="">
          <h2>Faraz Khan</h2>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900">
          Download CV
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
