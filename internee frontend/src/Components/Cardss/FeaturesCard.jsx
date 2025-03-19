import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const FeaturesCard = ({img,span}) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="flex items-center gap-4 p-4  rounded-lg ">
    <img width="20" height="20" src={img} alt="system-information" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
      <span className="text-gray-800 font-medium">{span}</span>
    </div>
  )
}

export default FeaturesCard
