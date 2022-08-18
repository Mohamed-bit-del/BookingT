import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./header.css";
import { motion } from "framer-motion";


function NavLinks() {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: -40}

    return (
        <ul className="headerList">
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
            </motion.li>

            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
            </motion.li>
        </ul>
    )
}

export default NavLinks