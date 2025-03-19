import React, { useEffect } from 'react'
import { usestore } from '../Store/ContextStore'
import { Outlet, useNavigate } from 'react-router'

export const AdminRoute = () => {
    const {AdminKey}=usestore()
    const navigate=useNavigate()
    useEffect(()=>{
        if(!AdminKey){
            navigate('/job-portal')
            
        }
    },[AdminKey])

    return(
        <>
        <Outlet/>
        </>
    )
 
}


export default AdminRoute
