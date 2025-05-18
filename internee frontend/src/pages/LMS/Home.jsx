import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LMSHeader from '../../Components/LMSHeader'
import { usestore } from "../../Store/ContextStore";
import CourseCard from "../../Components/Cardss/CourseCard";
import BlurText from "../../Animations/BlurText";


const Home = () => {
  const [courses, setCourses] = useState([]);
  const {url}=usestore()

  useEffect(() => {
    fetch(`${url}/api/courses/getAllCourses`) // Backend se courses fetch karna
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        
        setCourses(data)

      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <LMSHeader/>
    <div className="h-[600px] w-[100%] md:px-20  bg-blue-400 flex items-center md:justify-start "style={{ backgroundSize:'cover',objectFit:'fill',backgroundRepeat:'no-repeat', backgroundPosition: 'center',backgroundImage:`url("https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600")`} } >
    <div className="flex flex-col md:w-[40%] w-full ">
<h1 className="text-3xl text-white font-bold"> Join SkillTern now..!</h1>
<BlurText
  text="The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field."
  delay={50}
  animateBy="words"
  direction="top"
 
  className="text-xl text-white"
/>

    </div>
    </div>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
         <CourseCard rout={`/LMS/course/${course._id}`} Label="Enroll Now" key={index} id={course._id} title={course.CourseName} image={course.CoursePic} description={course.CourseDescription} price={course.CoursePrice} />
        ))}
      </div>
      </div>
   
    </>
  );
};

export default Home;
