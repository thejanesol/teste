import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SocialMediaNav from "../../components/SocialMediaNav";

import FacebookLogo from "../../img/social-icons/white/facebook-icon.png";
import GooglePlusLogo from "../../img/social-icons/white/google-plus-icon.png";
import TwitterLogo from "../../img/social-icons/white/twitter-icon.png";
import InstagramLogo from "../../img/social-icons/white/instagram-icon.png";

import "./Footer.css";

const Footer = () => {
    return (
        <section id="footer-content">
            <section id="stay-in-touch">
                <Logo id="footer-logo" />
                <p id="stay-in-touch-title">Stay in touch</p>
                <SocialMediaNav className="footer-social-icons"
                    FacebookLogo={FacebookLogo}
                    GooglePlusLogo={GooglePlusLogo}
                    InstagramLogo={InstagramLogo}
                    TwitterLogo={TwitterLogo}
                />
            </section>

            <section id="quick-links">
                <h4 className="footer-section-title">Quick links</h4>
                <ul>
                    <li><Link className="link" to="/?">About</Link></li>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/?">Pricing</Link></li>
                    <li><Link className="link" to="/?">Location</Link></li>
                    <li><Link className="link" to="/?">Office</Link></li>
                </ul>
            </section>

            <section id="hours-info">
                <h4 className="footer-section-title">Hours</h4>
                <ul>
                    <li><span className="day-of-week">Monday:</span> 09:00-18:00</li>
                    <li><span>Tuesday:</span> 09:00-18:00</li>
                    <li><span>Wednesday:</span> 09:00-18:00</li>
                    <li><span>Thursday:</span> 09:00-18:00</li>
                    <li><span>Friday:</span> 09:00-18:00</li>
                </ul>

            </section>

            <section id="contact">
                <h4 className="footer-section-title">Contact</h4>
                <ul>
                    <li><p>000-000-0000</p></li>
                    <li><p>info@email.com</p></li>
                    <li><p>New York, US</p></li>
                </ul>
            </section>

        </section>
    );
};

export default Footer;