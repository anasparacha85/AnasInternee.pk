import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaChalkboardTeacher, FaUpload, FaTrash, FaEye, FaUserCog } from "react-icons/fa";
import { usestore } from "../../../Store/ContextStore";
import InstructorHeader from "../../../Components/InstructorHeader";

export const InstructorPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  
 const instructor=localStorage.getItem('instructor')==='true';
 console.log(instructor);
 
  
  

  return (
    <>
      <InstructorHeader/>
    <div className="flex h-screen ">
    
      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-gray-900 text-white w-64 p-6 h-screen space-y-6 md:block transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold text-center">Instructor Panel</h2>
        <nav className="flex flex-col space-y-4">
         {!instructor&&
          <NavLink
          to="/LMS/Instructor"
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-lg transition ${
              isActive ? "bg-purple-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaChalkboardTeacher /> Become an Instructor
        </NavLink>}
         {instructor&&
          <NavLink
          to="/LMS/Instructor/upload"
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-lg transition ${
              isActive ? "bg-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUpload /> Upload Courses
        </NavLink>}
         
        {instructor&&
          <NavLink
            to="/LMS/Instructor/ShowCourses"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <FaEye /> Delete Courses
          </NavLink>
}
          <NavLink
            to="/LMS/UserProfile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-lg transition ${
                isActive ? "bg-yellow-600" : "hover:bg-gray-700"
              }`
            }
          >
            <FaUserCog /> Manage Profile
          </NavLink>
        </nav>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-1 left-2 bg-gray-900 text-white p-3 rounded-full z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto ">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default InstructorPanel;