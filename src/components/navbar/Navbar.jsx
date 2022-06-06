import { Link } from "react-router-dom";
import "./navbar.css";

const Navebar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <h1 className="logo">ReactBoking</h1>
                </Link>

                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navebar