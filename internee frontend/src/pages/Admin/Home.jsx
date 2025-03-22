import React from 'react'
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { HeroSection } from '../../Components/HeroSection';
import { JobList } from '../../Components/JobList';
import Jobscard from '../../Components/Cardss/Jobscard';
import JobPostButton from '../../Components/JobPostButton';
import BlogsCart from '../../Components/Cardss/BlogsCart';
import Subscribe from '../../Components/Subscribe';
import CountUp from '../../Animations/countup';
const Home = () => {
  return (
     <div className=" flex flex-col bg-White overflow-x-hidden ">
      
      <Header />
      <HeroSection/>

      <div className='w-full py-20 px-10 bg-gray-100 flex justify-center lg:justify-between flex-col lg:flex-row'>
        <Jobscard heading='Search Millions of Jobs' para='A small river named Duden flows by their place and supplies.'/>
        <Jobscard heading='Easy To Manage Jobs' para='A small river named Duden flows by their place and supplies.'/>
        <Jobscard heading='Top Career' para='A small river named Duden flows by their place and supplies.'/>
        <Jobscard heading='Search Expert Candidates' para='A small river named Duden flows by their place and supplies.'/>
      </div>

      <div className='w-full h-auto text-center py-14'> 
        <p className='text-lg text-gray-400'>Categories work wating for you</p>
        <h1 className='text-bold font-bold text-4xl text-black'> Current Job Posts</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4  px-18 gap-3 mt-10'>
          <JobPostButton jobText='Web Developer'/>
          <JobPostButton jobText='App Developer'/>
          <JobPostButton jobText='Web Designer'/>
          <JobPostButton jobText='FrontEnd Developer'/>
          <JobPostButton jobText='Backend developer'/>
          <JobPostButton jobText='mobile developer'/>
          <JobPostButton jobText='Ai Engineer'/>
          <JobPostButton jobText='Devops Engineer'/>
        </div>
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
     
        
      </div>
      <Subscribe/>
      <Footer/>
     
   
     
    </div>
  );
}
 
export default Home
