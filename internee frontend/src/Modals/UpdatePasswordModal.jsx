import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";


const UpdatePasswordModal = ({ isOpen, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { url ,forgetpasswordmodalopen,setforgetpasswordmodalopen,otpmodalopen,setotpmodalopen,updatepasswordmodalopen,setupdatepasswordmodalopen} = usestore();
  const [isLoading, setIsLoading] = useState(false);
  const otptoken=localStorage.getItem('otptoken')
  console.log(otptoken);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    setIsLoading(true);
    try {
      const response = await fetch(`${url}/Api/Auth/UpdatePassword`, {
        method: "PATCH",
        headers: { 
          "Authorization":otptoken,
          "Content-Type": "application/json"
        
         },
        body: JSON.stringify({ newPassword, confirmNewPassword }),
      });
      const data = await response.json();
      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage);
        setupdatepasswordmodalopen(false)
        setotpmodalopen(false)
        setforgetpasswordmodalopen(false)
      } else {
        toast.error(data.FailureMessage );
      }
    } catch (error) {
      toast.error(error.FailureMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!updatepasswordmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={()=>{setupdatepasswordmodalopen(false)}}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Update Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
