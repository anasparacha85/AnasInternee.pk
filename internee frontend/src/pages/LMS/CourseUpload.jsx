import { useState } from "react";
import { usestore } from "../../Store/ContextStore";

export const CourseUpload = () => {
  const [courseData, setCourseData] = useState({
    CourseName: "",
    CourseCategory: "",
    CourseDescription: "",
    CoursePrice: "",
    CoursePic: "",
    CoursePreviewVideo: "",
    lessons: [],
  });
const {url,jwtToken}=usestore()
  const [lesson, setLesson] = useState({ title: "", videoUrl: "" });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleLessonChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const addLesson = () => {
    setCourseData({ ...courseData, lessons: [...courseData.lessons, lesson] });
    setLesson({ title: "", videoUrl: "" }); // Clear input
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    fetch(`${url}/api/courses/uploadCourses`,{
      method:'POST',
      body:JSON.stringify(courseData),
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${jwtToken}`
      },
    
    }).then((response)=>{
      if (response.ok) {
        alert("Course uploaded successfully!");
        setCourseData({
          CourseName: "",
          CourseCategory: "",
          CourseDescription: "",
          CoursePrice: "",
          CoursePic: "",
          CoursePreviewVideo: "",
          lessons: [],
        });
      }
      return response.json()
    }).then((data)=>{
      console.log("courses",data);
      
    }).catch((error)=>{
      console.log(error);
      
    })

 
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="CourseName" placeholder="Course Name" value={courseData.CourseName} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="CourseCategory" placeholder="Category" value={courseData.CourseCategory} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="CourseDescription" placeholder="Description" value={courseData.CourseDescription} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="CoursePrice" placeholder="Price" value={courseData.CoursePrice} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="CoursePic" placeholder="Course Image URL" value={courseData.CoursePic} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="CoursePreviewVideo" placeholder="Preview Video URL" value={courseData.CoursePreviewVideo} onChange={handleChange} className="w-full border p-2 rounded" />

        <h2 className="text-lg font-semibold mt-4">Add Lessons</h2>
        <div className="flex gap-2">
          <input type="text" name="title" placeholder="Lesson Title" value={lesson.title} onChange={handleLessonChange} className="border p-2 rounded flex-1" />
          <input type="text" name="videoUrl" placeholder="Video URL" value={lesson.videoUrl} onChange={handleLessonChange} className="border p-2 rounded flex-1" />
          <button type="button" onClick={addLesson} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>

        <ul className="list-disc ml-5">
          {courseData.lessons.map((l, i) => (
            <li key={i}>{l.title} - {l.videoUrl}</li>
          ))}
        </ul>

        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">Upload Course</button>
      </form>
    </div>
  );
};

export default CourseUpload;
