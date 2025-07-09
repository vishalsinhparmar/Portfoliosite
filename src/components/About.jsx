
import Aboutimg from '../assets/aboutImgae.jpg';

const About = () => (
  <section className="px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-200">
    <div className="container mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        About Me
      </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-green-600">
            Dynamic and Detail-Oriented MERN Stack Developer
          </h2>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
            Building Seamless, Scalable, and Secure Web Applications
          </h1>
          <p className="mt-6 text-gray-700 leading-relaxed">
            I’m a 2 year experienced MERN stack developer based in Gandhinagar, IN, dedicated to crafting robust and scalable 
            web applications. Proficient in React, Redux, Tailwind CSS, and Material-UI for intuitive 
            frontend development, and skilled in backend technologies like Node.js, Express, and MongoDB. 
            I have a proven track record of implementing CI/CD workflows, integrating payment gateways 
            like Razorpay, and building secure authentication systems using JWT and Nodemailer.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With hands-on experience in Vite, Webpack, Babel, and AJAX, I ensure optimized performance 
            and seamless user experiences. My passion lies in delivering production-ready solutions that 
            meet and exceed client expectations.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block text-lg font-medium text-white bg-green-600 px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src={Aboutimg}
            alt="About Me"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600 opacity-25 mix-blend-multiply rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
