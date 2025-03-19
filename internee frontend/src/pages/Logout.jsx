import React, { useEffect } from 'react'
import { usestore } from '../Store/ContextStore'
import { Navigate } from 'react-router';

const Logout = () => {
    const {logouttrue}=usestore();
    useEffect(()=>{
        logouttrue()
        window.location.reload()
    },[logouttrue])
  return <Navigate to='/'/>
   
}

export default Logout
