import React from "react";

const About = () => (
  <section className="px-5 bg-white">
     <h1 className="text-center font-semibold text-5xl py-10">About me</h1>
    <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl font-semibold text-green-500">EXPERT MERN STACK DEVELOPER</h2>
        <h1 className="text-4xl font-bold mt-3">Crafting seamless web experiences</h1>
        <p className="mt-4 text-gray-700">
          At VISHAISINH, you will find a dedicated MERN stack developer based in Rajkot, IN,
          committed to delivering top-notch web solutions. With expertise in HTML, CSS, JavaScript,
          and cutting-edge frameworks like React, I build responsive and engaging frontend applications.
        </p>
        <a href="/contact" className="mt-5 inline-block text-green-500 underline">
          Get in touch
        </a>
      </div>
      <div>
        <img src="/path-to-about-image.jpg" alt="About Section" className="rounded shadow-lg" />
      </div>
    </div>
  </section>
);

export default About;
