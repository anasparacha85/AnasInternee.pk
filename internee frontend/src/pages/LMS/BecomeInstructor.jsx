import { useEffect, useRef, useState } from "react";
import { usestore } from "../../Store/ContextStore";
import { toast } from "react-toastify";
import { Inspect, InspectIcon } from "lucide-react";

export const BecomeInstructorForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    message: "",
    document: null,
  });

  const formref = useRef();
  const pendref = useRef();
  const { user, url, jwtToken, Instructors, setInstructors } = usestore();
console.log(user);
console.log(Instructors);

  useEffect(() => {
    if (Instructors.length>0 && user.InstructorStatus === "pending" && formref.current && pendref.current) {
      formref.current.classList.add("hidden");
      pendref.current.classList.remove("hidden");
    }
  }, [user.InstructorStatus,Instructors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "email") return;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validExtensions.includes(file.type)) {
        toast.error("Only PDF and DOCX files are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size should be less than 2MB.");
        return;
      }
      setFormData({ ...formData, document: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", user.name);
    formdata.append("email", user.email);
    formdata.append("address", formData.address);
    formdata.append("phone", formData.phone);
    formdata.append("message", formData.message);
    formdata.append("document", formData.document);

    try {
      const response = await fetch(`${url}/api/instructor/apply`, {
        method: "POST",
        body: formdata,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      const data = await response.json();
      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else if (data.FailureMessage) {
        toast.error(data.FailureMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
  
     
    <div className="flex flex-col justify-center items-center w-4/4  min-h-screen bg-gray-100 ">
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-[92vw] md:w-[100%]">
      <h2 className="text-xl font-semibold mb-4 flex gap-4 text-gray-500 "> <Inspect className="mt-1"/> Become a instructor</h2>
      </div>
      <div ref={pendref} className="bg-white hidden  shadow-md rounded-lg p-6 w-[100%] ">

  {/* Table */}
  <div className="bg-white shadow-md rounded-lg p-4 w-[92vw] md:w-full">
    <h2 className="text-xl font-semibold mb-4 text-gray-500">Your Application</h2>
    <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center mb-4">
      <label className="text-gray-600">
        Show
        <select className="border rounded-md mx-2 px-2 py-1">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        entries
      </label>
      <input type="text" placeholder="Search..." className="border px-3 py-1 rounded-md" />
    </div>

    {/* Wrap the table in a div with overflow-x-auto for horizontal scrolling */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-white">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Document</th>
            <th className="p-2">Details</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {Instructors.map((app, index) => (
            <tr key={app.id} className="bg-gray-200">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 text-center">{app.name}</td>
              <td className="p-2 text-center">
                <button className="bg-indigo-500 text-white px-3 py-1 rounded-md">
                  ℹ️ {app.document}
                </button>
              </td>
              <td className="p-2 text-center">-</td>
              <td className="p-2 text-center">
                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-end mt-4">
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">1</button>
    </div>
  </div>
</div>
      <div ref={formref} className="bg-white   shadow-md rounded-lg p-6 w-[100%] ">
        {/* Header */}
        <div className="bg-blue-100 text-blue-700 p-4 rounded-lg mb-6">
          <strong>Heads up!</strong> Fill all the fields carefully and share any
          documents with us to help us evaluate you as an instructor.
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
           disabled
              className="w-full border rounded-lg px-3 py-2 mt-1"
              required
            />
            <small className="text-gray-500">Your name is required</small>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={user.email}
          disabled
              className="w-full border rounded-lg px-3 py-2 mt-1"
              required
            />
            <small className="text-gray-500">Your email is required</small>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              required
            ></textarea>
            <small className="text-gray-500">Your address is required</small>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              required
              placeholder="Your phone number will go here"
            />
            <small className="text-gray-500">Your phone number is required</small>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700">Any Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="If any message you want to share"
            ></textarea>
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-gray-700">Document</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              name="document"
              onChange={handleFileChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
   
  );
};

export default BecomeInstructorForm;
