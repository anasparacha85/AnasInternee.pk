import React from "react";
import { usestore } from "../Store/ContextStore";
import { Link } from "react-router-dom";

const InstructorHeader = () => {
    const {user}=usestore()
  return (
    <header className="bg-gray-700 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="  text-xl">
         <img src="https://www.internee.pk/logo.png" alt="" className='w-40' />
        </div>


        {/* Visit Website Link */}
        <Link
          to="/"
          className="mt-4 md:mt-0 px-4 py-2 text-gray-100 bg-gray-600 hover:bg-gray-800"
        >
          Visit website
        </Link>

        {/* User Profile Section */}
        <div className="mt-4 md:mt-0 flex items-center py-2 px-2 space-x-2 bg-gray-600 text-white">
          <img
            src={user.profilePicture}
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex flex-col ">
          <span className="text-sm">{user.name}</span>
          <span className="text-sm text-gray-100">instructor</span>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default InstructorHeader;