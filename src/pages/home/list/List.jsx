import "./list.css";
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/header/Header'
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../../components/searchItem/SearchItem";
import MasterLayout from "../../../layouts/MasterLayout";

const List = () => {

    const location =useLocation();
    const [destination, setDestination] = useState(location.state?.destination ?? null);
    const [date, setDate] = useState(location.state?.date ?? [{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options ?? null);

    return (
        <MasterLayout>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h2 className="lsTitle">Search</h2>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>

                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                            { openDate && (<DateRange
                                onChange={item=>setDate([item.selection])} 
                                minDate={new Date()}
                                className="date"
                                ranges={date}
                                />)}
                        </div>
                        <div className="lsItem">
                            <label>options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOpitonText">Min Price <small>Pre night</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                
                                <div className="lsOptionItem">
                                    <span className="lsOpitonText">Max Price <small>Pre night</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOpitonText">Adult </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder="Adult" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOpitonText">Children </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder="Children" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOpitonText">Room </span>
                                    <input type="number"min={1} className="lsOptionInput" placeholder="Room" />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default List