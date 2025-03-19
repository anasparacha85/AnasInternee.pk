import React from 'react'
import LMSHeader from '../Components/LMSHeader'
import ProfileHeader from '../Components/ProfileHeader'
import Footer from '../Components/Footer'

export const ErrorPage = () => {
  return (
    <div>
      <LMSHeader/>
      <ProfileHeader/>
      <div className='flex justify-center w-full items-center h-[400px]'>

        <h1 className='text-4xl font-bold '> Sorry! We Working On this Page.!</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default ErrorPage
