import "./navbar.css";

const Navebar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">lamabokking</span>
                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navebar