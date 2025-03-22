import React, { useState } from "react";
import BaseInput from "./Inputs/BaseInput";
import Header from "./Header";
import { usestore } from "../Store/ContextStore";
import { useNavigate } from "react-router";
import CountUp from "../Animations/countup";
import SplitText from "../Animations/SplitText";
// Hero Section Component
export const HeroSection=()=> {
  const backgroundimage="https://skillhub-woad.vercel.app/assets/cloud-home-hero-C5Gbf_8a.webp"
  const [formdata, setformdata] = useState({jobname:"",jobcategory:""})
  const {jobbyquery,setjobbyquery,url,jobresponse,setjobresponse}=usestore()
  const navigate=useNavigate()
  const onchange=(e)=>{
    const {name,value}=e.target;
    setformdata({...formdata,[name]:value})
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      fetch(`${url}/api/jobs/findjobs?name=${formdata.jobname}&type=${formdata.jobtype}`,{
        method:'GET'
      }).then((res)=>{
if(res.ok){
  setjobresponse(res)
}
        return res.json()
        
      }).then((data)=>{
        setjobbyquery(data)
navigate('/job-portal/hiring')
        console.log(data);
        
      }).catch((error)=>{
        console.log(error);
        
      })
    }
    return (
      <section className="bg-green-500 text-white h-screen  p-16 lg:pl-60 text-center lg:text-start bg-custom" style={{backgroundImage:`url( ${backgroundimage})`}}>
       
        <p className="text-lg mb-6">We have <span className="mx-1">
        <CountUp
  from={1}
  to={850000}
  separator=","
  direction="up"
  duration={2}
  className="count-up-text"
/>
          </span>   great job offers you deserve!</p>
 

        <h1 className="lg:text-[55px] text-3xl font-bold mb-4">  <SplitText
  text="Your Dream Job"
  className=""
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
 
/> </h1>
        <h1 className="lg:text-[60px] text-3xl font-semibold mb-8"><SplitText
  text="is Waiting"
  className=""
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  
/></h1>
        <span className="bg-white text-gray-800 mt-6 py-3 px-6 text-lg rounded-[5px] ">Find a Job </span>
        <form onSubmit={handlesubmit}>
<div className="flex flex-col lg:flex-row gap-2.5 bg-white py-10 px-2 w-full lg:w-[70%] ">  
 
 <input type="text" value={formdata.jobname} onChange={onchange} name="jobname" placeholder="eg..App Development,Backend Development" className="lg:w-[80%] text-gray-700 p-2 rounded-l bg-white border-1 border-solid border-black" />
  <input type="text" value={formdata.jobtype} onChange={onchange} name="jobtype" placeholder="eg:Internship,full-time ,part-time etc" className="lg:w-[80%] p-2 text-gray-700  rounded-l bg-white border-1 border-solid border-black" />
<button type="submit" className="bg-green-600 px-4 py-2 rounded-r text-white lg:w-[80%] cursor-pointer">Search</button>


 
  </div>
  </form>
       
      </section>
    );
  }
  export default HeroSection