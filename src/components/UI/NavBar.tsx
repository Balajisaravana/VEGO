import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


const NavBar = () => {
    return(
        <nav>
            <div>
                Logo
            </div>
            <ul>
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