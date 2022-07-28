import React from 'react';
import { Link } from "react-router-dom";


const PostFeaturedPropertie = ({ post }) => {
    return (
        <Link to="/hotels/2">
            <div className="fpItem">
                <img src={post.image} alt="" className="fpImg"/>
                <span className="fpName">{post.name}</span>
                <span className="fpCity">{post.city}</span>
                <span className="fpPrice">{post.price}</span>
                <div className="fpRating">
                    <button>{post.rating1}</button>
                    <span>{post.rating2}</span>
                </div>
            </div>
        </Link>
    )
}
export default PostFeaturedPropertie