import React from 'react'
import { Route , Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
const App = () => {
  return (
    <div className="h-screen w-full bg-[url('./src/assets/bgImage.svg')] bg-cover bg-center">

      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/login' element={<LoginPage/>} />
         {/* <Route path='/register' element={<RegisterPage/>} /> */}
         <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
      </div> 
  )
}

export default App