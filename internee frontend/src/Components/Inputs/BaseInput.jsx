import React from 'react'

export const BaseInput = ({type,name,value,onchange,placeholder}) => {
  return (
    <div>
       <input
                  type={type}
                 
                  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onchange}
                  required
                />
    </div>
  )
}

export default BaseInput
