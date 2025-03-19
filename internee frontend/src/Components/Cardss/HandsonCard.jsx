import React from 'react'

const HandsonCard = ({img,h1,h3}) => {
  return (
    <div className='w-60  py-10 flex flex-col justify-center border-2 border-solid border-green-600'>
        <div className='w-full flex justify-center mb-3'>
        <img width="40" height="40" src={img} alt="system-information"/>
        </div>
        <div className='w-full flex justify-center mb-3'>
            <h1 className='text-3xl font-bold'>{h1}</h1>
            
        </div>
        <div className='w-full flex justify-center'>
        <h3 className='text-xl font-normal'>{h3}</h3>
        </div>
      
    </div>
  )
}

export default HandsonCard
