import { useState } from "react";
import { usestore } from "../../Store/ContextStore";
import { useParams } from "react-router";

export const AddLessons = ({  }) => {
  const [formdata, setformdata] = useState({title:"",videoURL:""});
 const onchange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
 }
 const params=useParams()
 const {url}=usestore()
  const handleSubmit = (e) => {
    e.preventDefault();
   fetch(`${url}/api/courses/addlesson/${params.id}`,{
    method:'POST',
    headers:{
'Content-Type':'application/json'
    },
    body:JSON.stringify(formdata)
   }).then((res)=>{
    if(res.ok){
        setformdata({title:"",vidoURL:""})
    }
    return res.json()
   }).then((data)=>{
    console.log(data);
    
   }).catch((error)=>{
    console.log(error);
    
   })
   
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add a Lesson</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Lesson Title */}
        <div>
          <label className="block text-gray-700 font-medium">Lesson Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter lesson title"
            required
            name="title"
            value={formdata.title}
            onChange={onchange}
          />
        </div>

        {/* Video URL */}
        <div>
          <label className="block text-gray-700 font-medium">Video URL</label>
          <input
            type="url"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter video URL"
            value={formdata.videoURL}
            name="videoURL"
            onChange={onchange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Add Lesson
        </button>
      </form>
    </div>
  );
};

export default AddLessons;
