import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css";
import "../Style/custom.css";
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';
import Navigation from "./Navigation";
import MobileNavigation from './MobileNavigation';

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult: 1,
        childern: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions(prev=>{
            return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = ()=>{
        navigate("/hotels", {state:{ destination, date, options }});
    };

    return (
        <header className="baCo">
            <div className="container">
                <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                    <div className='NavBar'>
                        <Navigation />
                        <MobileNavigation />
                    </div>
                    {type !== "list" && 
                    <>
                        <h2 className="headerTitel">A lifetime of discounts? It's Genius.</h2>
                        <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
                        {/* <button className="headerBtn">Sign in / Register</button> */}

                        <div className="headerSearch">
                            <div className="headerSearshItem">
                                <FontAwesomeIcon icon={faBed} className="heaerIcon" />
                                <input type="text" placeholder="Where are you going" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
                            </div>

                            <div className="headerSearshItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="heaerIcon" />
                                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>

                            <div className="headerSearshItem">
                                <FontAwesomeIcon icon={faPerson} className="heaerIcon" />
                                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.childern} childern . ${options.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <sapn className="optionText">Adult</sapn>
                                        <div className="optionCounter">
                                            <button 
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton" 
                                                onClick={()=>handleOption("adult", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <sapn className="optionText">Childern</sapn>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.childern <= 0}
                                                className="optionCounterButton"
                                                onClick={()=>handleOption("childern", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.childern}</span>
                                            <button className="optionCounterButton" onClick={()=>handleOption("childern", "i")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <sapn className="optionText">Room</sapn>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={()=>handleOption("room", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="headerSearchBtn">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        </header>
    )
}

export default Header