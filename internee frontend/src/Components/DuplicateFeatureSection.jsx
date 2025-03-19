import React, { useEffect } from 'react'
import FeaturesCard from './Cardss/FeaturesCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
const DuplicateFeatureSection = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-8">
    {/* Left Side - Image */}
    <div className="md:w-1/2 flex justify-center" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-duration="1000">
      <img 
        src="https://www.internee.pk/images/instructor.png" 
        alt="Feature" 
        className="lg:w-[800px] w-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Right Side - Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-lg font-semibold ">Are you Tech Instructor or Content Creator?</h3>
      <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-2">
      Create Courses In Local Language & Generate Income

      </h1>
      <p className="text-gray-700 mt-4 text-lg">
      Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {/* Card 1 */}
        <FeaturesCard img="https://img.icons8.com/ios/50/system-information.png" span="Hands on Projects we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments."/>
       

        {/* Card 2 */}
        <FeaturesCard img="https://img.icons8.com/fluency-systems-filled/50/user-group-woman-woman.png" span="How to represent yourself More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities."/>

      

        {/* Card 3 */}
        <FeaturesCard img="https://img.icons8.com/ios/50/system-information.png" span="SDLC Techniques Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency."/>
      
        {/* Card 4 */}
        <FeaturesCard img="https://img.icons8.com/fluency-systems-filled/50/user-group-woman-woman.png" span="Easy to understand Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner."/>
       
      </div>
    </div>
  </div>
  )
}

export default DuplicateFeatureSection
