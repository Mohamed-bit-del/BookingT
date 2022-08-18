import { useState } from "react";
import NavLinks from "./NavLinks";
import Hamburger from 'hamburger-react';

function MobileNavigation() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="MobileNavigation">
            {/* <NavLinks /> */}
            <div className="iconClick">
                <Hamburger direction="left" color="white" toggled={isOpen} toggle={setOpen} />
                {isOpen && <NavLinks/> }
            </div>
        </nav>
    )
}

export default MobileNavigation