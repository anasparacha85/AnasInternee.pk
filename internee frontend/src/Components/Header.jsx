import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { usestore } from '../Store/ContextStore';
import AdminProfileOverlay from './OverLays/AdminProfileOverlay';

import Skillternloog from '../../public/skillternloog.png'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate=useNavigate()
const [Adminprofileopen, setAdminprofileopen] = useState(false)
const {AdminLoginOpen,setAdminLoginOpen,AdminKey,isLoggedIn,user,url}=usestore()
const onPostClick=()=>{
if(!isLoggedIn || !AdminKey){
  setAdminLoginOpen(true)
}
else{
  navigate('/Admin/post-a-job')
}

}
  return (
    <header className="bg-green-500 sticky top-0 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="  text-xl">
         <img src={Skillternloog} alt="" className='w-40 h-20' style={{mixBlendMode:'color-burn'}}/>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 mt-4 mr-5">
          <NavLink to="/job-portal" className={({isActive})=>(` ${isActive?'text-green-700':'text-white'}`)} >Home</NavLink>
          <NavLink to="/job-portal/company" className={({isActive})=>(` ${isActive?'text-green-700':'text-white'}`)}>Company</NavLink>
          <NavLink to="/job-portal/hiring" className={({isActive})=>(` ${isActive?'text-green-700':'text-white'}`)} >Hiring</NavLink>
          <NavLink to="/job-portal/About-us" className={({isActive})=>(` ${isActive?'text-green-700':'text-white'}`)}>About Us</NavLink>
          <NavLink to="/job-portal/contact" className={({isActive})=>(` ${isActive?'text-green-700':'text-white'}`)}>Contact</NavLink>
          {isLoggedIn&&AdminKey?   <> 
            
            <div className="relative cursor-pointer -mt-1   text-gray-700 "
             onMouseEnter={() => setAdminprofileopen(true)}
             onMouseLeave={() => setAdminprofileopen(false)}
            >          
            <img
              src={user?(user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`):" "
              }
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {Adminprofileopen && (
                <AdminProfileOverlay/>
              )}
              </div>
    
            </>:
           <button onClick={()=>setAdminLoginOpen(true)} className="block text-white bg-transparent  cursor-pointer -mt-3" >Login</button>
          }
         
         
          <button onClick={onPostClick} className="bg-green-700 text-white px-4 py-2 rounded -mt-1 cursor-pointer" >Post a Job</button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-4 p-4">
          <NavLink to="/job-portal" className="block"  >Home</NavLink>
          <NavLink to="/job-portal/company" className="block">Company</NavLink>
          <NavLink to="/job-portal/hiring" className="block">Hiring</NavLink>
          <NavLink to="/job-portal/About-us" className="block">About Us</NavLink>
          <NavLink to="/job-portal/contact" className="block">Contact</NavLink>
          <button onClick={onPostClick} className="block bg-green-500 text-white px-4 py-2 rounded" >Post a Job</button>

          {isLoggedIn&&AdminKey?   <> 
            
            <div className="relative cursor-pointer -mt-1   text-gray-700 "
             onMouseEnter={() => setAdminprofileopen(true)}
             onMouseLeave={() => setAdminprofileopen(false)}
            >          
            <img
              src={user?(user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`):" "
              }
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {Adminprofileopen && (
                <AdminProfileOverlay/>
              )}
              </div>
    
            </>:
           <button onClick={()=>setAdminLoginOpen(true)} className="block text-white bg-transparent  cursor-pointer" >Login</button>
          }
         
        </div>
      )}
    </header>
  );
};

export default Header;
