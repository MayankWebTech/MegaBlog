import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../Components'
import { useSelector } from 'react-redux'

function Home() {

    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)
   
    useEffect(()=> {
        appwriteService.getPosts().then( (posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },
    [])
   
    if (posts.length === 0 ) {
        if (authStatus){
            return(
                <div className='w-full h-auto py-8 mt-4 text-center'>
                    <Container>
                        <div className='w-full min-h-60 flex justify-center items-center'>
                                <h1 className="text-2xl sm:text-4xl font-bold text-customBlue hover:text-customWhite sm:font-extrabold ">Welcome🤗 to "BLOG INSIGHTS" </h1>
                        </div>
                    </Container>
                </div>
               )
        }
       return(
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
            <div className='w-full min-h-60 flex justify-center items-center'>
                                <h1 className="text-2xl sm:text-4xl font-bold text-customBlue hover:text-customWhite sm:font-extrabold ">Do Login to Read or Add Blogs</h1>
                        </div>
            </Container>
        </div>
       )
}
return (
    <div className='w-full py-10 px-6 ' >
        <Container>
            <div className='flex flex-wrap ' >
                {posts.map((post) =>(
                    <div key={post.$id} className='py-6 px-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 '>
                      <PostCard {...post}/>       
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}
export default Home