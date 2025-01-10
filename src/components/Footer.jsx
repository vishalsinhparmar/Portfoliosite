import React from "react";
import { LiaLinkedin, LiaGithub, LiaTwitter } from "react-icons/lia";

const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-center md:text-left">
            © 2024 VISHAISINH. All rights reserved.
          </p>
        </div>

        {/* Right Section: Links and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Links */}
          <a
            href="#"
            className="text-green-500 hover:text-green-400 transition duration-300"
          >
            Schedule Appointment
          </a>
          <span className="text-white">|</span>
          <a
            href="#"
            className="text-green-500 hover:text-green-400 transition duration-300"
          >
            Complete Intake
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/parmar-vishalsinh-20561726b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-700 hover:text-blue-600 transition duration-300"
            >
              <LiaLinkedin />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/vishalsinhparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-gray-700 transition duration-300"
            >
              <LiaGithub />
            </a>
            {/* Twitter Icon */}
            <a
              href="https://x.com/gaming_oxy90924"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <LiaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
