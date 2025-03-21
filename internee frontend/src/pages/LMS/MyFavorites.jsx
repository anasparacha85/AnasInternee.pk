import React, { useEffect, useState } from 'react'
import CourseCard from '../../Components/Cardss/CourseCard'
import { usestore } from '../../Store/ContextStore'
import LMSHeader from '../../Components/LMSHeader'
import ProfileHeader from '../../Components/ProfileHeader'

export const MyFavorites = () => {
   const {url,jwtToken}=usestore()
      const [courses, setcourses] = useState([])
      const getFavoriteCourses=()=>{
           fetch(`${url}/api/courses/getFavorites`,{
              method:'GET',
              headers:{
                  'Authorization':`Bearer ${jwtToken}`
              }
  
          }).then((response)=>{
              return response.json()
          }).then((data)=>{
            console.log(data);
            if(data.length>0){
            setcourses(data)
            }
            data.map((value,index)=>{
              console.log(value);
              

            })
             
            
              
              
          }).catch((error)=>{
              console.log(error);
              
          })
      }
  
      useEffect(()=>{
          getFavoriteCourses()
      },[])
      
  return (
    <>
<LMSHeader/>
<ProfileHeader Heading={"/LMS/courses/myFavourites"}/>
      {courses.length>0?
      
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
         <CourseCard rout={`/LMS/course/${course.course._id}`}  Label="Enroll Now" key={index} id={course.course._id} title={course.course.CourseName} image={course.course.CoursePic} description={course.course.CourseDescription} price={course.course.CoursePrice} />
        ))}
      </div>
      </div>:
      <div className='mx-auto py-4 px-2
       '><h1 className='text-green-600 text-xl  '>No Course Added To Favorites</h1> </div>}
    
   
    </>
  )
}

export default MyFavorites


