import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { usestore } from "../../Store/ContextStore";
import Jobscard from "../../Components/Cardss/Jobscard";
import { toast } from "react-toastify";

export const  PostJob=()=> {
  const [formData, setFormData] = useState({
    JobCategory: "",
    JobName: "",
    JobDescription: "",
    JobType: "Full-time",
    JobLocation: "",
    JobDuration: "",
    CategoryImage: null,
    JobImage: null,
  });
  const {url,jwtToken}=usestore()

  const jobCategories = ["Backend Development", "App Development", "Graphic Design","ChatBot Development","FrontEnd Development"];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Freelance"];
  const jobTimes = ["2 Months", "4 Months", "6 Months","Proper Job"];
const [job, setjob] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ Create FormData object for file uploads
    const formDataToSend = new FormData();
    formDataToSend.append("JobCategory", formData.JobCategory);
    formDataToSend.append("JobName", formData.JobName);
    formDataToSend.append("JobDescription", formData.JobDescription);
    formDataToSend.append("JobType", formData.JobType);
    formDataToSend.append("JobLocation", formData.JobLocation);
    formDataToSend.append("JobDuration", formData.JobDuration);
    formDataToSend.append("CategoryImage", formData.CategoryImage); // File
    formDataToSend.append("JobImage", formData.JobImage); // File

    try {
        const response = await fetch(`${url}/api/jobs/post-a-job`, {
            method: "POST",
            headers:{
              "Authorization":`Bearer ${jwtToken}`
            },
            body: formDataToSend,  // ✅ No `Content-Type` header needed, browser sets it automatically
        });

        const data = await response.json();
        console.log("Response:", data);
          if(data.SuccessMessage){
                toast.success(data.SuccessMessage)
                setjob(data.job)
              }
              if(data.FailureMessage){
                toast.error(data.FailureMessage)
              }
      
    } catch (error) {
        console.error("Error:", error);
    }
};


  return (
    <>
    
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
       
      <h2 className="text-2xl font-semibold text-center mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <select name="JobCategory" value={formData.jobCategory} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="">Select Job Category</option>
          {jobCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <input type="file" name="CategoryImage" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" required />

        <input type="text" name="JobName" placeholder="Job Name" value={formData.JobName} onChange={handleChange} className="w-full p-2 border rounded-md" required />

        <input type="file" name="JobImage" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" required />

        <textarea name="JobDescription" placeholder="Job Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-md h-28" required />

        <select name="JobType" value={formData.jobType} onChange={handleChange} className="w-full p-2 border rounded-md">
          {jobTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>

        <input type="text" name="JobLocation" placeholder="Job Location" value={formData.jobPlace} onChange={handleChange} className="w-full p-2 border rounded-md" required />

        <select name="JobDuration" value={formData.jobTime} onChange={handleChange} className="w-full p-2 border rounded-md" required>
          <option value="">Select Job Duration</option>
          {jobTimes.map((time) => <option key={time} value={time}>{time}</option>)}
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
          Post Job
        </button>
      </form>
  
 
    </div>

  
    </>
  );
}
export default PostJob;