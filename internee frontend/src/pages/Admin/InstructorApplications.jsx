import React, { useEffect, useState } from 'react'
import { usestore } from '../../Store/ContextStore';
import { toast } from 'react-toastify';
import { div } from 'framer-motion/client';
import { ClipLoader } from 'react-spinners';

export const InstructorApplications = () => {
     const { url, jwtToken } = usestore();
      const [applications, setApplications] = useState([]);
      const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        
        fetch(`${url}/api/admin/AppliedInstructors`, {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${jwtToken}`
            
          },
        })
          .then((res) => {return res.json()})
          .then((data) => {
            console.log("hello Instructors",data);
            setApplications(data);
           
            
          })
          .catch((err) => {
            console.error("Error fetching job applications:", err);
           
          
           
          }).finally(()=>{
            setLoading(false);
          });
      }, [url, jwtToken]);
      
      const onApprove=(email)=>{
        fetch(`${url}/api/admin/makeInstructor/${email}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                "Authorization":`Bearer ${jwtToken}`
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
            
            if(data.SuccessMessage){
                toast.success(data.SuccessMessage)
                setApplications(data.findinstructor)
            }
            if(data.FailureMessage){
                toast.error(data.FailureMessage)
            }
        }).catch((error)=>{
            toast.error(error.FailureMessage)
        })

      }
      const onRemove=(email)=>{
        fetch(`${url}/api/admin/removeInstructor/${email}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                "Authorization":`Bearer ${jwtToken}`
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
            
            if(data.SuccessMessage){
                toast.success(data.SuccessMessage)
                setApplications(data.findinstructor)
            }
            if(data.FailureMessage){
                toast.error(data.FailureMessage)
            }
        }).catch((error)=>{
            toast.error(error.FailureMessage)
        })

      }
    
  return (
    <div className="lg:max-w-6xl w-screen lg:ml-80 p-6 bg-white shadow-md rounded-lg mt-10 overflow-x-scroll">
       
    <h1 className="text-2xl font-bold mb-4">Instructor Applications</h1>
    {loading ? (
    <div className='w-full h-[100%] flex justify-center items-center'><ClipLoader size={50} color='blue' loading={loading}/></div>
    ) : (
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-screen lg:w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Message</th>

              <th className="border p-2">document</th>
              <th className="border p-2">Phone Number</th>
              <th className="border p-2">Status</th>
              
              
              <th className="border p-2">Make Instructor</th>
              <th className="border p-2">Remove Instructor</th>

            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="border p-2">{app.name}</td>
                <td className="border p-2">{app.email}</td>
                <td className="border p-2">{app.address}</td>
                <td className="border p-2">{app.message}</td>
                <td className="border p-2">
                  <a
                    href={`${url}/${app.document}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Resume
                  </a>
                </td>
                <td className="border p-2">{app.phone}</td>
                <td className="border p-2">{app.status}</td>
                <td className="border p-2 ">
                  <button onClick={()=>onApprove(app.email)} className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer">Make</button>
                </td>
                <td className="border p-2">
                <button onClick={()=>onRemove(app.email)} className="bg-red-600 text-white px-3 py-1 ml-2 rounded cursor-pointer">Remove</button>
                </td>
               

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
};

export default InstructorApplications;
