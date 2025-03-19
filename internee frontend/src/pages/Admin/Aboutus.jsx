import React from 'react'
import Header from '../../Components/Header'
import BackgroundSection from '../../Components/BackgroundSection'
import Subscribe from '../../Components/Subscribe'
import Footer from '../../Components/Footer'
import ImageTextSection from '../../Components/ImageTextSection'
const Aboutus = () => {
  return (
    <div className=" flex flex-col bg-white ">
    <Header/>
    <BackgroundSection h3={"Home>    "} pgname={'  About-us'} h1={"About Us"}/>
   <ImageTextSection/>
    <Subscribe/>
    <Footer/>

    
  </div>
  )
}

export default Aboutus
