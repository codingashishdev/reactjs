import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    return (
        <>
            <div className="ml-38 m-2 max-w-[80vw] rounded-xl font-semibold text-2xl text-black text-center bg-amber-500 p-2 flex flex-col justify-center items-center">Github followers: {data.followers}
                <img src={data.avatar_url} alt="" className="w-45 h-45 rounded-xl"/>
            </div>
        </>
    );
}

const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/codingashishdev')
    return response.json() 
}

export { Github, githubInfoLoader }