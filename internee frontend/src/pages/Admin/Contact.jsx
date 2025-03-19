import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Subscribe from '../../Components/Subscribe'
import BackgroundSection from '../../Components/BackgroundSection'
import ContactForm from '../../Components/ContactForm'

export const Contact = () => {
  return (
    <div className=" flex flex-col bg-white ">
    <Header/>
    <BackgroundSection h3={"Home>    "} pgname={'  Contact'} h1={"Contact"}/>
    <ContactForm/>
    <Subscribe/>
    <Footer/>

    
  </div>
  )
}

export default Contact
