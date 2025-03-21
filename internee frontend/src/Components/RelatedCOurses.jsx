import { ArrowRight } from "lucide-react";
import CourseCard from "./Cardss/CourseCard";
import { useNavigate } from "react-router";

const RelatedCourses = ({courses}) => {
    const navigate=useNavigate()

  return (
    <div className="mt-10 px-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Other Related Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
         <CourseCard key={index} id={course._id} Label={"Enroll Now"} title={course.CourseName} image={course.CoursePic} description={course.CourseDescription} price={course.CoursePrice}  rout={`/LMS/course/${course._id}`}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
