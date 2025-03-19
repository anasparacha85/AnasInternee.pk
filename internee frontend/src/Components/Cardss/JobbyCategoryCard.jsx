import { MapPin, Clock } from "lucide-react";
import { usestore } from "../../Store/ContextStore";
import { useLocation, useNavigate } from "react-router";


 const JobCategoryCard = ({ image, title, location, duration, type, remote, id }) => {
   const {isLoggedIn,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,url}=usestore();
   const navigate=useNavigate()
   const Location=useLocation();
   const onApply=()=>{
    console.log(isLoggedIn);
  
    
        if(!isLoggedIn){
          setUserLoginOpen(true)
          localStorage.setItem('prevpath',Location.pathname)
          console.log("hello");
          
        }
        else{
          console.log("zello");
          
          navigate(`/JobApplicationForm/${id}`)
        }
       
      }
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-100 w-full shadow-lg rounded-xl p-6 sm:py-10 sm:px-7 my-5 gap-4 sm:gap-0">
    {/* Left Side: Logo & Info */}
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      {/* Job Image */}
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-fill " />

      {/* Job Details */}
      <div className="text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <div className="flex flex-wrap justify-center sm:justify-start items-center text-gray-500 text-sm gap-4 mt-1">
          {/* Location */}
          <span className="flex items-center gap-1">
            <MapPin size={16} className="text-red-500" />
            {location}
          </span>
          {/* Duration */}
          <span className="flex items-center gap-1">
            <Clock size={16} className="text-green-600" />
            {duration}
          </span>
        </div>
      </div>
    </div>

    {/* Right Side: Tags & Button */}
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
      {/* Job Type */}
      <span className="text-gray-700 text-sm font-medium">{type}</span>

      {/* Remote Tag */}
      {remote && (
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md">
          Remote
        </span>
      )}

      {/* Apply Button */}
      <button
        onClick={onApply}
        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-green-700 transition w-full sm:w-auto"
      >
        Apply Now
      </button>
    </div>
  </div>
  );
};

export default JobCategoryCard;
