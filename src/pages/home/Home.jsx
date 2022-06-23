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
        <div className="home">
                <Navbar />
                <Header />

            <div className="mb">
                <Featured />

                <div className="container">
                    <h2 className="homeTitle">Browse by property type</h2>
                </div>
                <PropertyList />

                <div className="container">
                    <h1 className="homeTitle">Homes guests love</h1>
                </div>
                <FeaturedProperties />

                <MailList/>
            </div>

            <Footer/>
        </div>
    );
};

export default Home