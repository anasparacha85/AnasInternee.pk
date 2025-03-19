import React, { useEffect,useState } from 'react'
import { usestore } from '../../Store/ContextStore'
import Aos from 'aos'
import 'aos/dist/aos.css'
import BaseInput from '../../Components/Inputs/BaseInput'
import { toast } from 'react-toastify'


const Signup = () => {
  const {url,AdminLoginOpen,setAdminLoginOpen,AdminSignupOpen,setAdminSignupOpen,InterneeLoginOpen,setInterneeLoginOpen,InterneeSignupOpen,setInterneeSignupOpen,SaveTokenToLs,SaveAdminKeyToLs}=usestore()
   const [FailureMessage, setFailureMessage] = useState(null)
   const [SuccessMessage, setSuccessMessage] = useState(null)

    const [user, setuser] = useState({name:"",email:"",password:"",ConfirmPassword:"",AdminKey:""})
    const onchange=(e)=>{
        const {name,value}=e.target;
        setuser({...user,[name]:value})

    }

    const onsubmit=(e)=>{
e.preventDefault();
fetch(`${url}/Api/Auth/Admin/Register`,{
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
    toast.success(data.SuccessMessage)
    setuser({name:"",email:"",password:"",ConfirmPassword:"",AdminKey:""})
    setAdminSignupOpen(false)
    setAdminLoginOpen(true)
  }
 
  if(data.FailureMessage){
    setFailureMessage(data.FailureMessage)
    toast.error(data.FailureMessage)
  }
  
  
  
}).catch((error)=>{
 toast.error(error.FailureMessage)
  
})
    }
   useEffect(()=>{
    Aos.init()
   },[])
    const closeModal=()=>{
        setAdminSignupOpen(false)
    }
    if(!AdminSignupOpen) return null;
 
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
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
            <h2 className="text-2xl font-semibold text-start mb-6">Signup as Admin</h2>
          
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
              
              <div className="mb-6">
                <label htmlFor="Admin key" className="block text-sm font-medium text-gray-700">
               Secret Admin Key
                </label>
                <BaseInput type='password' placeholder='Enter Secret Admin Key ' value={user.AdminKey} name='AdminKey' onchange={onchange}/>

              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
              >
                Signup
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <button className="text-green-500 cursor-pointer" onClick={() => {setAdminSignupOpen(false);setAdminLoginOpen(true)}}>
                  Login
                </button>
              </p>
            </div>

           
          </div>
        </div>
      
   
    </div>
  )
}

export default Signup
