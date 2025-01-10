import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiWebpack,
  SiBabel,
  SiVite,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";
import { DiSass } from "react-icons/di";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
      { name: "MUI", icon: <FaReact className="text-blue-500 text-4xl" /> }, // Material-UI placeholder
      { name: "Sass", icon: <DiSass className="text-pink-400 text-4xl" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800 text-4xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-500 text-4xl" /> },
      { name: "AJAX", icon: <FaJs className="text-yellow-500 text-4xl" /> }, // Placeholder
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGithub className="text-gray-800 text-4xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-400 text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400 text-4xl" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400 text-4xl" /> },
      { name: "Babel", icon: <SiBabel className="text-yellow-400 text-4xl" /> },
    ],
  },
];

const Skills = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="container mx-auto text-center px-5">
      <h2 className="text-xl md:text-2xl font-semibold text-green-500">
        TECHNICAL SKILLS
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
        My Technical Expertise
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Here's a showcase of the technologies and tools I work with to build
        scalable and robust web applications.
      </p>
      <div className="mt-12 space-y-16">
        {skills.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-700">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-6">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  {skill.icon}
                  <p className="mt-3 text-sm font-medium text-gray-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
