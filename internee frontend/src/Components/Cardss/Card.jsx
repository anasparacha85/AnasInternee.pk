import React from "react";

import { NavLink } from "react-router-dom";
 const Card = ({ image, title, Category }) => {
    
    return (
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
         
        </div>
        <div className="flex justify-center pb-3">
       
       <NavLink to={`/Internships/${Category}`}>
       <button 
            
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
          >
            Apply Now
          </button></NavLink>
        </div>
      </div>
    );
  };
  
  export default Card;
  