import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {


    return (
    <Link to ={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 overflow-hidden h-72'>
            <div className='w-full justify-center mb-4'>
             <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
             className='rounded-xl h-36 w-full'/>
            </div>
            <h2
            className='text-xl font-bold break-words overflow-hidden h-14 line-clamp-3' >
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard


