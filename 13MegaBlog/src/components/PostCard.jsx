import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function Postcard({ post }) {
    if (!post) {
        return null
    }

    return (
        <>
            <Link to={`/post/${post.$id}`}>
                <div className='w-full bg-gray-200 rounded-xl p-4'>
                    <div className='w-full justify-center mb-4'>
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-xl'
                        />
                    </div>
                    <h2 className='text-2xl font-bold' >{post.title}</h2>
                </div>
            </Link>
        </>
    )
}

export default Postcard