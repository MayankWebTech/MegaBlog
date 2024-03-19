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
    <div className=" py-8 bg-customWhite  h-auto">
        <Container>
            <div className="w-full flex justify-center  relative border-opacity-40  rounded-xl mt-4">
                <div className='h-90 max-h-90 overflow-hidden'>
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl  w-auto h-auto object-cover "
                />
                </div>
                

                {isAuthor && (
                    <div className="absolute right-3 top-3 max-w-13 ">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500 active:text-green-500 active:bg-customWhite" className="mr-3 opacity-80 hover:opacity-100 ">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-400 active:text-red-500 active:bg-customWhite   opacity-80 hover:opacity-100 " onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-3">
                <h1 className="text-5xl font-extrabold text-customBlue p-2 h-auto ">{post.title}</h1>
            </div>
            <div className="bg-green-100 text-gray-900 text-left l rounded-xl py-4 px-5 text-lg h-auto w-full break-words ">
                {parse(post.content)}
                </div>
        </Container>
    </div>
) : null;
}