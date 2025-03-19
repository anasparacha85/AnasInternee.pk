import React from 'react'

const Jobscard = ({heading,para,image}) => {
  return (
    <div className="w-80 h-80 bg-gray-100 p-4 flex flex-col  justify-start">
    <img src={image} alt="Sample" className="w-1/3 h-1/3 object-cover" />
    <h2 className="text-lg font-semibold mt-4">{heading}</h2>
    <p className="text-sm text-gray-600 mt-2 text-start">{para}.</p>
  </div>
  
  )
}

export default Jobscard
