import { useState } from "react";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";
import "./navbar.css";
import "../Style/custom.css";

const Navebar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="baCo">
            <div className="container">
                <div className="navbar">
                    <Link to="/">
                        <h1 className="logo">ReactBoking</h1>
                    </Link>

                    <div className="navItem">
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>
                    </div>

                    <Hamburger direction="left" color="white" toggled={isOpen} toggle={setOpen} />

                </div>
            </div>
        </nav>
    )
}

export default Navebar