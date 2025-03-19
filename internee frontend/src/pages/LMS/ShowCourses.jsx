import React, { useEffect, useState } from "react";
import { usestore } from "../../Store/ContextStore";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../../Components/OverLays/DeleteCOnfirmation" // ✅ Fix import casing
import { toast } from "react-toastify";

export const ShowCourses = () => {
  const [courses, setCourses] = useState([]);
  const { url ,jwtToken} = usestore();

  // ✅ Fetch courses on component mount
  useEffect(() => {
    fetch(`${url}/api/courses/getAllCourses`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // ✅ Open Popup with Course Details
  const openPopup = (type, details) => {
    setItemToDelete({ type, details });
    setPopupOpen(true);
  };

  // ✅ Delete course and update UI
  const handleDelete =  (details) => {
    
        fetch(`${url}/api/courses/DeleteCourse/${details.id}`, {
        method: "DELETE",
        headers:{
          "Authorization":`Bearer ${jwtToken}`
        }
      }).then((response)=>{
        if (response.ok) {
          // ✅ Remove deleted course from state
          setCourses((prevCourses) => prevCourses.filter((c) => c._id !== details.id));
          setPopupOpen(false);
        }
        return response.json();
      }).then((data)=>{
        console.log(data);
        if(data.SuccessMessage){
          toast.success(data.SuccessMessage)
        }
        if(data.FailureMessage){
          toast.error(data.FailureMessage)
        }
        
        
      }).catch((error)=>{
        console.log(error);
        if(data.FailureMessage){
          toast.error(error.FailureMessage)
        }
        
        
      })

     
   

    
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="border rounded-lg shadow-lg p-4">
              <img
                src={course.CoursePic}
                alt={course.CourseName}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{course.CourseName}</h2>
              <p className="text-gray-500">{course.CourseCategory}</p>
              <p className="font-bold text-lg">${course.CoursePrice}</p>

              {/* ✅ Open popup with course details */}
              <button
                onClick={() =>
                  openPopup("Course", { id: course._id, Title: course.CourseName })
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg mb-3"
              >
                Delete Course
              </button>

              <Link
                to={`/LMS/course/addlesson/${course._id}`}
                className="mt-2 block bg-blue-600 text-white py-2 px-4 rounded text-center"
              >
                Add Lesson
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Confirmation Popup */}
      <DeleteConfirmation
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        onConfirm={handleDelete}
        item={itemToDelete || { type: "", details: {} }}
      />
    </div>
  );
};

export default ShowCourses;
