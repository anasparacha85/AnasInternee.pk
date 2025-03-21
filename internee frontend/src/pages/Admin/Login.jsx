import React, { useEffect } from 'react'
import { usestore } from '../../Store/ContextStore'
import Aos from 'aos'
import 'aos/dist/aos.css'
import BaseInput from '../../Components/Inputs/BaseInput'
import { useState } from 'react'
import { toast } from 'react-toastify'
import ForgetPasswordModal from '../../Modals/ForgetPasswordModal'


const Login = () => {
  useEffect(()=>{
    Aos.init()
   },[])
  const [user, setuser] = useState({email:"",password:""})
  const {url,AdminLoginOpen,setAdminLoginOpen,AdminSignupOpen,setAdminSignupOpen,InterneeLoginOpen,setInterneeLoginOpen,InterneeSignupOpen,setInterneeSignupOpen,SaveTokenToLs,SaveAdminKeyToLs,SuccessMessage,setSuccessMessage,forgetpasswordmodalopen,setforgetpasswordmodalopen}=usestore()
  const [FailureMessage, setFailureMessage] = useState(null)
 
  

 const onchange=(e)=>{
const {name,value}=e.target;
setuser({...user,[name]:value})

 }
 const onsubmit=(e)=>{
  e.preventDefault()
  fetch(`${url}/Api/Auth/Login`,{
    method:'POST',
    body:JSON.stringify(user),
    headers:{
      'Content-Type':'application/json'
    }
  }).then((response)=>{
   
    return response.json()
  }).then((data)=>{
    console.log(data);
    if(data.token){
      SaveTokenToLs(data.token)
    }
    if(data.AdminKey){
      SaveAdminKeyToLs(data.AdminKey)
    }
    if(data.SuccessMessage){
      setuser({email:"",password:""})
      toast.success(data.SuccessMessage)
      setSuccessMessage(data.SuccessMessage)
      setAdminLoginOpen(false)
      
     

    }
   
    if(data.FailureMessage){
      setFailureMessage(data.FailureMessage)
      toast.error(data.FailureMessage)
    }
    else{
      setFailureMessage('')
    }
    
  }).catch((error)=>{
  toast.error(error.FailureMessage)
    
  })
  }
  
    const closeModal=()=>{
        setAdminLoginOpen(false)
    }
    
    if(!AdminLoginOpen) return null;
 
    return (
    <div>
       {/* Modal */}
       
       <div className="fixed inset-0 bg-black/10  flex items-start justify-center z-50 " 
   style={{opacity:"10px"}}
   >
    
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="bg-white rounded-lg w-[400px] py-6 px-4 relative mt-10">
        <button
          className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
            <h2 className="text-2xl font-semibold text-start mb-6">Login</h2>
          
            <hr />
           {SuccessMessage?<div className='w-full flex justify-center bg-green-600 text-white'>{SuccessMessage}</div>
           :FailureMessage?<div className='w-full flex justify-center bg-red-600 text-white'>{FailureMessage}</div>:
           <div></div>
           }
            
            <br />
            <form onSubmit={onsubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
               <BaseInput type='email' value={user.email} onchange={onchange} name='email' placeholder='enter your email'/>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <BaseInput type='password' value={user.password} onchange={onchange} name='password' placeholder='enter your password'/>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
              >
                Login
              </button>
            </form>
            <ForgetPasswordModal  />
<div className='flex flex-col text-center'>

<p className="text-sm mt-4">
  <button
    className="text-green-600 cursor-pointer"
    onClick={() => setforgetpasswordmodalopen(true)}
  >
    Forgot Password?
  </button>
</p>
            <div className="mt-4 ">
              <p className="text-sm">
                Don't have an account?{" "}
                <button  className="text-green-500 cursor-pointer" onClick={() => {setAdminLoginOpen(false); setAdminSignupOpen(true)}}>
                  Sign up
                </button>
              </p>
            </div>

           
</div>

          </div>
        </div>
      
   
    </div>
  )
}

export default Login
