import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import "../../style/Global.css";

const Navbar = () => {
    return (
        <nav>
            <section id="logo"><h2>logo.</h2></section>
            <ul id="nav-bar">
                <li className="nav-item"><Link className="link" to="/">HOME</Link></li>
                <li className="nav-item"><Link className="link" to="/?">SERVICES</Link></li>
                <li className="nav-item"><Link className="link" to="/?">PRICES</Link></li>
                <li className="nav-item"><Link className="link" to="/?">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;