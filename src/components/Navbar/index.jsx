import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css";
import "../../style/Global.css";

const Navbar = () => {
    return (
        <nav>
            <ul id="nav-bar">
                <li id="nav-link-home" className="nav-item">
                    <Link className="link" to="/">HOME</Link>
                </li>

                <li id="nav-link-services" className="nav-item">
                    <Link className="link" to="/#services-page">SERVICES</Link>
                </li>

                <li id="nav-link-prices" className="nav-item">
                    <Link className="link" to="/#prices-page">PRICES</Link>
                </li>
                
                <li id="nav-link-contact" className="nav-item">
                    <Link className="link" to="/#contact-page">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;