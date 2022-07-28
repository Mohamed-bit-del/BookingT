import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostFeaturedPropertie from "../posts/PostFeaturedPropertie";

import "./featuredProperties.css";
import "../Style/custom.css";

export const FeaturedProperties = () => {
    const [posts, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3008/feature")
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

    return (
        <div className="container">
            <div className="fp">
                {posts &&
                    posts.map((post) => (
                        <PostFeaturedPropertie key={post.id} post={post} />
                ))}
                {isLoading && <h2>Loding ...</h2>}
                {!posts && !isLoading && !errMsg && (
                    <div className="not-found">No Posts</div>
                )}
                {errMsg && <div className="error">{errMsg}</div>}
                {/* <Link to="/hotels/2">
                    <div className="fpItem">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg"/>
                        <span className="fpName">Apart hotel Stare Mailto</span>
                        <span className="fpCity">Madrid</span>
                        <span className="fpPrice">Starting from $120</span>
                        <div className="fpRating">
                            <button>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}