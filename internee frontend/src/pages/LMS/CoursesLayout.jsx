import { useCallback, useEffect, useState } from "react";
import React from "react";
import { usestore } from "../../Store/ContextStore";
import { Link } from "react-router-dom";
import LMSHeader from '../../Components/LMSHeader'
import ProfileHeader from '../../Components/ProfileHeader'


export default function CourseList() {
   
    const {url,selecteditem,setselecteditem,courses,setcourses,filtercourse,setfiltercourse,fetchCourseByName,fetchCourseByCategory,categoryitem, setcategoryitem}=usestore()
  
    const onchange=(e)=>{
      setselecteditem(e.target.value)
      console.log(selecteditem);
      
      
    }
   
    const oncategorychange=(e)=>{
      setcategoryitem(e.target.value)
    }
  
   

    // const filtercourses=courses.filter((course,index)=>  course.CourseName=="Flutter Development"
    // )
  // useEffect(()=>{
  //   setfiltercourse(courses.filter((value)=>{
  //     return selecteditem=="" || value.CourseName===selecteditem 
      
  //         }))
  // },[selecteditem])


useEffect(()=>{
  if(selecteditem){
    fetchCourseByName(selecteditem)
   }
},[selecteditem])
 

  useEffect(() => {
    
    if(categoryitem){
      fetchCourseByCategory(categoryitem)
    }
    
   
  }, [categoryitem])
 
  
  
  console.log("hello",courses);
   

    console.log(filtercourse);
    
    
  return (
    <div className="w-full md:w-[99%]">
    <LMSHeader />
    <ProfileHeader Heading={`/Courses/${selecteditem}`}/>
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-green-700">Filter</h2>
        <div className="mt-4">
          <h3 className="text-green-600 font-semibold">Categories</h3>
          <ul className="space-y-2 mt-2 text-sm">
           
            <li><input type="radio" onChange={oncategorychange} value='Web Development' checked={categoryitem=='Web Development'} name="Web Development" /> Web Development</li>

            <li><input type="radio" onChange={onchange} value='Mern Stack Development' checked={selecteditem=='Mern Stack Development'} name="Mern Stack Development" /> Mern Stack Development</li>
            <li><input type="radio"  onChange={onchange} value='Reactjs Development' checked={selecteditem=='Reactjs Development'} name="Reactjs Development" /> Reactjs Development</li>
           
            <li><input type="radio" onChange={onchange}  value="Nodejs Development" checked={selecteditem=="Nodejs Development"} name="Nodejs Development" /> Nodejs Development</li>
            <li><input type="radio" onChange={oncategorychange} value='App Development' checked={categoryitem=='App Development'} name="App Development" /> App Development</li>
           
            <li><input type="radio" onChange={onchange} value="React Native Development" checked={selecteditem=="React Native Development"} name="React Native Development" /> React Native Development</li>
           
           <li><input type="radio"  onChange={onchange} value="Flutter Developement" checked={selecteditem=="Flutter Developement"} name="Flutter Developement" /> Flutter Developement</li>
           <li><input type="radio" onChange={oncategorychange} value='Data sceince' checked={categoryitem=='Data sceince'} name="Data sceince" /> Data Science</li>
           <li><input type="radio"  onChange={onchange} value="Pandas" checked={selecteditem=="Pandas"} name="Pandas" /> Pandas</li>
           
           
           <li><input type="radio" onChange={oncategorychange} value='Devops' checked={categoryitem=='Devops'} name="Devops" /> Devops</li>
           <li><input type="radio"  onChange={onchange} value="AWS Development" checked={selecteditem=="AWS Development"} name="AWS Development" /> AWS Development</li>
           
           
          
          </ul>
        </div>
      </aside>

      <main className="flex-1 grid gap-4 p-4 w-full md:w-3/5">
  {courses.length > 0 ? courses.map((course) => (
    <Link key={course._id} to={`/LMS/course/${course._id}`} className="w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row w-full md:w-5/6">
        {/* Image */}
        <img
          src={course.CoursePic}
          alt={course.CourseName}
          className="w-full md:w-32 h-40 md:h-32 object-cover rounded-lg"
        />
        
        {/* Content */}
        <div className="mt-3 md:mt-0 md:ml-4 flex flex-col justify-between">
          <h3 className="text-green-700 font-bold text-lg">{course.CourseName}</h3>
          <p className="text-gray-600 text-sm">{course.CourseDescription}</p>
          
          <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
            <span>{course.lessonCount} Lessons</span>
            <span>03:05:26 Hours</span>
            <span>Beginner</span>
          </div>
          
          <div className="text-green-600 font-bold">
            {course.CoursePrice == 0 && "Free"}
          </div>
        </div>
      </div>
    </Link>
  )) : (
    <div className="text-xl text-green-600 flex justify-start">No Courses Found</div>
  )}
</main>

    </div>
    </div>
  );
}
