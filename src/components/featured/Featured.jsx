import { useState, useEffect } from "react";
import Post from "../posts/Post";

import "./featured.css";
import "../Style/custom.css";

const Featured = () => {
    const [posts, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3006/posts")
        .then((res) => {
            if(!res.ok) {
                throw Error("Not Found");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setPost(data);
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false);
            setErrMsg(err.message);
        });
    }, []);

    // const handleDelete = (id) => {
    //     let curPosts = [...posts];
    //     let newPosts = curPosts.filter((post) => post.id !== id);
    //     setPost(newPosts);
    // }

    return (
        <div className="container">
            <div className="featured">
                    {posts &&
                        posts.map((post) => (
                            <Post key={post.id} post={post} />
                    ))}
                    {isLoading && <h2>Loding ...</h2>}
                    {!posts && !isLoading && !errMsg && (
                        <div className="not-found">No Posts</div>
                    )}
                    {errMsg && <div className="error">{errMsg}</div>}
            </div>
        </div>
    )
}

export default Featured