import { Clock, MapPin } from "lucide-react";
import React from "react";

import { NavLink } from "react-router-dom";
import DeleteConfirmation from "../OverLays/DeleteCOnfirmation";
import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../../Store/ContextStore";
 const AdminJobCard = ({ image, title, location, duration, type, remote, id, job,setjob}) => {
    const [popupopen, setpopupopen] = useState(false)
    const [items, setitems] = useState({})
    const openPopup=(details)=>{
        setpopupopen(true)
        setitems({details})

    }
    const{url,jwtToken}=usestore()
   const handledelete=(details)=>{
          fetch(`${url}/api/admin/delete-a-job/${details.id}`, {
              method:'DELETE',
              headers:{
                  "Authorization":`Bearer ${jwtToken}`
              }
  
          }).then((res)=>{
            console.log(res);
            if(res.ok){
                setpopupopen(false)
                setjob((prevjob)=>prevjob.filter((value)=>value._id!=details.id))
                
            }
              return res.json()
          }).then((data)=>{
            
              if(data.SuccessMessage){
                  toast.success(data.SuccessMessage)
                
              }
              if(data.FailureMessage){
                  toast.error(data.FailureMessage)
              }
          }).catch((error)=>{
              toast.error(error.FailureMessage)
          })
      }
      return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-lg rounded-xl p-5 md:p-7 w-full my-5 space-y-4 md:space-y-0">
          {/* Left Side: Logo & Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Job Image */}
            <img src={image} alt={title} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
            {/* Job Details */}
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold">{title}</h2>
              <div className="flex flex-wrap justify-center md:justify-start items-center text-gray-500 text-sm gap-4 mt-1">
                {/* Location */}
                <span className="flex items-center gap-1">
                  <MapPin size={16} className="text-red-500" />
                  {location}
                </span>
                {/* Duration */}
                <span className="flex items-center gap-1">
                  <Clock size={16} className="text-green-500" />
                  {duration}
                </span>
              </div>
            </div>
          </div>
          {/* Right Side: Tags & Button */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            {/* Job Type */}
            <span className="text-gray-700 text-sm font-medium">{type}</span>
            {/* Remote Tag */}
            {remote && (
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">
                Remote
              </span>
            )}
            {/* Delete Button */}
            <button
              onClick={() => openPopup({ id, title })}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
          <DeleteConfirmation isOpen={popupopen} item={items} onConfirm={handledelete} onClose={() => setpopupopen(false)} />
        </div>
      );
  };
  
  export default AdminJobCard;
  