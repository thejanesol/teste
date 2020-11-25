import React from "react";
import { Link } from "react-router-dom";

import "./SocialMediaNav.css";

const SocialMediaNav = (props) => {
    return (
        <section>
        <ul className={`social-media-nav ${props.className}`}>
            <li id="facebook-logo-item">
                <Link id="facebook-logo-link" className="link" to="/">
                    <img className="social-icon" src={props.FacebookLogo} alt="facebook logo" />
                </Link>
            </li>
            <li id="google-plus-logo-item">
                <Link id="google-plus-logo-link" className="link" to="/">
                    <img className="social-icon" src={props.GooglePlusLogo} alt="google plus logo" />
                </Link>
            </li>
            <li id="twitter-logo-item">
                <Link id="twitter-logo-link" className="link" to="/">
                    <img className="social-icon" src={props.TwitterLogo} alt="twitter logo" />
                </Link>
            </li>
            <li id="instagram-logo-item">
                <Link id="instagram-logo-link" className="link" to="/">
                    <img className="social-icon instagram" src={props.InstagramLogo} alt="instagram logo" />
                </Link>
            </li>
        </ul>
    </section>
    );
};

export default SocialMediaNav;