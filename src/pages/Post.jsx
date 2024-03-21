import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import appwriteService  from '../appwrite/config'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Container } from '../Components'
import parse from "html-react-parser"



export default function Post() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(()=>{
        if (slug){
            appwriteService.getPost(slug).then((post)=>{
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost =() => {
        appwriteService.deletePost(post.$id).then((status)=> {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
    });
};
return post ? (
    <div className=" pb-8  bg-green-100  h-auto">
        <Container>

      
            <div className="w-full flex justify-center  relative  bg-green-100 bg-opacity-40  ">
                <div className='h-90 max-h-90 overflow-hidden rounded-2xl mt-4  '>
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="object-contain rounded-xl w-auto "
                    style={{ width:"auto" , height: "450px" }}
                />
                </div>
                

                {isAuthor && (
                    <div className="absolute right-1 top-3 max-w-13   flex-col space-y-2">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor=" text-sm sm:text-md bg-green-500 active:text-green-500  active:bg-customWhite" className="mr-3 opacity-80 hover:opacity-100 ">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor=" text-sm sm:text-md bg-red-400 active:text-red-500 active:bg-customWhite opacity-80 hover:opacity-100 " onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>

            <div className="w-full mb-4  bg-green-100">
                <h1 className="text-3xl mt-2 sm:text3xl font-extrabold text-customBlue p-2 h-auto ">{post.title}</h1>
            </div>
            
            <div className="bg-green-100  text-black   font-semibold  text-left pl-4 pr-2 text-md h-auto min-h-40 w-full break-words leading-tight ">
                {parse(post.content)}
                </div>
        </Container>
    </div>
) : null;
}