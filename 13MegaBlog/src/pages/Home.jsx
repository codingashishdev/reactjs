import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getAllPosts().then((post) => {
            if (post) {
                setPosts(post.documents);
            }
        });
    }, []);

    if(posts.length === 0){
        return (
            <div className="w-full p-8">
                <Container className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-600">Login to read posts</h1>
                    </div>
                </Container>
            </div>
        )
    }
    else{
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post) => {
                            <div key={post.$id} className="p-2">
                                <Postcard {...post}/>
                            </div>
                        })}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;
