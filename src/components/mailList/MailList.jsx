import "./mailList.css";
import "../custom.css";
import MasterLayout from "../../layouts/MasterLayout";

const MailList = () => {
    return (
        <MasterLayout>
            <div className="mail">
                <h2 className="mailTitle">Save time, save money!</h2>
                <span className="mailDesc">Sign up and we'll send the best deals to you</span>
                <div className="mailInputContainer">
                    <input typr="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </MasterLayout>
    )
}

export default MailList