import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Subscribe from '../../Components/Subscribe'
import BackgroundSection from '../../Components/BackgroundSection'
import { usestore } from '../../Store/ContextStore'
import JobCategoryCard from '../../Components/Cardss/JobbyCategoryCard'
export const Hiring = () => {
  const {jobbyquery,setjobbyquery,url,jobresponse}=usestore()
  console.log('hello',jobbyquery);
  
  return (
    <div className=" flex flex-col bg-white overflow-x-hidden">
    <Header/>
    <BackgroundSection h3={"Home>    "} pgname={'  Hiring'} h1={"Hiring"}/>
    <div className='w-full min-h-[250px] max-h-auto bg-white flex flex-col py-8'>
      {jobbyquery.FailureMessage&&<div className='w-full justify-center items-center h-full'>
        <h1 className='text-3xl font-bold text-center'>
          {jobbyquery.FailureMessage}
        </h1>
         </div>}
{jobresponse.ok?             
         <span className='text-xl text-gray-500 font-semibold w-full text-center'>Searched Results for {jobbyquery[0].jobs[0].JobCategory} Jobs are <b className='text-black'>{jobbyquery[0].totalCount[0].count}</b>  </span>
 :        <span className='text-xl text-gray-500 font-semibold w-full text-center'>  </span>

}
{jobresponse.ok?  <div className='w-full flex justify-center ' >
<div className='w-[75%] flex flex-col  '>
  {jobbyquery?(jobbyquery[0].jobs.map((value,index)=>(
<JobCategoryCard key={value._id} title={value.JobName} image={value.JobImage} type={value.JobType} duration={value.JobDuration} id={value._id}/>
  )

  )):<div></div>}

</div>


      </div>: <h1 className='text-3xl font-bold text-center'>
         
        </h1>}
       
    </div>
    <Subscribe/>
    <Footer/>

    
  </div>
  
  )
}

export default Hiring
