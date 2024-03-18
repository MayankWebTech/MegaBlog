import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'



function PostCard({$id, title, featuredImage}) {


    return (
    <Link to ={`/post/${$id}`}>
        <div className='w-70 min-w-70 h-90 bg-customGreen  rounded-xl px-0 m-0 overflow-hidden transform hover:shadow-lg hover:scale-110 transition-all duration-500 ease-in-out'>
            <div className="w-70 h-90">
             <img 
             className='object-cover w-full h-60'
             src={appwriteService.getFilePreview(featuredImage)} 
               alt={title} 
                />
            </div>
            <div className='py-1  '>
            <h2
            className='text-xl px-3 py-1 h-auto font-extrabold break-words overflow-hidden  line-clamp-2 md:line-clamp-3 text-customWhite bg-customGreen rounded-lg   hover:text-gray-300' >
                 {title} 
            </h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard


