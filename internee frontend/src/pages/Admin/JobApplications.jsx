import { useEffect, useState } from "react";
import { usestore} from "../../Store/ContextStore";

export const JobApplications = () => {
  const { url, jwtToken } = usestore();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    fetch(`${url}/api/admin/ViewJobApplications`, {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${jwtToken}`
        
      },
    })
      .then((res) => {return res.json()})
      .then((data) => {
        console.log("hello aplicatoion",data);
        setApplications(data);
       
        
      })
      .catch((err) => {
        console.error("Error fetching job applications:", err);
       
      
       
      }).finally(()=>{
        setLoading(false);
      });
  }, [url, jwtToken]);

  return (
    <div className="lg:max-w-4xl w-screen mx-auto p-6 bg-white shadow-md rounded-lg mt-10 overflow-x-scroll">
       
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-screen lg:w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Job Type</th>
                <th className="border p-2">Cover Letter</th>

                <th className="border p-2">Resume</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.email}</td>
                  <td className="border p-2">{app.jobPosition}</td>
                  <td className="border p-2">{app.coverLetter}</td>
                  <td className="border p-2">
                    <a
                      href={`${url}/${app.cv}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="border p-2 flex flex-col gap-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer">Approve</button>
                    <button className="bg-red-600 text-white px-3 py-1 ml-2 rounded cursor-pointer">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplications;
