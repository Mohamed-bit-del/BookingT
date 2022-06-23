import "./mailList.css";
import "../Style/custom.css";

const MailList = () => {
    return (
        <div className="baGr">
            <div className="container">
                <div className="mail">
                    <h2 className="mailTitle">Save time, save money!</h2>
                    <span className="mailDesc">Sign up and we'll send the best deals to you</span>
                    <div className="mailInputContainer">
                        <input typr="text" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailList