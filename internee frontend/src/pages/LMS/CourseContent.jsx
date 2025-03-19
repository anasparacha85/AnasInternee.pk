import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usestore } from "../../Store/ContextStore";

export const CourseContent = () => {
  const { id } = useParams();
  const { url } = usestore();
  const [course, setCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    fetch(`${url}/api/courses/course/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.Course){
          setCourse(data.Course);
          if(data.Course.CourseContent.length>0){
            setSelectedVideo(data.Course.CourseContent[0].videoUrl)
          }
        }
       
        // if(data.length>0){
        //     setCourse(data[0])
        //     if (data[0].CourseContent.length > 0) {
        //         setSelectedVideo(data[0].CourseContent[0].videoUrl); // Show first lesson by default
        //       }
        // }
      
        
       
      })
      .catch((err) => console.error(err));
  }, [id]);

   if (!course) return <div className="text-center text-lg font-semibold">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row h-screen">
     
      {/* Video Section */}
      <div className="flex-1 p-4 flex items-center justify-center">
        {selectedVideo ? (
          <iframe
            className="w-full  h-64 md:h-full border-2 border-gray-300 rounded-lg shadow-lg"
            src={selectedVideo}
            title="Course Video"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-lg font-semibold">Select a lesson to watch</p>
        )}
      </div>

       {/* Sidebar */}
       <div className="w-full md:w-1/4 bg-gray-100 p-4 overflow-y-auto border-r">
        <h2 className="text-xl font-bold mb-4">Course Content</h2>
        <ul>
          {course.CourseContent.map((lesson, index) => (
            <li
              key={lesson._id}
              className={`p-2 cursor-pointer rounded-md hover:bg-blue-200 ${
                selectedVideo === lesson.videoUrl ? " text-gray-700" : ""
              }`}
              onClick={() => setSelectedVideo(lesson.videoUrl)}
            >
              {index + 1}. {lesson.title}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CourseContent;
