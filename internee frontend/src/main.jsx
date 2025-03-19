import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Admin/Home.jsx'
import Company from './pages/Admin/Company.jsx'
import Hiring from './pages/Admin/Hiring.jsx'
import Contact from './pages/Admin/Contact.jsx'
import Aboutus from './pages/Admin/Aboutus.jsx'
import GoogleAuthSuccess from './pages/GoogleAuthSuccess.jsx'
import UserHome from './pages/Users/Home.jsx'
import Logout from './pages/Logout.jsx'
import PostJob from './pages/Admin/PostJob.jsx'
import Internships from './pages/Users/Internships.jsx'
import IntershipsbyCategories from './pages/Users/IntershipsbyCategories.jsx'
import JobApplicationForm from './pages/Users/JopApplicationForm.jsx.jsx'
import JobPortal from './pages/Admin/JobPortal.jsx'
import CompanyCollaboration from './pages/Users/CompanyCollaboration.jsx'
import UserContact from './pages/Users/Contact.jsx'
import LMSHome from './pages/LMS/Home.jsx'
import LMS from './pages/LMS/LMS.jsx'
import UserProfileLayout from './pages/LMS/Layout/UserProfileLayout.jsx'
import Profile from './pages/LMS/Profile.jsx'
import Account from './pages/LMS/Account.jsx'
import Photo from './pages/LMS/Photo.jsx'
import AdminLayout from './pages/Admin/Layout/AdminLayout.jsx'
import AdminProfile from './pages/Admin/AdminProfile.jsx'
import JobApplications from './pages/Admin/JobApplications.jsx'
import AdminRoute from './Routes/AdminRoute.jsx'
import UserRoute from './Routes/UserRoute.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import CourseUpload from './pages/LMS/CourseUpload.jsx'
import CourseDetail from './pages/LMS/CourseDetail.jsx'
import AddLessons from './pages/LMS/AddLesson.jsx'
import MyCourses from './pages/LMS/MyCourses.jsx'
import CourseContent from './pages/LMS/CourseContent.jsx'
import InstructorPanel from './pages/LMS/Layout/InstructorPanel.jsx'
import CourseList from './pages/LMS/CoursesLayout.jsx'
import BecomeInstructorForm from './pages/LMS/BecomeInstructor.jsx'
import ShowCourses from './pages/LMS/ShowCourses.jsx'
import Deletejob from './pages/Admin/Deletejob.jsx'
import InstructorApplications from './pages/Admin/InstructorApplications.jsx'
import MyFavorites from './pages/LMS/MyFavorites.jsx'



const Router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
     <Route path='' element={<UserHome/>}/>
    
    <Route path='google-auth-success' element={<GoogleAuthSuccess/>}/>
   
    <Route path='/Internships' element={<Internships/>}/>
    <Route path='/Internships/:Category' element={<IntershipsbyCategories/>}/>
    <Route path='/JobApplicationForm/:id' element={<JobApplicationForm/>}/>
    <Route path='/CompanyCollaboration' element={<CompanyCollaboration/>}/>
    <Route path='/Contact' element={<UserContact/>}/>

   
    <Route path='/job-portal'  element={<JobPortal/>}>
    <Route path='' element={<Home/>}/>
    <Route path='company' element={<Company/>}/> 
    <Route path='hiring' element={<Hiring/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='About-us' element={<Aboutus/>}/>

   
   
    </Route>
    <Route element={<AdminRoute/>}>
    <Route path='/Admin' element={<AdminLayout/>}>
    <Route path='' element={<AdminProfile/>}/>
    <Route path='post-a-job' element={<PostJob/>}/>
    <Route path='JobApplications' element={<JobApplications/>}/>
    <Route path='delete-a-job' element={<Deletejob/>}/>
    <Route path='InstructorApplications' element={<InstructorApplications/>}/>
    </Route>
    </Route>
   
    <Route path='/LMS' element={<LMS/>}>
    <Route path='' element={<LMSHome/>}/>
    <Route path='Courses' element={<CourseList/>}/>
    <Route element={<UserRoute/>}>
    <Route path='UserProfile' element={<UserProfileLayout/>}>
    <Route path='' element={<Profile/>}/>
    <Route path='Account' element={<Account/>}/>
    <Route path='Photo' element={<Photo/>}/>

    </Route>

    </Route>
    <Route path='MyCourses' element={<MyCourses/>}/>
    <Route path='myFavorites' element={<MyFavorites/>}/>

    <Route path='CourseContent/:id' element={<CourseContent/>}/>
  
    <Route path='course/:id' element={<CourseDetail/>}/>
    <Route path='course/addlesson/:id' element={<AddLessons/>}/>
    <Route path='Instructor' element={<InstructorPanel/>}>
    <Route path='' element={<BecomeInstructorForm/>}/>
    <Route path='upload' element={<CourseUpload/>}/>
    <Route path='ShowCourses' element={<ShowCourses/>}/>
    
   

    </Route>
    
    
    
    </Route>

<Route path='*' element={<ErrorPage/>}/>
    <Route path='/logout' element={<Logout/>}/>
  </Route>
)
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
