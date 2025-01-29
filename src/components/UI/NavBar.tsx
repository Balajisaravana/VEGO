import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BrandLogo } from "@/mock";


const NavBar = () => {
    return(
        <nav className="nav-container">
            <div>
             <img src={BrandLogo} alt="VOGA" />
            </div>
            <ul className="nav-left">
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