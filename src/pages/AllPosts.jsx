import React, {useState , useEffect} from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

    },[])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

  return (
    <div className="w-full py-10 px-6">
    <Container>
        { posts.length > 0 ? (<div className='flex flex-wrap'>
        {posts.map((post) =>(
            
            <div key={post.$id} className="py-6 px-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
            <PostCard {...post}/>
            </div>           
        ))}
         </div>
         )
         :(
            <div className='w-full min-h-60 flex justify-center items-center'>
                                <h1 className="text-2xl sm:text-4xl font-bold text-customBlue hover:text-customWhite sm:font-extrabold ">No Blog Added </h1> 
                                </div>)
                                }
    </Container>
    </div>
  )
}

export default AllPosts