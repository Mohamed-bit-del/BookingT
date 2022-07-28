import React from 'react';
import { Link } from "react-router-dom";

import "../propertyList/propertyList.css";
import "../Style/custom.css";

const PostPropList = ({ post }) => {
    return (
        <Link to="/hotels/2">
            <div className="pListItem">
                <img src={post.image} alt="" className="pListImg" />
                <div className="pListTitle">
                    <h3>{post.title}</h3>
                    <span>{post.des}</span>
                </div>
            </div>
        </Link>
    )
}
export default PostPropList