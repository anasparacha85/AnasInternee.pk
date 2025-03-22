import { useState } from "react";
import { Bold, Italic, Save } from "lucide-react";
import { usestore } from "../../Store/ContextStore";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

export const Photo = () => {
  
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const {user,url,jwtToken,setUser,isLoading,setisLoading}=usestore()

  

 
  
  const [formdata, setformdata] = useState({
    profilePicture:user.profilePicture
   
  })
  

const onchange=(e)=>{
  const {name,files}=e.target;
  setformdata({...formdata,[name]:files[0]})
}

const onsubmit=(e)=>{
e.preventDefault();
const filedata=new FormData()
filedata.append('image',formdata.profilePicture)
setisLoading(true)
fetch(`${url}/api/user/UploadProfilePicture`,{
  method:'POST',
  body:filedata,
  headers:{
   
    'Authorization':`Bearer ${jwtToken}`
  }
})
.then((res)=>{
  return res.json()
}).then((data)=>{
 console.log(data);
 
if(data.SuccessMessage){
  toast.success(data.SuccessMessage)
  setUser(data.finddata)
}
if(data.FailureMessage){
  toast.error(data.FailureMessage)
}
  
 
}).catch((error)=>{
console.log(error);

}).finally(()=>{
  setisLoading(false)
})
}

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      {/* Profile Heading */}
      <div className="text-center">
      <h1 className="text-2xl font-bold mb-2"></h1>Account
      <p className="text-gray-600 mb-4">
        Add information about yourself to share on your profile.
      </p>
      </div>
     
<form onSubmit={onsubmit}>
      {/* Basic Information Fields */}
      <div className="flex flex-col  w-[100%]  gap-4">
        <div className=" border-green-700 w-[100%] rounded-[10px] py-2 px-4  border-2 border-solid ">
      <input type="file" name="profilePicture"  accept="image/*" onChange={onchange} className="w-[20%] bg-gray-400 rounded-2xl cursor-pointer  p-2 "required />

        </div>

       </div>

    
   
    
        
      
      {/* Save Button */}
      <button type="submit" className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex cursor-pointer items-center justify-center">
      {isLoading?<ClipLoader size={25} color="white" loading={isLoading}/>:<Save className="mr-2" size={18} /> }save   
      </button>
      </form>
    </div>
  );
};

export default Photo;
