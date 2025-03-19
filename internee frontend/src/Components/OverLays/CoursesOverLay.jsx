import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { usestore } from '../../Store/ContextStore'

const CoursesOverLay = () => {
   
      const [webhovered, setwebhovered] = useState(false)
      const [apphovered, setapphovered] = useState(false)
      const [devopshovered, setdevopshovered] = useState(false)
    const [datasciencehovered, setdatasciencehovered] = useState(false)
    const navigate=useNavigate()
    const {selecteditem,setselecteditem,categoryitem, setcategoryitem}=usestore()
const AppDev=['Flutter Developement','React Native Development','Swift Development','Android Development']
const WebDev=['Reactjs Development','Nodejs Development',"Mern Stack Development","Django Development","Php Development"]
const DataSciene=["Pandas","Data Visualization","Data Mining"]
const Devops=["AWS Development","Google Cloud","Microsoft Azure"];

  return (
    <div className="absolute top-full left-0 w-48 bg-white text-gray-700 p-2 rounded-md shadow-lg">
                <button onClick={()=>{setcategoryitem('Web Development');navigate('/LMS/Courses')}} onMouseEnter={()=>setwebhovered(true)} onMouseLeave={()=>setwebhovered(false)} className="peer p-2 hover:bg-gray-200 w-full cursor-pointer text-start">Web Development
                {webhovered && (
                <div className="absolute left-full top-0 -ml-1 w-full bg-white text-gray-700  rounded-md shadow-lg text-start">
                    {WebDev.map((value,index)=>(
                         <button onClick={()=>{setselecteditem(value);navigate('/LMS/Courses') }} className="p-2 hover:bg-gray-200 cursor-pointer">{value}</button>
                    ))}
                 
                 
                </div>
              )}
                </button>
                <button onClick={()=>{setcategoryitem('App Development');navigate('/LMS/Courses')}} onMouseEnter={()=>setapphovered(true)} onMouseLeave={()=>setapphovered(false)} className="peer p-2 hover:bg-gray-200 w-full cursor-pointer text-start">App Development
                {apphovered && (
                <div className="absolute left-full top-0 -ml-1 w-full bg-white text-gray-700 p-2 rounded-md shadow-lg text-start">
                    {AppDev.map((value,index)=>(
                         <button onClick={()=>{setselecteditem(value);navigate('/LMS/Courses') }} className="p-2 hover:bg-gray-200 cursor-pointer">{value}</button>
                    ))}
                 
                 
                </div>
              )}
                </button>
                <button onClick={()=>{setcategoryitem('Data Sceince');navigate('/LMS/Courses')}} onMouseEnter={()=>setdatasciencehovered(true)} onMouseLeave={()=>setdatasciencehovered(false)} className="peer w-full p-2 hover:bg-gray-200 cursor-pointer block text-start">Data Science
                {datasciencehovered && (
                <div className="absolute left-full top-0 -ml-1 w-full bg-white text-gray-700 p-2 rounded-md shadow-lg">
                    {DataSciene.map((value,index)=>(
                         <button  onClick={()=>{setselecteditem(value);navigate('/LMS/Courses') }} className="p-2 hover:bg-gray-200 cursor-pointer">{value}</button>
                    ))}
                 
                 
                </div>
              )}
                </button>
                <button onClick={()=>{setcategoryitem('Devops');navigate('/LMS/Courses')}} onMouseEnter={()=>setdevopshovered(true)} onMouseLeave={()=>setdevopshovered(false)}  className="peer w-full p-2 hover:bg-gray-200 cursor-pointer text-start">Devops
                {devopshovered && (
                <div className="absolute left-full top-0 -ml-1 w-full bg-white text-gray-700 p-2 rounded-md shadow-lg">
                    {Devops.map((value,index)=>(
                         <button  onClick={()=>{setselecteditem(value);navigate('/LMS/Courses') }} className="p-2 hover:bg-gray-200 cursor-pointer">{value}</button>
                    ))}
                 
                 
                </div>
              )}
                </button>
                <button onClick={()=>navigate('/LMS/Courses')}  className="peer w-full p-2 hover:bg-gray-200 cursor-pointer text-start">ALL Courses
              
                </button>
              </div>
  )
}

export default CoursesOverLay
