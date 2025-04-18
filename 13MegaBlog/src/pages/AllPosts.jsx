import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    const userPosts = useSelector((state) => state.post.posts)

    useEffect(async () => {
        if(userPosts){
            setPosts(userPosts)
        }
        // appwriteService.getAllPosts([]).then((posts) => {
        //     if (posts) {
        //         setPosts(posts.documents);
        //     }
        //     else{
        //         <div>
        //             <h1>No posts</h1>
        //         </div>
        //     }
        // });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/3">
                            <PostCard
                                post={post}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
