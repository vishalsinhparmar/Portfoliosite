import React from "react";
import fodImage from '../assets/imageFood.png'
import blogImage from '../assets/Blog_image.png'
import muiImge from '../assets/MUI_dashboard.png'
import sass from '../assets/SassImage.png'


const projects = [
  {
    title: "Food Delivery System with Admin Dashboard",
    description: "A full-stack e-commerce application featuring real-time order tracking, secure payment integration (Razorpay), and an admin dashboard for managing categories, orders, and users.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay","Cloudinary","AJAX"],
    liveDemo: "https://food-delivery-mern-project-ymuw-e7h3ee4j6.vercel.app",
    github: "https://github.com/vishalsinhparmar/Food_delivery_MERN_project",
    image: fodImage, // Replace with an actual image path
  },
  {
    title: "Blog Web Application",
    description: "A blogging platform with secure user authentication using JWT, email verification via Nodemailer, and an interactive comment system for user engagement.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    liveDemo: "https://blog-frontend-r6xa17h3t-vishalsinhparmars-projects.vercel.app/",
    github: "https://github.com/vishalsinhparmar/blog_frontend",
    image:blogImage, // Replace with an actual image path
  },
  {
    title: "MUI dashboard",
    description: "A responsive MUI dashboard website built with Material-UI and React, showcasing skills, projects, and professional achievements.",
    technologies: ["React", "Material-UI", "JavaScript"],
    liveDemo: "https://blog-frontend-r6xa17h3t-vishalsinhparmars-projects.vercel.app",
    github: "https://github.com/vishalsinhparmar/MUI-dashboard",
    image: muiImge, // Replace with an actual image path
  },
  {
    title: "SASS UI",
    description: "A dynamic frontend application that using a preprocessor of css. Features a clean and modern UI built with Sass.",
    technologies: ["React", "SASS", "JavaScript", "CSS"],
    liveDemo: "https://ui-sass-project-xlf1-aq0udztcm-vishalsinhparmars-projects.vercel.app",
    github: "https://github.com/vishalsinhparmar/UI_SASS_PROJECT",
    image: sass, // Replace with an actual image path
  },
];

const Projects = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-green-500">
        MY PROJECTS
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
        Showcasing My Work
      </h1>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Explore the projects I have developed using the MERN stack and other modern technologies. Each project demonstrates my ability to create robust, scalable, and visually appealing web applications.
      </p>
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg h-48 w-full object-cover"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium underline"
                >
                  GitHub
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
