import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'



function PostCard({$id, title, featuredImage}) {


    return (
    <Link to ={`/post/${$id}`}>
        <div className='w-70 min-w-70 h-90 bg-green-200  sm:hover:opacity-90 rounded-xl px-0 m-0 overflow-hidden transform hover:shadow-lg hover:scale-110 transition-all duration-500 ease-in-out border-customWhite border-4 border-opacity-70 '>
            <div className="w-70 h-90">
             <img 
             loading='lazy'
             className='object-cover w-full h-60 bg-gray-400'
             src={appwriteService.getFilePreview(featuredImage)} 
               alt={title} 
                />
            </div>
            <div className='py-1  '>
            <h2
            className='sm:text-2xl text-xl px-3 py-1 h-auto font-extrabold break-words overflow-hidden  line-clamp-2 md:line-clamp-3 text-customBlue bg-green-200 rounded-lg text-opacity-90  hover:text-opacity-100 bg-opacity-90' >
                 {title} 
            </h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard


