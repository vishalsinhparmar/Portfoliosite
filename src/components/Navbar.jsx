import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          VISHAISINH
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 font-medium hover:text-green-500 ${
                isActive ? "text-green-500 border-b-2 border-green-500" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-800 font-medium hover:text-green-500 ${
                isActive ? "text-green-500 border-b-2 border-green-500" : ""
              }`
            }
          >
            About
          </NavLink>
          
          <NavLink
              to="/Skills"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `text-gray-800 font-medium hover:text-green-500 ${
                isActive ? "text-green-500 border-b-2 border-green-500" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-800 font-medium hover:text-green-500 ${
                isActive ? "text-green-500 border-b-2 border-green-500" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                isActive ? "bg-green-600" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-800 font-medium hover:text-green-500 ${
                  isActive ? "text-green-500" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                  isActive ? "bg-green-600" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
