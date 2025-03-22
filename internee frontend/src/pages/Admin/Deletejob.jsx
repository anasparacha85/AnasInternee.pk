import React, { useEffect } from 'react'
import { usestore } from '../../Store/ContextStore'
import { useState } from 'react'
import AdminJobCard from '../../Components/Cardss/AdminJobCard'
import { toast } from 'react-toastify'

export const Deletejob = () => {
    const [jobs, setjobs] = useState([])
    const {url,jwtToken}=usestore()
    const getjobsdata=()=>{
        fetch(`${url}/api/admin/getallJobs`, {
            method:'GET',
            headers:{
                "Authorization":`Bearer ${jwtToken}`
            }
        }).then((res)=>{
            console.log(res);
            
            return res.json()

        }).then((data)=>{
            console.log(data);
            if(data.length>0){
                setjobs(data)
            }
            else{
                setjobs([])
            }
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    useEffect(()=>{
        getjobsdata()
    },[])

   

  return (
    <div>
      <div className='flex w-full justify-center'>
        <h1 className='text-3xl text-green-600 font-bold text-center'>Delete a Job</h1>
        </div>
      
        <div className='w-full flex md:justify-end justify-center' >
<div className='w-[75%] flex flex-col  '>
  {jobs.map((value,index)=>(
<AdminJobCard key={value._id} title={value.JobName} job={jobs} setjob={setjobs} image={value.JobImage} type={value.JobType} duration={value.JobDuration} id={value._id} />
  )

  )}

</div>
</div>
      </div>
    
  )
}

export default Deletejob
