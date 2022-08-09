// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./featured.css";
import "../Style/custom.css";

const Featured = () => {

    return (
        <div className="container">
            <div className="featured">
                <Link to="/hotels">
                    <div className="featuredItem">
                        <div className="perantImage">
                            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="     alt="" className="featuredImg"/>
                        </div>
                        <div className="featuredTitles">
                            <h2>Dublin</h2>
                            <span>123</span>
                        </div>
                    </div>
                </Link>

                <Link to="/hotels">
                    <div className="featuredItem">
                        <div className="perantImage">
                            <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="     alt="" className="featuredImg"/>
                        </div>
                        <div className="featuredTitles">
                            <h2>Austin</h2>
                            <span>586</span>
                        </div>
                    </div>
                </Link>

                <Link to="/hotels">
                    <div className="featuredItem">
                        <div className="perantImage">
                            <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="     alt="" className="featuredImg"/>
                        </div>
                        <div className="featuredTitles">
                            <h2>Reno</h2>
                            <span>394</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Featured