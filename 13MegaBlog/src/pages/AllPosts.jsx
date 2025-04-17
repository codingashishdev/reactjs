import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        appwriteService.getAllPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            else{
                <div>
                    <h1>No posts</h1>
                </div>
            }
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/3">
                            <PostCard
                                post={post}
                                key={post}
                                title={post.title}
                                featuredImage={post.featuredImage}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
