import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ContactSection from '../../Components/ContactSection'
import UserHeader from '../../Components/UserHeader'

export const UserContact = () => {
  return (
    <div>
      <UserHeader/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default UserContact
