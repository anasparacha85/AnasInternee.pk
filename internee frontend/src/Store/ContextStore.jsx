import { useContext,createContext, useEffect } from "react";
import { useState } from "react";
export const StoreContext=createContext();
export const StoreContextProvider=({children})=>{
    const url="http://localhost:5000";
const [AdminLoginOpen, setAdminLoginOpen] = useState(false)
const [AdminSignupOpen, setAdminSignupOpen] = useState(false)
const [InterneeLoginOpen, setInterneeLoginOpen] = useState(false)
const [InterneeSignupOpen, setInterneeSignupOpen] = useState(false)
const [jwtToken, setjwtToken] = useState(localStorage.getItem('Jwt Token'));
const [AdminKey, setAdminKey] = useState(localStorage.getItem('Admin Key'))
const [UserSignupOpen, setUserSignupOpen] = useState(false)
const [UserLoginOpen, setUserLoginOpen] = useState(false)
const [JobsCategories, setJobsCategories] = useState([])
const [jobbyquery, setjobbyquery] = useState([])
const [jobresponse, setjobresponse] = useState({})
const [SuccessMessage, setSuccessMessage] = useState(null)
const [selecteditem, setselecteditem] = useState('')
const [categoryitem, setcategoryitem] = useState('')
const [courses, setCourses] = useState([]);
const [user, setuser] = useState({profilePicture:"",name:"",email:""})
const [filtercourse, setfiltercourse] = useState([])
const [Instructors, setInstructors] = useState([])
const [instructor, setinstructor] = useState(localStorage.getItem('instructor'))
const [isFavorite, setIsFavorite] = useState(false);
const [isLoading, setisLoading] = useState(false)
const SaveTokenToLs=(jwttoken)=>{
    return localStorage.setItem('Jwt Token',jwttoken)

}

const SaveAdminKeyToLs=(AdminKey)=>{
    return localStorage.setItem('Admin Key',AdminKey)
}
const isLoggedIn=!!jwtToken;
const logouttrue=()=>{
    localStorage.removeItem('Jwt Token')
    localStorage.removeItem('Admin Key')
}

    
  
const fetchd=function(){
    setisLoading(true)
    
    fetch(`${url}/api/jobs/Internships`,{
    method:'GET',

}).then((response)=>{
    return response.json()
}).then((Data)=>{

    setJobsCategories(Data)
   
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    setisLoading(false)
})
}

const fetchuser=()=>{
    fetch(`${url}/api/user/userprofile`,{
        method:'GET',
        headers:{
            "Authorization":`Bearer ${jwtToken}`
        }
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log("user profile",data);
        localStorage.setItem('instructor',data.Instructor)
        
        setuser(data)
    }).catch((error)=>{
        console.log(error);
        
    })
}
useEffect(() => {
    fetch(`${url}/api/courses/CourseContent`) // Backend se courses fetch karna
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        if(data.length>0){
         setCourses(data)
        }
       
       

      })
      .catch((err) => console.error(err));
  }, []);

const fetchCourseByName=(CourseName)=>{
    fetch(`${url}/api/courses/CourseNameCount?CourseName=${CourseName}`) // Backend se courses fetch karna
    .then((res) => res.json())
    .then((data) =>{ 
      console.log(data);
      if(data.length>0){
        setCourses(data)

      }
      else{
        setCourses([])
      }
      
    })
    .catch((err) => console.error(err));

}

const fetchCourseByCategory=(CourseCategory)=>{
    fetch(`${url}/api/courses/CourseCategoryCount?CourseCategory=${CourseCategory}`) // Backend se courses fetch karna
    .then((res) => res.json())
    .then((data) =>{ 
      console.log(data);
      if(data.length>0){
       setCourses(data)
      }
      else{
        setCourses([])
      }

    })
    .catch((err) => console.error(err));

}

const getInstructors=()=>{
    fetch(`${url}/api/instructor/getApplies`,{
        method:'GET',
        headers:{
            "Authorization":`Bearer ${jwtToken}`
        }
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        if(data.length>0){
            setInstructors(data)
        }
        else{
            setInstructors([])
        }
    }).catch((error)=>{
        console.log(error);
        
    })
}
useEffect(()=>{
    getInstructors()
},[url,jwtToken])
useEffect(()=>{
    
        fetchuser()
  
    
},[jwtToken,url])
   
   useEffect(()=>{
    fetchd()
   },[])
    return ( <StoreContext.Provider value={{isFavorite,setIsFavorite,SuccessMessage,setSuccessMessage,setuser,JobsCategories,logouttrue,isLoggedIn,url,AdminLoginOpen,setAdminLoginOpen,AdminSignupOpen,setAdminSignupOpen,InterneeLoginOpen,setInterneeLoginOpen,InterneeSignupOpen,setInterneeSignupOpen,jwtToken,AdminKey,SaveTokenToLs,SaveAdminKeyToLs,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,jobbyquery,setjobbyquery,jobresponse,setjobresponse,user,selecteditem,setselecteditem,courses,setCourses,filtercourse,setfiltercourse,fetchCourseByName,fetchCourseByCategory,categoryitem,setcategoryitem,Instructors,setInstructors,isLoading,setisLoading}}>
        {children}
    </StoreContext.Provider>
    )
}
export const usestore=()=>{
    const contextvalue=useContext(StoreContext);
    if(!contextvalue){
        throw new Error("UserSTore Should be inside the provider");
        
    }
    return contextvalue;
}