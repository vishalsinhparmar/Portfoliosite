import React from "react";
import { LiaLinkedin, LiaGithub, LiaTwitter } from "react-icons/lia";

const Contact = () => (
  <section className="py-20 px-5 bg-gray-50">
    <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold text-green-500">GET IN TOUCH</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
          Start your project with me today!
        </h1>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email address</label>
            <input
              type="email"
              placeholder="email@website.com"
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone number</label>
            <input
              type="tel"
              placeholder="555-555-5555"
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-200 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <label className="inline-flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              I allow this website to store my submission to respond to my inquiry.
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-md focus:ring focus:ring-green-300 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
        <p className="text-lg text-gray-600">
          <strong>Email:</strong> vishalsinhparmar821@gmail.com
        </p>
        <p className="text-lg mt-2 text-gray-600">
          <strong>Location:</strong> Rajkot, GJ IN
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
          <p className="text-lg mt-2 text-gray-600">Monday - Friday: 9:00am - 10:00pm</p>
          <p className="text-lg text-gray-600">Saturday: 9:00am - 6:00pm</p>
          <p className="text-lg text-gray-600">Sunday: 9:00am - 12:00pm</p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800">Follow Me</h3>
          <div className="flex space-x-6 mt-4">
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
              className="text-3xl text-gray-900 hover:text-gray-700 transition duration-300"
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
  </section>
);

export default Contact;
