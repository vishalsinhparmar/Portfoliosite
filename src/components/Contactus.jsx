import React from "react";

const Contact = () => (
  <section className="py-20 px-5 bg-white">
    <div className="container mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-semibold text-green-500">GET IN TOUCH</h2>
        <h1 className="text-4xl font-bold mt-3">Start your project with us today!</h1>
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" placeholder="Jane Smith" className="w-full mt-2 p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input type="email" placeholder="email@website.com" className="w-full mt-2 p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone number</label>
            <input type="tel" placeholder="555-555-5555" className="w-full mt-2 p-3 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="4" placeholder="Your message" className="w-full mt-2 p-3 border rounded"></textarea>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">I allow this website to store my submission to respond to my inquiry.</span>
            </label>
          </div>
          <button type="submit" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Get in touch</h3>
        <p>Email: vishalsinhparmar821@gmail.com</p>
        <p>Location: Rajkot, GJ IN</p>
        <h3 className="text-lg font-semibold mt-5">Hours</h3>
        <p>Monday - Friday: 9:00am - 10:00pm</p>
        <p>Saturday: 9:00am - 6:00pm</p>
        <p>Sunday: 9:00am - 12:00pm</p>
      </div>
    </div>
  </section>
);

export default Contact;
