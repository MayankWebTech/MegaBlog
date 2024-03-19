import React, { useState } from 'react'
import { Container ,Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

function Header() {

const authStatus = useSelector((state) => state.auth.status)

const navigate = useNavigate()

const [activeButtonName, setActiveButtonName] = useState(null);

const [isMenuOpen ,setIsMenuOpen] = useState(false);



const navItems = [
  {
    name: 'Home',
    slug: '/',
    active: true
  },
  {
    name: 'Login',
    slug: '/login',
    active: !authStatus,
  },
  {
    name: 'Signup',
    slug: '/signup',
    active: !authStatus
  },
  {
    name: 'All Posts',
    slug: '/all-posts',
    active: authStatus
  },
  {
    name: 'Add Post',
    slug: '/add-post',
    active: authStatus
  },
]

const onClickHandler =(item) => {
  navigate(item.slug);
  setActiveButtonName(item.name);
  setIsMenuOpen(false);
}

const toggleMenu =() => {
  setIsMenuOpen(!isMenuOpen);
  
};


  return (
    <>
     <header className='py-4 shadow bg-customGreen'>
      <Container>
        <nav className ='flex justify-between '>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>         

          <div>
          <ul className='hidden md:flex ml-auto'>
            {navItems.map((item) => item.active ?(
              <li key={item.name}>
                <button onClick={() => onClickHandler(item)}
                className={` font-extrabold text-2xl  mt-5 lg:mx-7 mx-3  my-2 transform hover:scale-110 transition-all duration-500 ease-in-out hover:text-customWhite  ${activeButtonName === item.name ? "text-customWhite" : "text-customBlue"} `}
                >{item.name}</button>
              </li>
            ) : null)}
            {authStatus &&  (
              <li className='mt-5'>
                <LogoutBtn  />
              </li>
            )}
            
          </ul>
         

          </div>
          
          <div className='block md:hidden z-10 '>{isMenuOpen ?
            (  <>
               <VscChromeClose onClick={toggleMenu} 
            className='absolute top-14 right-16 w-10 text-customBlue text-xl font-bold cursor-pointer '/>
             
             <div className=''>
          <ul className={`bg-opacity-60  rounded-lg flex absolute top-20 right-1 bg-lightGreen flex-col w-40 py-2  border-2 border-customWhite border-opacity-50 animate-mobileMenu shadow-lg cursor-pointer `} >
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button onClick={() => onClickHandler(item)}
                className={` font-extrabold  text-xl  mt-2 mx-6 my-0 transform hover:scale-110 transition-all duration-500 ease-in-out hover:text-customWhite  ${activeButtonName === item.name ? "text-customWhite" : "text-customBlue"} cursor-pointer `}
                >{item.name}</button>
              </li>
            ) : null)}
            {authStatus &&  (
              <li className='mt-2'>
                <LogoutBtn />
              </li>
            )}
            <li className="mb-2"></li>
            
          </ul>
         

          </div>
               
               </>

            
            ) : ( 
              <>
               <SlMenu onClick={toggleMenu}
            className='absolute top-12 right-16 w-10 text-customBlue text-xl font-bold cursor-pointer'/> 
              </>
           
            )}</div>

        
         
        </nav>
        
      </Container>
      
    </header>
    <div className=' bg-lightGreen h-1   w-full rounded-lg shadow-xl'>
            
            </div>
    </>
   
  )
}

export default Header