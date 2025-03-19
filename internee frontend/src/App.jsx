import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import { StoreContextProvider } from './Store/ContextStore'
import Login from './pages/Admin/Login'
import Signup from './pages/Admin/Signup'
import UserLogin from './pages/Users/UserLogin'
import UserSignup from './pages/Users/UserSignup'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StoreContextProvider>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <Login/>
      <Signup/>
      <UserLogin/>
      <UserSignup/>
    <Outlet/>
    
    </StoreContextProvider>
    
    </>
  )
}

export default App
