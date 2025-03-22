import React from 'react'

const BackgroundSection = ({h3,h1,pgname}) => {
  const backgroundimage="https://skillhub-woad.vercel.app/assets/cloud-guru-culture-B2I1fL7E.webp"

  return (
    <section className="bg-green-500 text-white h-screen w-screen  p-16 lg:pl-60  flex justify-center lg:justify-start items-end bg-custom" style={{backgroundImage:`url( ${backgroundimage})`}}>
       
  <div className=' cursor-pointer mb-32 '>
  <h3 className=" text-lg mb-4">{h3}<span className='text-gray-200'>{pgname}</span></h3>
  <h1 className="lg:text-[55px] text-3xl font-bold mb-4">{h1} </h1>
  </div>

   
  </section>
  )
}

export default BackgroundSection
