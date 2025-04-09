import React, { useEffect, useState } from "react";
import { Container, Postcard } from "../components";
import { appwriteService } from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {;
        appwriteService.getAllPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    })

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => {
                        <div key={post.$id} className="p-2 w-1/3">
                            <Postcard key={post.$id} post={post}></Postcard>
                        </div>;
                    })}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
