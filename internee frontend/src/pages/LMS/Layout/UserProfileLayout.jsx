import { useState } from "react";
import { Menu, X, User, Settings, Image } from "lucide-react";
import LMSHeader from "../../../Components/LMSHeader";
import ProfileHeader from "../../../Components/ProfileHeader";
import { Outlet } from "react-router";
import { usestore } from "../../../Store/ContextStore";
import { NavLink } from "react-router-dom";

const UserProfileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const {user,url}=usestore()
  return (
    <>
    <LMSHeader/>
    <ProfileHeader Heading={"User Profile"}/>
     <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative bg-gray-50 text-gray-600 w-64 p-5 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/4 lg:w-1/5 xl:w-1/6 h-full`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={24} />
        </button>

        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
             src={user?user.profilePicture:""}
            alt="User"
            className="w-20 h-20 rounded-full border-2 border-gray-500"
          />
          <h2 className="text-lg font-semibold mt-2">{user?user.name:"no name"}</h2>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <NavLink to="/LMS/UserProfile" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
            <User className="mr-2" size={20} /> Profile
          </NavLink>
          <NavLink to="/LMS/UserProfile/Account" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
            <Settings className="mr-2" size={20} /> Account
          </NavLink>
          <NavLink to="/LMS/UserProfile/Photo" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
            <Image className="mr-2" size={20} /> Photos
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 h-full  bg-white ">
        {/* Menu Button for Mobile */}
        <button
          className="md:hidden p-2 bg-gray-900 text-white rounded-md"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

     <Outlet/>
      </main>
    </div></>
   
  );
};

export default UserProfileLayout;
