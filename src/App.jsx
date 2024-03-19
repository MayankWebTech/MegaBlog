import React,{ useState, useEffect } from 'react'
import {useDispatch }  from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { Footer, Header } from './Components'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {

const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    }else {
      dispatch (logout())
    }
  })
  .finally(() => setLoading(false))
},[])

  return  !loading ? (
    <div className="flex flex-col min-h-screen bg-lightGreen overflow-hidden">

      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  
  
  ) : ( 
    <div className='flex justify-center items-center text-customWhite text-2xl bg-lightGreen  w-full h-full'>please wait! The page is loading content... </div>
   )
}

export default App
