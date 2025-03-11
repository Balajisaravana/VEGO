import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BrandLogo } from "@/mock";

type CustomeNav = {
    className ?: string
}
const NavBar:  React.FC<CustomeNav> = ({className}) => {
    return(
        <nav className={"nav-container" + className}>
            <div>
             {/* <img src={BrandLogo}  alt="VOGA" /> */}
             <h2 className={"nav-logo"+ className}>VOGA</h2>
            </div>
            <ul className={"nav-left"+ className}>
                <li>
                    <Link to='/'>
                       Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                    About US
                    </Link>
                </li>
                <li>
                    <Link to='/services'>
                 Services
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Button> Let's Conntect</Button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar