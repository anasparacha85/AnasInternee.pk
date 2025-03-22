import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProfileHeader = ({Heading}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white py-4 lg:px-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white">{Heading}</h1>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-start space-x-6 mt-2 ">
       <NavLink to='/LMS/UserProfile'className={({isActive})=>`hover:text-gray-400 text-lg ${isActive&&`text-gray-400`}`} >User Profile</NavLink>
       <NavLink to='/LMS/myFavorites' className={({isActive})=>`hover:text-gray-400 text-lg ${isActive&&`text-gray-400`}`}>Favorites</NavLink>
       <NavLink to='/LMS/MyCourses' className={({isActive})=>`hover:text-gray-400 text-lg ${isActive&&`text-gray-400`}`}>My Courses </NavLink>
      </nav>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-5 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h1 className="text-xl font-bold mb-4">{Heading}</h1>

        {/* Mobile Links */}
        <nav className="flex flex-col space-y-4">
          {["User Profile", "my Favorites", "My Courses"].map((item, index) => (
            <NavLink
              key={index}
              to={`/LMS/${item.replace(" ","")}`}
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default ProfileHeader;
