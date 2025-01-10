import React from "react";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";

import { SiRazorpay } from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    description: "Design and develop stunning, responsive user interfaces using React, Redux, and modern CSS frameworks like Tailwind CSS and Material-UI.",
    icon: <FaReact className="text-blue-400 text-5xl mx-auto mb-5" />, // Replace with a relevant icon or graphic
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications with Node.js and Express, leveraging MongoDB for efficient database management and seamless APIs.",
    icon: <FaNodeJs className="text-green-500 text-5xl mx-auto mb-5" />, // Replace with a relevant icon or graphic
  },
  {
    title: "Full-Stack Development",
    description: "Combine frontend and backend expertise to deliver end-to-end scalable and secure web applications tailored to client needs.",
    icon: <MdDeveloperMode className="text-purple-500 text-5xl mx-auto mb-5" />, // Replace with a relevant icon or graphic
  },
  {
    title: "Authentication Systems",
    description: "Implement secure authentication and authorization with JWT, email verification using Nodemailer, and multi-factor authentication.",
    icon: <FiLock className="text-red-500 text-5xl mx-auto mb-5" />, // Replace with a relevant icon or graphic
  },
  {
    title: "Payment Integration",
    description: "Integrate secure payment gateways like Razorpay and PayPal to streamline transactions for e-commerce platforms.",
    icon: <SiRazorpay className="text-blue-500 text-5xl mx-auto mb-5"/>, // Replace with a relevant icon or graphic
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamline development workflows with GitHub Actions, enabling continuous integration and deployment for seamless releases.",
    icon: <FaGithub className="text-slate-700 text-5xl mx-auto mb-5" />
    , // Replace with a relevant icon or graphic
  },
];

const Services = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-green-500">
        PROFESSIONAL SERVICES
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
        What I Offer
      </h1>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        I specialize in delivering scalable, secure, and high-performing web solutions tailored to modern business needs. Here’s how I can help bring your ideas to life.
      </p>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
               {service.icon}
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-3 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
