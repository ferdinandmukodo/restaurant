import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <span>Digi Learn</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/lecturer">Lecturers</NavLink>
      <NavLink to="/contactus">Contact</NavLink>
      <NavLink to="/students">Students</NavLink>
      <button>
            <NavLink to="/login">Login</NavLink>
      </button>
    </header>
  );
}

export default NavBar;
