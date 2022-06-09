import Featured from "../../components/featured/Featured";
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="baCo">
                <div className="container"><Navbar /></div>
                <div className="container"><Header /></div>
            </div>

            <div className="mb">
                <div className="container"><Featured /></div>
                <div className="container">
                    <h1 className="homeTitle">Browse by property type</h1>
                    <PropertyList />
                </div>
                <div className="container"> 
                    <h1 className="homeTitle">Homes guests love</h1>
                    <FeaturedProperties />
                </div>
                <div className="baGr">
                    <div className="container"><MailList/></div>
                </div>
            </div>
                <div className="container"><Footer/></div>
        </div>
    );
};

export default Home