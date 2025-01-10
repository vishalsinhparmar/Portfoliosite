import React from "react";
import { CiLocationOn } from "react-icons/ci";
import avatar from '../assets/background-replacer-result.png'
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const Hero = () => (
  <section className="bg-cover bg-center bg-hero-pattern h-screen flex items-center justify-center">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-5">
      {/* Left Content */}
      <div className="text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m Vishal 👋
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Showcasing <span className="text-green-400">MERN Stack Expertise</span>
        </p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition">
          View Services
        </button>
        <div className="mt-8 space-y-4">
          <div className="flex items-center text-xl">
            <IoLocationOutline className="text-green-400 text-2xl mr-4" />
            <span>Rajkot, India</span>
          </div>
          <div className="flex items-center text-xl">
            <GoDotFill className="text-green-400 text-2xl mr-4" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex items-center justify-center mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-green-400 to-blue-400 p-2 rounded-full shadow-lg">
          <img
            src={avatar}
            alt="Vishal's Avatar"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
