import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usestore } from "../../Store/ContextStore";
import { PlayCircleIcon } from "lucide-react";
import RelatedCourses from "../../Components/RelatedCOurses";
import { toast } from "react-toastify";
import VideoOverLay from "../../Components/OverLays/VideoOverLay";
import LMSHeader from "../../Components/LMSHeader";
import { ClipLoader } from "react-spinners";

export const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const {
    url, jwtToken, isLoading, setisLoading,
    setUserLoginOpen,
  } = usestore();

  const [relatedCourses, setRelatedCourses] = useState([]);
  const [videourl, setvideourl] = useState('');
  const [videoPopupOpen, setvideopopupopen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getCourseById = async () => {
      try {
        const res = await fetch(`${url}/api/courses/course/${id}`);
        const data = await res.json();
        setCourse(data.Course);
        setRelatedCourses(data.relatedcourses || []);
      } catch (err) {
        console.error("Error fetching course:", err);
        setCourse(null);
      }
    };
    getCourseById();

    // Check favorite status from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(id));
  }, [id]);

  const getEnrolled = () => {
    if (!jwtToken) {
      setUserLoginOpen(true);
      return;
    }
    setisLoading(true);
    fetch(`${url}/api/courses/course/enroll/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.SuccessMessage) toast.success(data.SuccessMessage);
        if (data.FailureMessage) toast.error(data.FailureMessage);
      })
      .catch(error => {
        console.log(error);
        toast.error("Enrollment failed");
      })
      .finally(() => setisLoading(false));
  };

  const toggleFavorite = () => {
    if (!jwtToken) {
      setUserLoginOpen(true);
      return;
    }

    const method = isFavorite ? "DELETE" : "POST";
    const endpoint = isFavorite
      ? `${url}/api/courses/removeFavorites/${id}`
      : `${url}/api/courses/addFavorites/${id}`;

    fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.SuccessMessage) {
          toast.success(data.SuccessMessage);
          const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
          let updatedFavorites;
          if (isFavorite) {
            updatedFavorites = storedFavorites.filter(courseId => courseId !== id);
          } else {
            updatedFavorites = [...storedFavorites, id];
          }
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          setIsFavorite(!isFavorite);
        } else if (data.FailureMessage) {
          toast.error(data.FailureMessage);
        }
      })
      .catch(error => console.log("Error:", error));
  };

      




  if (!course) {
    return <div className="text-center text-gray-500 text-lg">Loading course details...</div>;
  }

  return (
    
    <div className="min-h-screen  text-white">
      <LMSHeader/>
      {/* Header Section */}
      <div className="bg-green-600 w-full mx-auto p-5  md:p-10">
        <h1 className="text-3xl font-bold">{course.CourseName}</h1>
        <p className="mt-2 text-lg w-full md:w-[60%] ">
         {course.CourseDescription}
        </p>
        <div className="flex items-center mt-3">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">BEGINNER</span>
          <span className="ml-4">⭐ 0 (0 Ratings) • 75 Students enrolled</span>
        </div>
      </div>

  <div className="flex flex-col md:flex-row md:justify-around ">
      {/* Curriculum Section */}
      <div className="bg-white text-black mt-6 p-6 rounded-lg shadow-md w-full md:w-3/5">
        <h2 className="text-xl font-bold">Curriculum for this course</h2>
        <p className="mt-2 text-sm">{course.CourseContent.length} Lessons • 06:51:01 Hours</p>
        <ul className="mt-4">
          {course.CourseContent.map((value,array)=>(
 <li className="p-2 border-b">📌 {value.title}</li>
          ))}
         
        </ul>
      </div>
      <div className="bg-blue-50 p-3 rounded-lg mb-6 md:-mt-40 w-full md:w-1/5">
      {/* Course Image with Play Button */}
      <div className="relative w-full h-40 mb-4">
        <img
          src={course.CoursePic} // Replace with actual image URL
          alt="Course Preview"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Video Play Button */}
        <button onClick={()=>{setvideourl(course.CoursePreviewVideo);setvideopopupopen(true)}} className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 hover:bg-opacity-50 transition duration-300 rounded-lg">
          <PlayCircleIcon className="w-24 h-24 text-white  hover:text-gray-400" />
        </button>
      </div>

      {/* Free Section */}
      <h3 className="text-xl font-bold mb-4 text-green-700">Free</h3>
      <div className="flex flex-col gap-3 sm:space-x-4 space-y-4 sm:space-y-0">
      <button
              onClick={toggleFavorite}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
            </button>
       
        <button onClick={getEnrolled} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
        {isLoading?<ClipLoader size={25} color="white" loading={isLoading}/>:"Get Enrolled"}   
        </button>
      </div>
      <p className="mt-4 text-green-600">Includes:</p>
      <ul className="list-disc list-inside text-green-600 space-y-2 mt-2">
        <li>06:51:01 Hours On demand videos</li>
        <li>{course.CourseContent.length} Lessons</li>
        <li>Access on mobile and TV</li>
        <li>Full lifetime access</li>
      </ul>
    </div>

     

 

    
    </div>
   
      <RelatedCourses courses={relatedCourses} />
      <VideoOverLay
        isopen={videoPopupOpen}
        closeModal={() => setvideopopupopen(false)}
        videourl={videourl}
      />

    </div>
  );
};
  
  export default CourseDetail;