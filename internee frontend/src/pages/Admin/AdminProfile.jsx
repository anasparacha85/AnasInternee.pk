import { useState } from "react";
import { Bold, Italic, Save } from "lucide-react";
import { usestore } from "../../Store/ContextStore";
import Header from "../../Components/Header";

export const AdminProfile = () => {
  
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const {user,url,jwtToken,setuser}=usestore()
  console.log(user.Age);
  

  let space=user?user.name.indexOf(" "):" "
  
  const [formdata, setformdata] = useState({
    FirstName:user.name.substring(0,space) ,
    LastName:user.name.substring(space+1) ,
   
    BioGraphy:user.BioGraphy ,
    Linkedin:user.Linkedin ,
    Facebook:user.Facebook ,
    Instagram:user.Instagram ,
    Age:user.Age ,
  })
  

  // Function to apply formatting
  const applyFormatting = (style) => {
    const textarea = document.getElementById("bioText");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formdata.BioGraphy.substring(start, end);
  
    if (selectedText) {
      let updatedText = formdata.BioGraphy;
      if (style === "bold") {
        updatedText =
          formdata.BioGraphy.substring(0, start) +
          `**${selectedText}**` +
          formdata.BioGraphy.substring(end);
      } else if (style === "italic") {
        updatedText =
          formdata.BioGraphy.substring(0, start) +
          `*${selectedText}*` +
          formdata.BioGraphy.substring(end);
      }
      setformdata((prev) => ({ ...prev, BioGraphy: updatedText }));
    }
  };
  
 
const onchange=(e)=>{
  const {name,value}=e.target;
  setformdata({...formdata,[name]:value})
}

const onsubmit=(e)=>{
e.preventDefault();
fetch(`${url}/api/user/UpdateUserProfile`,{
  method:'POST',
  body:JSON.stringify(formdata),
  headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${jwtToken}`
  }
})
.then((res)=>{
  return res.json()
}).then((data)=>{
 console.log(data);
 setuser(data.finddata)

  
 
}).catch((error)=>{
console.log(error);

})
}

  return (
    <>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
       
       {/* Profile Heading */}
       <div className="text-center">
       <h1 className="text-2xl font-bold mb-2">Profile</h1>
       <p className="text-gray-600 mb-4">
         Add information about yourself to share on your profile.
       </p>
       </div>
      
 <form onSubmit={onsubmit}>
       {/* Basic Information Fields */}
       <div className="flex flex-col  gap-4">
         <input
         name="FirstName"
         value={formdata.FirstName}
           type="text"
           onChange={onchange}
           placeholder="First Name"
           className="p-2 border rounded-md w-full"
         />
         <input
         name="LastName"
         value={formdata.LastName}
         onChange={onchange}
           type="text"
           placeholder="Last Name"
           className="p-2 border rounded-md w-full"
         />
         <input
         name="Age"
           type="number"
           value={formdata.Age}
           onChange={onchange}
           placeholder="Age"
           className="p-2 border rounded-md w-full md:col-span-2"
         />
       </div>
 
       {/* Biography Section */}
       <div className="mt-6">
         <label className="block font-semibold mb-1">Biography</label>
         <div className="flex space-x-2 mb-2">
           <button
             onClick={() => applyFormatting("bold")}
             className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300"
           >
             <Bold size={18} />
           </button>
           <button
             onClick={() => applyFormatting("italic")}
             className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300"
           >
             <Italic size={18} />
           </button>
         </div>
         <textarea
   name="BioGraphy"
   id="bioText"
   value={formdata.BioGraphy}
   onChange={(e) =>
     setformdata((prev) => ({ ...prev, BioGraphy: e.target.value }))
   }
   rows="4"
   className="w-full p-2 border rounded-md"
   placeholder="Write about yourself..."
 />
 
       </div>
 
       {/* Social Media Links */}
       <div className="mt-6 space-y-3">
         <input
         name="Linkedin"
         value={formdata.Linkedin}
         onChange={onchange}
           type="text"
           placeholder="Add your LinkedIn link"
           className="p-2 border rounded-md w-full"
         />
         <input
         name="Facebook"
         value={formdata.Facebook}
         onChange={onchange}
           type="text"
           placeholder="Add your Facebook link"
           className="p-2 border rounded-md w-full"
         />
         <input
         name="Instagram"
         value={formdata.Instagram}
         onChange={onchange}
           type="text"
           placeholder="Add your Instagram link"
           className="p-2 border rounded-md w-full"
         />
       </div>
 
       {/* Save Button */}
       <button type="submit" className="mt-6 w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center">
         <Save className="mr-2" size={18} /> Save
       </button>
       </form>
     </div>
    </>
    
  );
};

export default AdminProfile;
