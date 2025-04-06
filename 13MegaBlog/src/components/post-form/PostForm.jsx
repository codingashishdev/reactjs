import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData)

    const submit = async (data) => {
        if(post){
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null
            
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            
            // slug, { title, content, featuredImage, status }
            const databasePost = await appwriteService.updatePost(
                post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                } 
            )

            if(databasePost){
                navigate(`/post/${databasePost.$id}`)
            }
        }
        else{
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
            }

            const createDBPost = await appwriteService.createPost({
                ...data,
                userId: 
            })

            if(createDBPost){
                navigate(`/post/${createDBPost.$id}`)
            }
        }
    }
}

export default PostForm;
