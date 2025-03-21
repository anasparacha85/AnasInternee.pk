import React, { useEffect, useState } from 'react'
import LMSHeader from '../../Components/LMSHeader'
import ProfileHeader from '../../Components/ProfileHeader'
import { usestore } from '../../Store/ContextStore'
import { Link } from 'react-router-dom'
import CourseCard from '../../Components/Cardss/CourseCard'

export const MyCourses = () => {
    const {url,jwtToken}=usestore()
    const [courses, setcourses] = useState([])
    const getEnrolledCourses=()=>{
         fetch(`${url}/api/courses/course/student/getCourses`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${jwtToken}`
            }

        }).then((response)=>{
            return response.json()
        }).then((data)=>{
          console.log(data);
            if(data.EnrolledCourseData){
              setcourses(data.EnrolledCourseData)
            }
          
            
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }

    useEffect(()=>{
        getEnrolledCourses()
    },[])
  return (
    <>
       <LMSHeader/>
       <ProfileHeader Heading={"My Courses"}/>
       {courses.length>0?
       
       <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
         {courses.map((course, index) => (
         <CourseCard rout={`/LMS/CourseContent/${course.course._id}`} Label="Start Lesson" key={index} id={course.course._id} title={course.course.CourseName} image={course.course.CoursePic} description={course.course.CourseDescription} price={course.course.CoursePrice} />
        ))}
      </div>
    </div>: <div className='mx-auto py-4 px-2
       '><h1 className='text-green-600 text-xl  '>You are enrolled in no courses so far</h1> </div>}


    </>
  )
}

export default MyCourses
