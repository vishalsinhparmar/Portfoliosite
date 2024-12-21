import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-white shadow-md">
    <h1 className="text-xl font-bold">VISHAISINH</h1>
    <div className="flex space-x-4">
      <a to="/">Home</a>
      <a to="/about">About</a>
      <a to="/services">Services</a>
      <a to="/contact" className="bg-green-500 text-white px-4 py-2 rounded">
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;
