import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(() =>{
            dispatch(logout())
            
        })
    }

  return (
    <button
    className={` font-extrabold   sm:text-2xl text-xl   mx-6 my-0 transform hover:scale-110 transition-all duration-100 ease-in-out text-customBlue hover:text-red-500  `}
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn