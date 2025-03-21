import { useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";
import UpdatePasswordModal from "./UpdatePasswordModal";


const OtpModal = ({ }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const { url ,forgetpasswordmodalopen,setforgetpasswordmodalopen,otpmodalopen,setotpmodalopen,updatepasswordmodalopen,setupdatepasswordmodalopen} = usestore();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };
  const otptoken=localStorage.getItem('otptoken')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const combinedOtp = otp.join("");

    try {
      const response = await fetch(`${url}/Api/Auth/VerifyOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          "Authorization":otptoken
         },
        body: JSON.stringify({ otp: combinedOtp }),
      });
      if(response.ok){
        // onClose();
        setupdatepasswordmodalopen(true)

      }
      const data = await response.json();
      console.log(data);
      
      if (data.SuccessMessage) {
        toast.success(data.SuccessMessage);
       
      } else {
        toast.error(data.FailureMessage);
      }
    } catch (error) {
      toast.error(error.FailureMessage);
    } finally {
      setIsLoading(false);
     
    }
  };

  if (!otpmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={()=>setotpmodalopen(false)}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Enter the 5-digit OTP sent to your email</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg border rounded-md"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
      <UpdatePasswordModal />
    </div>
  );
};

export default OtpModal;
