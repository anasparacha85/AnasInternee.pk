import React, { useEffect } from 'react'
import { usestore } from '../../Store/ContextStore'
import Aos from 'aos'
import 'aos/dist/aos.css'
import BaseInput from '../../Components/Inputs/BaseInput'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import ForgetPasswordModal from '../../Modals/ForgetPasswordModal'


const UserLogin = () => {
  useEffect(()=>{
    Aos.init()
   },[])
  const [user, setuser] = useState({email:"",password:""})
  const {url,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,SaveTokenToLs,SaveAdminKeyToLs,SuccessMessage,setSuccessMessage,isLoading,setisLoading,forgetpasswordmodalopen,setforgetpasswordmodalopen}=usestore()
  const [FailureMessage, setFailureMessage] = useState(null)
 
 const onchange=(e)=>{
const {name,value}=e.target;
setuser({...user,[name]:value})

 }
 const onsubmit=(e)=>{
  e.preventDefault()
  setisLoading(true)
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
      setSuccessMessage(data.SuccessMessage)
      toast.success(data.SuccessMessage)
      setuser({email:"",password:""})
      setUserLoginOpen(false)
     
     

    }
   
    if(data.FailureMessage){
      setFailureMessage(data.FailureMessage)
      toast.error(data.FailureMessage)
    }
   
    
  }).catch((error)=>{
   toast.error(error.FailureMessage)
    
  }).finally(()=>{
    setisLoading(false)
  })
  }
  
    const closeModal=()=>{
        setUserLoginOpen(false)
    }
    
    if(!UserLoginOpen ) return null
   
 
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
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
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
                 {isLoading?<ClipLoader size={20} color='white' loading={isLoading}/>: "Login"}
              </button>
            </form>

            <h1 className='text-gray-800 text-center'>OR</h1>
            <button
  type="button"
  onClick={() => window.location.href = `${url}/api/auth/google`}
  className="w-full cursor-pointer
   flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-md hover:bg-green-600 transition mt-3"
>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
  SignIn with Google
</button>
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
</div>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Don't have an account?{" "}
                <button  className="text-green-500 cursor-pointer" onClick={() => { setUserLoginOpen(false); setUserSignupOpen(true); }}>
                  Sign up
                </button>
              </p>
            </div>

           
          </div>
        </div>
      
   
    </div>
  )
}

export default UserLogin
