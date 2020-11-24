import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SocialMediaNav from "../../components/SocialMediaNav";

import FacebookLogo from "../../img/social-icons/white/facebook-icon.png";
import GooglePlusLogo from "../../img/social-icons/white/google-plus-icon.png";
import TwitterLogo from "../../img/social-icons/white/twitter-icon.png";
import InstagramLogo from "../../img/social-icons/white/instagram-icon.png";

import TelephoneIcon from "../../img/footer-icons/telephone.png";
import EmailIcon from "../../img/footer-icons/email.png";
import LocationIcon from "../../img/footer-icons/location.png";

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

            <section>
                <h4 className="footer-section-title">Hours</h4>
                <ul id="hours-info">
                    <li className="days-of-week">
                        <li>Monday:</li>
                        <li>Tuesday:</li>
                        <li>Wednesday:</li>
                        <li>Thursday:</li>
                        <li>Friday:</li>
                    </li>
                    <li className="opening-hours">
                        <li>09:00-18:00</li>
                        <li>09:00-18:00</li>
                        <li>09:00-18:00</li>
                        <li>09:00-18:00</li>
                        <li>09:00-18:00</li>
                    </li>
                </ul>
            </section>

            <section id="contact">
                <h4 className="footer-section-title">Contact</h4>
                <ul id="contact-info">
                    <li id="contact-icons">
                        <li><span><img src={TelephoneIcon} alt="telephone icon"/></span></li>
                        <li><span><img src={EmailIcon} alt="email icon" /></span></li>
                        <li className="location-item"><span><img src={LocationIcon} alt="location icon" /></span></li>
                    </li>
                    <li id="contact-data">
                        <li className="contact-item"><p>000-000-0000</p></li>
                        <li className="contact-item"><p>info@email.com</p></li>
                        <li className="contact-item location-item"><p>New York, US</p></li>
                    </li>
                </ul>
            </section>

        </section>
    );
};

export default Footer;