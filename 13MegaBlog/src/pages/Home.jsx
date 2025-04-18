import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchAllThePosts(){
            await appwriteService.getAllPosts().then((post) => {
                if (post) {
                    setPosts(post.documents);
                }
            });
        }
        fetchAllThePosts()
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full p-8">
                <Container className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-600">
                            
                        </h1>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    ))}   
                </div>
            </Container>
        </div>
    );
}

export default Home;
