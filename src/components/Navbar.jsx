import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Close the mobile menu and navigate to the home page
  const handleLogoClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-gray-900 tracking-wide cursor-pointer"
          onClick={handleLogoClick}
        >
          VISHAISINH
        </div>

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
        <div className="hidden md:flex space-x-8 text-gray-800">
          {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-green-500 underline underline-offset-4"
                      : "hover:text-green-500 hover:underline underline-offset-4"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-lg font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "text-green-500 underline underline-offset-4"
                        : "hover:text-green-500 hover:underline underline-offset-4"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
