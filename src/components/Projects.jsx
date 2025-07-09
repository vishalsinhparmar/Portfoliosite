
import { FiExternalLink, FiGithub } from "react-icons/fi";
import fodImage from "../assets/imageFood.png";
import blogImage from "../assets/Blog_image.png";
import muiImage from "../assets/MUI_dashboard.png";
import sass from "../assets/SassImage.png";
import adminTask from "../assets/taskAdmin.png"
import todoApp from '../assets/GridlayoutPage.png'
import cartImage from '../assets/CartSystem.png'
import eccommerce from '../assets/eccommerce.png'
const projects = [
  {
    title: "Food Delivery System with Admin Dashboard",
    description:
      "A full-stack e-commerce application featuring real-time order tracking, secure payment integration (Razorpay), and an admin dashboard for managing categories, orders, and users.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Cloudinary", "AJAX"],
    liveDemo: "https://food-delivery-mern-project-md5t04fd8-vishalsinhparmars-projects.vercel.app",
    github: "https://github.com/vishalsinhparmar/Food_delivery_MERN_project",
    image: fodImage,
  },
  {
    title: "Blog Web Application",
    description:
      "A blogging platform with secure user authentication using JWT, email verification via Nodemailer, and an interactive comment system for user engagement.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    liveDemo: "https://blog-frontend-one-rho.vercel.app/",
    github: "https://github.com/vishalsinhparmar/blog_frontend",
    image: blogImage,
  },
    {
    title: "Task Management Dashboard (Fullstack MERN)",
    description:
      "A full-featured task manager built as a MERN assessment project with JWT authentication, Redux Toolkit, and a responsive UI using Tailwind. Features task CRUD, filtering, toast alerts, protected routes, and more.",
    technologies: [
      "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", 
      "Tailwind CSS", "Axios", "Toastify", "Vite", "Mongoose", "Railway", "Vercel"
    ],
    liveDemo: "https://mern-fullstack-assessment.vercel.app",
    github: "https://github.com/vishalsinhparmar/MERN_fullstack_assessment",
    image: adminTask,
  },
    {
    title: "CRUD ToDo App with MVC Architecture",
    description:
      "A full-stack MERN CRUD application showcasing clean architecture with MVC pattern in the backend. Implements real-time dynamic updates, strong folder structure, and responsive UI. Backend validation is handled with Joi.",
    technologies: [
      "React", "Node.js", "Express", "MongoDB", "Mongoose", "MVC", 
      "Joi", "Tailwind CSS", "Axios", "Vercel", "Railway", "Postman"
    ],
    liveDemo: "https://day12-task-nine.vercel.app/",
    github: "https://github.com/vishalsinhparmar/Day12_task",
    image: todoApp,
  },
    {
    title: "🛍️ Product Catalog - React Frontend Assessment",
    description:
      "A responsive product catalog web application developed for the CloudGenZ Technologies Pvt Ltd frontend assessment. Features a clean UI, routing, responsive layout, API integration with error handling, and product detail navigation.",
    technologies: [
      "React", "React Router DOM", "CSS", "Fake Store API", "Vercel"
    ],
    liveDemo: "https://react-frontend-assessment-taupe.vercel.app/",
    github: "https://github.com/vishalsinhparmar/React-Frontend-Assessment",
    image: eccommerce,
  },
    {
    title: "E-Commerce App with Redux & Authentication",
    description:
      "A professional e-commerce frontend app built using React and Redux Toolkit. Features user authentication, category-wise filtering, pagination, and a fully functional shopping cart with checkout functionality. Data powered by DummyJSON API.",
    technologies: [
      "React", "Redux Toolkit", "JavaScript", "Tailwind CSS",
      "Redux Thunk", "JWT", "DummyJSON API", "Vercel"
    ],
    liveDemo: "https://interview-task-xi-vert.vercel.app/",
    github: "https://github.com/vishalsinhparmar/Interview_task",
    image: cartImage,
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
