import { NavLink } from "react-router-dom";

const DreamSection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-32 py-16 md:h-[500px]">
        {/* Left Side */}
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="text-5xl font-bold text-black">Looking for Dream Internship?</h2>
          <h1 className="text-5xl font-bold text-green-600 mt-2">Grain hands on Experience</h1>
          <p className="text-gray-700 mt-4">
          Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
          </p>
  
          {/* Icons Row */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqqLRSvpAgayKQyuHHHRStZsqqi6fmJd10g&s"  alt="Icon 1" className="w-20 h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAAEbFND8Ha4slh14wcCd3SUtj_HLJ1UexQ&s" alt="Icon 2" className="w-20 h-20" />
            <img src="https://www.internee.pk/images/see.png" alt="Icon 3" className="w-20 h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVxwEB1H91qJyoHeep3m7Z_NIoc8VAdzMQA&s" alt="Icon 4" className="w-20 h-20" />
          </div>
  
          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 border border-green-600 text-gray-700 rounded-[30px] shadow-md hover:bg-gray-200">
              Job Portal
            </button>
        <NavLink to='/LMS'> <button className="px-6 py-2 bg-green-600 text-white rounded-[30px] shadow-md hover:bg-green-700">
              Our LMS
            </button></NavLink>   
           
          </div>
        </div>
  
        {/* Right Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center h-[100%]">
        <img
          src="https://www.internee.pk/LMS%20video.gif" 
          className="w-full md:max-w-md rounded-lg shadow-lg"
        
        />
        </div>
      </div>
    );
  };
  
  export default DreamSection;
  