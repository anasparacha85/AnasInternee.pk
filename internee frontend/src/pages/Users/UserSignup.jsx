import React, { useEffect,useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import BaseInput from '../../Components/Inputs/BaseInput'
import { usestore } from '../../Store/ContextStore'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'


const UserSignup = () => {
  const {url,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,SaveTokenToLs,SaveAdminKeyToLs,isLoading,setisLoading}=usestore()
   const [FailureMessage, setFailureMessage] = useState(null)
   const [SuccessMessage, setSuccessMessage] = useState(null)

    const [user, setuser] = useState({name:"",email:"",password:"",ConfirmPassword:""})
    const onchange=(e)=>{
        const {name,value}=e.target;
        setuser({...user,[name]:value})

    }

    const onsubmit=(e)=>{
e.preventDefault();
setisLoading(true)
fetch(`${url}/Api/Auth/register`,{
  method:'POST',
  body:JSON.stringify(user),
  headers:{
    'Content-Type':'application/json'
  },
 
}).then((response)=>{
return response.json()
}).then((data)=>{
  console.log(data);
  if(data.SuccessMessage){
    setSuccessMessage(data.SuccessMessage)
    setuser({name:"",email:"",password:"",ConfirmPassword:""})
    toast.success(data.SuccessMessage)
    setUserSignupOpen(false)
    setUserLoginOpen(true)
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
   useEffect(()=>{
    Aos.init()
   },[])
    const closeModal=()=>{
        setUserSignupOpen(false)
    }
    if(!UserSignupOpen) return null;
 
    return (
    <div>
       {/* Modal */}
       
       <div className="fixed inset-0 bg-black/10  flex items-start justify-center z-50 " 
   style={{opacity:"10px"}}
   >
    
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="bg-white rounded-lg w-[500px] py-6 px-4 relative mt-5">
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
            <h2 className="text-2xl font-semibold text-center mb-6">Signup as User</h2>
          
            <hr />
            {SuccessMessage?<div className='w-full flex justify-center bg-green-600 text-white'>{SuccessMessage}</div>
           :FailureMessage?<div className='w-full flex justify-center bg-red-600 text-white'>{FailureMessage}</div>:
           <div></div>
           }
            <br />
            <form onSubmit={onsubmit}>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
               <BaseInput type='text' placeholder='Enter your Name' value={user.name} name='name' onchange={onchange} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
               <BaseInput type='email' placeholder='Enter Your Email' value={user.email} name='email' onchange={onchange}/>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <BaseInput type='password' placeholder='Enter Your password' value={user.password} name='password' onchange={onchange}/>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Confirm  Password
                </label>
                <BaseInput type='password' placeholder='Enter Your password' value={user.ConfirmPassword} name='ConfirmPassword' onchange={onchange}/>

              </div>
              
           
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
              >
                {isLoading?<ClipLoader size={20} color='white' loading={isLoading}/>: "Signup"}
               
              </button>
            </form>
            <h1 className='text-gray-800 text-center'>OR</h1>
            <button
  type="button"
  onClick={() => window.location.href = `${url}/api/auth/google`}
  className="w-full flex cursor-pointer
   items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-md hover:bg-green-600 transition mt-3"
>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
  SignUp with Google
</button>
         
            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <button className="text-green-500 cursor-pointer" onClick={() => {setUserSignupOpen(false);setUserLoginOpen(true)}}>
                  Login
                </button>
              </p>
            </div>

           
          </div>
        </div>
      
   
    </div>
  )
}

export default UserSignup
