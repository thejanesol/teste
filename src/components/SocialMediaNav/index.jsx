import React from "react";
import { Link } from "react-router-dom";

import "./SocialMediaNav.css";

const SocialMediaNav = (props) => {
    return (
        <section>
        <ul className={`social-media-nav ${props.className}`}>
            <li>
                <Link className="link" to="/">
                    <img className="social-icon" src={props.FacebookLogo} alt="facebook logo" />
                </Link>
            </li>
            <li>
                <Link className="link" to="/">
                    <img className="social-icon" src={props.GooglePlusLogo} alt="google plus logo" />
                </Link>
            </li>
            <li>
                <Link className="link" to="/">
                    <img className="social-icon" src={props.TwitterLogo} alt="twitter logo" />
                </Link>
            </li>
            <li>
                <Link className="link" to="/">
                    <img className="social-icon instagram" src={props.InstagramLogo} alt="instagram logo" />
                </Link>
            </li>
        </ul>
    </section>
    );
};

export default SocialMediaNav;