import { useState } from "react";
import { usestore } from "../Store/ContextStore";

const secLMSHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [subHovered, setSubHovered] = useState(false);

  

  return (
    <div className="relative flex items-center space-x-4 p-4 bg-gray-900 text-white">
      {/* Icon that triggers the first popup */}
      <div
        className="relative group cursor-pointer p-2 bg-gray-700 rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        🔔
        {isHovered && (
          <div className="absolute top-full left-0  w-48 bg-white text-black p-2 rounded-md shadow-lg">
            <div
              className="peer p-2 hover:bg-gray-200 cursor-pointer"
              onMouseEnter={() => setSubHovered(true)}
              onMouseLeave={() => setSubHovered(false)}
            >
              Settings ⚙️
              {subHovered && (
                <div className="absolute left-full top-0 ml-2 w-40 bg-white text-black p-2 rounded-md shadow-lg">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">Profile</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">Logout</p>
                </div>
              )}
            </div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer"
             onMouseEnter={() => setSubHovered(true)}
             onMouseLeave={() => setSubHovered(false)}
            >Help ❓
              {subHovered && (
                <div className="absolute left-full top-0 ml-2 w-40 bg-white text-black p-2 rounded-md shadow-lg">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">hello</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">bro</p>
                </div>
              )}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default secLMSHeader;
