import React, { useEffect } from 'react'
import { usestore } from '../Store/ContextStore'
import { Outlet, useNavigate } from 'react-router'

export const UserRoute = () => {
    const {isLoggedIn}=usestore()
    const navigate=useNavigate()
    useEffect(()=>{
        if(!isLoggedIn){
navigate('/')
        }
    },[isLoggedIn])
  return (
    <>
      <Outlet/>
    </>
  )
}

export default UserRoute
