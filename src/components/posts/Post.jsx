import React from 'react';
import { Link } from "react-router-dom";

import "../featured/featured.css";
import "../Style/custom.css";

const Post = ({ post }) => {
    return (
        <Link to="/hotels">
            <div className="featuredItem">
                <div className="perantImage">
                    <img src={post.image} alt="" className="featuredImg"/>
                </div>
                <div className="featuredTitles">
                    <h2>{post.title}</h2>
                    <span>{post.des}</span>
                </div>
            </div>
        </Link>
    )
}
export default Post