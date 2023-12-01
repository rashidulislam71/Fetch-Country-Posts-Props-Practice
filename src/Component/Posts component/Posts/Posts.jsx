/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SinglePost from "../Single Post/SinglePost";
import "./Posts.css"


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
            .then((res)=> res.json())
            .then((data)=> {let dataOfPost = data.splice(0, 20); setPosts(dataOfPost)})
            
    }, [])

   
    return (

        <>
        
        <h1 className="posts-card-title">Post Card</h1>
        <div className="posts-Cards">
            {posts.map((element) => <SinglePost key={element.id} element={element} />)}
        </div>
        
        </>
       
    );
};

export default Posts;