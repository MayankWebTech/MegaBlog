import React, {useCallback, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {Button , Input , Select, RTE } from '..';
import appwriteService from "../../appwrite/config";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function PostForm({post}) {

 const { register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
        title: post?.title || '',
        slug: post?.$id || '',
        content: post?.content || '',
        status: post?.status || 'active'
    }
 });

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData);
    
    const submit = async (data) => {
        if(post) {
            const file = data.image[0] ?  await appwriteService.uploadFile(data.image[0]) : null ;

            if (file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }else {
                const file = await appwriteService.uploadFile(data.image[0]);
                // try to implement if else functionality

                if (file){
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                   const dbPost =  await appwriteService.createPost({...data,
                    userId: userData.$id})
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        

    };
  
  const slugTransform = useCallback((value)=> {
         if (value && typeof value === 'string')
         return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-z\d\s]+/g, '-')
        .replace(/\s/g,'-')
        return '';
    }, [])
        
     useEffect(()=>{
      const subscription = watch((value,{name}) =>{
        if (name === 'title') {
            setValue('slug', slugTransform(value.title, {shouldValidate: true}))
        }
      });
           
      return ()=> subscription.unsubscribe()
      },[watch, slugTransform, setValue])

    return (
   
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap sm:justify-between ">
        <div className=" w-full md:w-2/3 p-3 ">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-full  md:w-1/3  p-3">
            <Input
                label="Featured Image :"
                type="file"
                className="py-1"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg "
                    />
                </div>
            )}
            {/* <label htmlFor="status" className='text-xl font-bold'>Status</label> */}
            <Select
                options={["active", "inactive"]}
                
                label="Status"
                className=" "
                
                {...register("status", { required: true })}
            />
            <p className='text-xs text-gray-500 p-1 mb-4'>note: select active to update data</p>
            
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full ">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  )
}

export default PostForm ;