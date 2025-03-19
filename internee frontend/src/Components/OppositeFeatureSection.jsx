import React, { useEffect } from 'react'
import FeaturesCard from './Cardss/FeaturesCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
const OppositeFeatureSection = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
   
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-8">
       
  
        {/* left Side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-lg font-semibold ">Our LMS</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Guided Tutorials in Learning Management System
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
          Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.
          </p>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <FeaturesCard img="https://img.icons8.com/ios/50/system-information.png" span="Sell Courses and Earn Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise."/>
           
  
            {/* Card 2 */}
            <FeaturesCard img="https://img.icons8.com/fluency-systems-filled/50/user-group-woman-woman.png" span="Certification Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape."/>

          
  
            {/* Card 3 */}
            <FeaturesCard img="https://img.icons8.com/ios/50/system-information.png" span="Courses in Urdu Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home."/>
          
            {/* Card 4 */}
            <FeaturesCard img="https://img.icons8.com/fluency-systems-filled/50/user-group-woman-woman.png" span="Practice Exercises Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence."/>
           
          </div>
        </div>
         {/* Right Side - Image */}
         <div className="md:w-1/2 flex justify-center" data-aos="fade-left"
     data-aos-offset="400"
     data-aos-duration="1000">
          <img 
            src="https://www.internee.pk/images/lms.png" 
            alt="Feature" 
            className="lg:w-[800px] w-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  )
}

export default OppositeFeatureSection
