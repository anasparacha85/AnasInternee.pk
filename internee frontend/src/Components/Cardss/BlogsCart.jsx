import React from 'react'

const BlogsCart = ({image,heading,para}) => {
  return (
    <div className="w-80  bg-gray-50 p-4 flex flex-col  justify-start">
    <img src="https://www.internee.pk/images/certificate.jpeg" alt="Sample" className="w-full h-1/2 object-cover" />
    <p className='text-start'><span className='text-gray-500'>2024/april/24 </span><span className='text-gray-500'>ADMIN</span></p>
    <h2 className="text-lg font-semibold mt-4">{heading}</h2>
    <p className="text-sm text-gray-600 mt-2 text-start">{para}</p>
  </div>
  )
}

export default BlogsCart
