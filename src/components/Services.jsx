import React from "react";

const services = [
  {
    title: "Frontend development",
    description: "Create stunning user interfaces with cutting-edge technologies.",
    image: "/path-to-frontend.jpg",
  },
  {
    title: "Backend development",
    description: "Build robust server-side applications that power your ideas.",
    image: "/path-to-backend.jpg",
  },
  {
    title: "Full stack development",
    description: "Combine frontend and backend for a comprehensive solution.",
    image: "/path-to-fullstack.jpg",
  },
];

const Services = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold text-green-500">EXPERT MERN DEVELOPMENT</h2>
      <h1 className="text-4xl font-bold mt-3">Crafting robust web applications with precision</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-5 shadow-lg rounded">
            <img src={service.image} alt={service.title} className="w-full rounded mb-5" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
