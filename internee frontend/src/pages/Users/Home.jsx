import React, { useEffect, useRef } from 'react'
import UserHeader from '../../Components/UserHeader'
import DreamSection from '../../Components/DreamSection'
import { usestore } from '../../Store/ContextStore'
import Card from '../../Components/Cardss/Card'
import BlogsCart from '../../Components/Cardss/BlogsCart'
import FeatureSection from '../../Components/FeatureSection'
import OppositeFeatureSection from '../../Components/OppositeFeatureSection'
import DuplicateFeatureSection from '../../Components/DuplicateFeatureSection'
import Footer from '../../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ClipLoader } from 'react-spinners'
import Typed from 'typed.js';

export const UserHome = () => {
    // Create reference to store the DOM element containing the animation
   
  useEffect(()=>{
    Aos.init()
  },[])
   const {url, JobsCategories,user,isLoading,setisLoading}=usestore()
   if(isLoading){return <div className='h-screen w-screen flex justify-center items-center '><ClipLoader size={50 } color='blue' loading={isLoading}/></div>}
  return (
    <div className='overflow-x-hidden'>
        <UserHeader />
      <DreamSection/>
      <div className='w-screen flex justify-center mt-10'>
        <h1 className='font-bold text-5xl text-gray-900'>Trusted by the tech giants</h1>

      </div>
      <div className='w-full grid lg:grid-cols-7 grid-cols-4  gap-14 mt-10 overflow-x-hidden px-5'>
        <a href="https://moitt.gov.pk/"><img src="https://www.internee.pk/moit.webp" alt="Icon 1" className=" w-40" /></a>
      
        <a href="https://startup.google.com/"><img src="https://www.internee.pk/google.webp" alt="Icon 1" className="w-40" /></a>
        <a href="https://www.microsoft.com/en-pk/"><img src="https://www.internee.pk/microsoft.png" alt="Icon 1" className=" w-40" /></a>
        <a href="https://ignite.org.pk/"><img src="https://www.internee.pk/ignite.webp" alt="Icon 1" className=" w-40" /></a>
        <a href="https://zindigiprize.pk/"><img src="https://www.internee.pk/zindig.png" alt="Icon 1"className=" w-40" /></a>
        <a href="https://saylaniwelfare.com/"><img src="https://www.internee.pk/smit.png" alt="Icon 1"className=" w-40" /></a>
        <a href="https://pafla.org.pk/"><img src="https://www.internee.pk/PAFLA.png" alt="Icon 1"className=" w-40" /></a>
        
      </div>
      
      <div className='w-[100%] flex flex-col justify-center mt-10 mb-20'>
        <div className='w-full flex justify-center mb-6'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GQ1LVkaqnY-gzh-dECm3OBMbGX8l74Dfgg&s" alt="Icon 1" className=" w-20" />
        </div>
        <div className='w-full flex justify-center mb-6'>
        <h1 className='font-bold text-5xl text-gray-900 text-center'>What is Skilltern?</h1>
        </div>
        <div className='w-full flex justify-center '>
        <p className='font-normal text-gray-600 text-lg w-[60%] text-center'>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
</div>
      </div>
      {JobsCategories?<>
        <div className='grid lg:grid-cols-3 grid-cols-1 md:px-20 gap-10 '>
            {JobsCategories.map((value,index)=>(
               
                
                 <Card key={index} image={value.CategoryImage} title={value.JobCategory} Category={value.JobCategory} />
               
            ))}
        </div>
      </>:<div></div>}
      

        <div className='w-full h-auto text-center py-14'>
        <p className='text-lg text-gray-400'>Our Blogs</p>
        <h1 className='text-bold font-bold text-4xl text-black'> Recent Blogs</h1>
        <div className='w-full py-20 px-10 flex justify-center lg:justify-between flex-col lg:flex-row'>
        <BlogsCart heading="Complete all of the task but didn't get certification yet? 😓🤦‍♀️" para="📧 Drop us a quick email at issues@internee.pk with the subject Didn't get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly."/>
        <BlogsCart heading="Complete all of the task but didn't get certification yet? 😓🤦‍♀️" para="📧 Drop us a quick email at issues@internee.pk with the subject Didn't get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly."/>
        <BlogsCart heading="Complete all of the task but didn't get certification yet? 😓🤦‍♀️" para="📧 Drop us a quick email at issues@internee.pk with the subject Didn't get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly."/>
        <BlogsCart heading="Complete all of the task but didn't get certification yet? 😓🤦‍♀️" para="📧 Drop us a quick email at issues@internee.pk with the subject Didn't get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly."/>
       
       </div>
        </div>

        <FeatureSection/>
        <OppositeFeatureSection/>
        <DuplicateFeatureSection/>
        <Footer/>
    </div>
  )
}

export default UserHome
