import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { usestore } from '../Store/ContextStore';
import ProfileOverlay from './OverLays/ProfileOverlay';
import Skillternloog from '../../public/skillternloog.png'
export const UserHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location=useLocation()
  const [profileopen, setprofileopen] = useState(false)
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const {UserLoginOpen,setUserLoginOpen,isLoggedIn,user,url}=usestore()
  console.log(user.profilePicture);
  if(user.profilePicture.startsWith("http")){
    console.log("hello");

    
  }
  else{
    console.log("zello");
    
  }
  

  return (
    <header className="bg-white  sticky top-0 p-4">
      <div className="max-w-6xl  mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="  text-xl">
          <img src={Skillternloog} alt="" className='w-40 h-20' style={{mixBlendMode:'multiply'}}/>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 mt-4 mr-5 font-semibold">
          <NavLink to="/" className={({isActive})=>(` ${isActive?'text-green-700':'text-black'}`)} >Home</NavLink>
          <NavLink to="/Internships" className={({isActive})=>(` ${isActive?'text-green-700':'text-black'}`)} >Internships</NavLink>
          <NavLink to="/CompanyCollaboration" className={({isActive})=>(` ${isActive?'text-green-700':'text-black'}`)} >Company Collaboration</NavLink>
          <NavLink to="/Contact" className={({isActive})=>(` ${isActive?'text-green-700':'text-black'}`)} >Contact</NavLink>
        
        
          <NavLink to="/job-portal">  <button className="bg-green-600 font-bold text-white px-4 py-2 rounded-[30px] cursor-pointer -mt-1" >Job Portal</button> </NavLink>
            {isLoggedIn?<> 
            
            <div className="relative cursor-pointer -mt-1 cursor-pointer  text-gray-700 "
             onMouseEnter={() => setprofileopen(true)}
             onMouseLeave={() => setprofileopen(false)}
            >          
            <img
              src={user?(user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`):" "
              }
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {profileopen && (
                <ProfileOverlay/>
              )}
              </div>
    
            </>:
          <button onClick={()=>{setUserLoginOpen(true);localStorage.setItem('prevpath',location.pathname)}}
        
        className="bg-green-600 text-white font-bold px-4 py-2 rounded-[30px] cursor-pointer" >Login</button>
        }
          
        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white space-y-4 p-4">
          <NavLink to="/" className="block"  >Home</NavLink>
          <NavLink to="/Internships" className="block">Internship</NavLink>
          <NavLink to="/CompanyCollaboration" className="block">Company Colaboration</NavLink>
         
          <NavLink to="/Contact" className="block">Contact</NavLink>
          <NavLink to="/job-portal" className="block">Job Portal</NavLink>
          {isLoggedIn?<> 
            
            <div className="relative cursor-pointer -mt-1 cursor-pointer  text-gray-700 "
             onMouseEnter={() => setprofileopen(true)}
             onMouseLeave={() => setprofileopen(false)}
            >          
            <img
              src={user?(user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`):" "
              }
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {profileopen && (
                <ProfileOverlay/>
              )}
              </div>
    
            </>:
          <button onClick={()=>{setUserLoginOpen(true);localStorage.setItem('prevpath',location.pathname)}}
        
        className="bg-green-600 text-white font-bold px-4 py-2 rounded-[30px] cursor-pointer" >Login</button>
        }
          
        </div>
      )}
    </header>
  );
};

export default UserHeader;
