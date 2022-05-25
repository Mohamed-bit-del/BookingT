import "./list.css";
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/header/Header'

const List = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h2 className="lsTitle">Search</h2>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>

                        <div className="lsItem">
                            <label>Check-in Date</label>
                            
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    )
}

export default List