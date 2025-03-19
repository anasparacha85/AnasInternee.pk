import React from 'react'
import UserHeader from '../../Components/UserHeader'
import HandsonCard from '../../Components/Cardss/HandsonCard'
import ContactSection from '../../Components/ContactSection'
import Footer from '../../Components/Footer'

export const CompanyCollaboration = () => {
  return (
    <div>
      <UserHeader/>

      <div className='w-full flex flex-col justify-center mb-10 mt-10'>
        <div className='w-full flex justify-center'>
            <h1 className='text-3xl font-bold text-center'>Are you looking for hands-on candidate for your company?</h1>
        </div>
        <div className='w-full flex justify-center mt-7'>
        <p className='text-gray-400 text-2xl font-normal w-[70%] text-center '>Our end goal is provide the best candidate for your company for your exponential growth for your company, Let's hands shake and create a win-win situation on both sides.</p>

        </div>

      </div>

      <div className='w-full flex flex-col md:flex-row justify-between px-20 md:px-6 gap-3 '>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15k+" h3="Internship Provided"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="48k+" h3="LinkedIn Family"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="28" h3="Courses on LMS"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15" h3="Companies Onboarded"/>
      </div>
<div className='mt-10'>
<ContactSection/>
</div>
<Footer/>
      
    </div>
  )
}

export default CompanyCollaboration
