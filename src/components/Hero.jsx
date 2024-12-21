import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const Hero = () => (
    <section className=" bg-cover bg-center" >
    <div className="grid grid-flow-col bg-black h-full  p-10  text-white">
      <div className=" ">
        <h1 className="text-5xl font-bold">Hi, I’m vishal 👋</h1>
        <p className="text-xl">Showcasing MERN Stack Expertise</p>
        <button className="mt-5 px-6 py-3 bg-green-500 text-white rounded">
          View Services
        </button>
         <p className="font-semibold text-2xl flex items-center mt-5"><IoLocationOutline className="text-white mx-4 " /><h1 className="font-medium">Rajkot,India</h1></p>
         <p className="font-semibold text-2xl  flex items-center mt-5"><GoDotFill className="text-green-400 mx-4 " /><h1 className="font-medium">Available for new projects</h1></p>

      </div>

         <div className=" flex items-center justify-center w-48 h-48 bg-white">
             <img src="" alt="preview" className="bg-white h-full w-full  rounded-full"/>
         </div>

      </div>

    </section>
  );
  
  export default Hero;
  