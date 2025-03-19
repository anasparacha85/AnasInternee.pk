import FeaturesCard from "./Cardss/FeaturesCard";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const FeatureSection = ({}) => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-8">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-duration="1000"
     
     data-aos-easing="ease-in-sine">
          <img 
            src="https://www.internee.pk/images/task.webp" 
            alt="Feature" 
            className="lg:w-[800px] w-auto rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right Side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-lg font-semibold ">Our own task portal</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Manage Project Via Own Task Portal
          </h1>
          <p className="text-gray-700 mt-4">
          Welcome to internee.pk task portal. Where Tasks Transform Into Skills
          </p>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6" >
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
    );
  };
  
  export default FeatureSection;
  