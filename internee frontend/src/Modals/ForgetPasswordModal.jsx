import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usestore } from "../Store/ContextStore";
import OtpModal from "./OtpModal";


const ForgetPasswordModal = () => {
  const [email, setEmail] = useState("");
  const { url,forgetpasswordmodalopen,setforgetpasswordmodalopen,otpmodalopen,setotpmodalopen,updatepasswordmodalopen,setupdatepasswordmodalopen } = usestore();
  const [isLoading, setIsLoading] = useState(false);

console.log(url);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${url}/Api/Auth/ForgetPassword`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email})
    }).then((res)=>{
        if(res.ok){
            setotpmodalopen(true)
          
           
        }
        console.log(res);
        
        return res.json()
    }).then((data)=>{
        console.log(data)
        if(data.SuccessMessage){
            toast.success(data.SuccessMessage)
            localStorage.setItem('otptoken',data.token)
            
          
        }
        if(data.FailureMessage){
            toast.error(data.FailureMessage)
        }
        
    }).catch((error)=>{
        console.log(error);
        
    }).finally(()=>
    setIsLoading(false))
  }

  if (!forgetpasswordmodalopen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={()=>setforgetpasswordmodalopen(false)}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password?</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Enter your email to reset password</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
      <OtpModal />
    </div>
  );
};

export default ForgetPasswordModal;
