import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import fodImage from "../assets/imageFood.png";
import blogImage from "../assets/Blog_image.png";
import muiImage from "../assets/MUI_dashboard.png";
import sass from "../assets/SassImage.png";

const projects = [
  {
    title: "Food Delivery System with Admin Dashboard",
    description:
      "A full-stack e-commerce application featuring real-time order tracking, secure payment integration (Razorpay), and an admin dashboard for managing categories, orders, and users.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Cloudinary", "AJAX"],
    liveDemo: "https://food-delivery-mern-project-fhjasezrj-vishalsinhparmars-projects.vercel.app",
    github: "https://github.com/vishalsinhparmar/Food_delivery_MERN_project",
    image: fodImage,
  },
  {
    title: "Blog Web Application",
    description:
      "A blogging platform with secure user authentication using JWT, email verification via Nodemailer, and an interactive comment system for user engagement.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    liveDemo: "https://blog-frontend-r6xa17h3t-vishalsinhparmars-projects.vercel.app/",
    github: "https://github.com/vishalsinhparmar/blog_frontend",
    image: blogImage,
  },
  {
    title: "MUI Dashboard",
    description:
      "A responsive MUI dashboard website built with Material-UI and React, showcasing skills, projects, and professional achievements.",
    technologies: ["React", "Material-UI", "JavaScript"],
    liveDemo: "https://mui-dashboard-five.vercel.app/",
    github: "https://github.com/vishalsinhparmar/MUI-dashboard",
    image: muiImage,
  },
  {
    title: "SASS UI",
    description:
      "A dynamic frontend application using a CSS preprocessor for modern UI design. Features a clean and responsive layout built with Sass.",
    technologies: ["React", "SASS", "JavaScript", "CSS"],
    liveDemo: "https://ui-sass-project-xlf1-aq0udztcm-vishalsinhparmars-projects.vercel.app",
    github: "https://github.com/vishalsinhparmar/UI_SASS_PROJECT",
    image: sass,
  },
];

const Projects = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto text-center px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-600 uppercase tracking-wide">
        My Projects
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
        Showcasing My Work
      </h1>
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
        Explore projects built using the MERN stack and UI frameworks. Each project demonstrates my ability to build scalable and visually appealing applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-5 shadow-md rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg h-48 w-full object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              <div className="mt-3">
                <strong className="block text-sm">Technologies:</strong>
                <div className="flex overflow-auto space-x-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 space-x-1 hover:underline"
                >
                  <FiExternalLink /> <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 space-x-1 hover:underline"
                >
                  <FiGithub /> <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
