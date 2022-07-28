import { useState, useEffect } from "react";
import PostPropList from "../posts/PostPropList";

import "./propertyList.css"
import "../Style/custom.css"

const PropertyList = () => {

    const [posts, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3007/pList")
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
            <div className="pList">
            {posts &&
                posts.map((post) => (
                    <PostPropList key={post.id} post={post} />
            ))}
            {isLoading && <h2>Loding ...</h2>}
            {!posts && !isLoading && !errMsg && (
                <div className="not-found">No Posts</div>
            )}
            {errMsg && <div className="error">{errMsg}</div>}

                {/* <Link to="/hotels/2">
                    <div className="pListItem">
                        <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="pListImg" />
                        <div className="pListTitle">
                            <h3>Hotels</h3>
                            <span>233 hotels</span>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}
export default PropertyList


{/* <div className="posts">
    {posts && posts.map(({id,title,des,image}) => (
        // < key={post.id} post={post} handleDelete={handleDelete} />
        // Post Component
        
        <div className="post">
            <div className="id">
            {id}
            </div>
            <div className="title">
            {title}
            </div>
            <div className="des">
            {des}
            </div>
            <div className="image">
                <img src={`${image}`} />
            </div>
        </div>
    ))}
</div> */}