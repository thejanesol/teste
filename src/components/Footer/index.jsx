import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
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
                    <li id="quick-link-1"><Link className="link" to="/teste/#about-page">About</Link></li>
                    <li id="quick-link-2"><Link className="link" to="/teste/#home-page">Home</Link></li>
                    <li id="quick-link-3"><Link className="link" to="/teste/#prices-page">Pricing</Link></li>
                    <li id="quick-link-4"><Link className="link" to="/teste/#home-page">Location</Link></li>
                    <li id="quick-link-5"><Link className="link" to="/teste/#home-page">Office</Link></li>
                </ul>
            </section>

            <section>
                <h4 className="footer-section-title">Hours</h4>
                <ul id="hours-info">
                    <div className="days-of-week">
                        <li id="monday-hours">Monday:</li>
                        <li id="tuesday-hours">Tuesday:</li>
                        <li id="wednesday-hours">Wednesday:</li>
                        <li id="thursday-hours">Thursday:</li>
                        <li id="friday-hours">Friday:</li>
                    </div>
                    <div className="opening-hours">
                        <li id="monday-hours-hours">09:00-18:00</li>
                        <li id="tuesday-hours-hours">09:00-18:00</li>
                        <li id="wednesday-hours-hours">09:00-18:00</li>
                        <li id="thursday-hours-hours">09:00-18:00</li>
                        <li id="friday-hours-hours">09:00-18:00</li>
                    </div>
                </ul>
            </section>

            <section id="contact">
                <h4 className="footer-section-title">Contact</h4>
                <ul id="contact-info">
                    <div id="contact-icons">
                        <li id="contact-telephone-icon">
                            <span><img src={TelephoneIcon} alt="telephone icon" /></span>
                        </li>

                        <li id="contact-email-icon">
                            <span><img src={EmailIcon} alt="email icon" /></span>
                        </li>

                        <li id="contact-location-icon" className="location-item"
                        ><span><img src={LocationIcon} alt="location icon" /></span>
                        </li>
                    </div>

                    <div id="contact-data">
                        <li id="contact-telephone-data" className="contact-item">
                            <p>000-000-0000</p>
                        </li>

                        <li id="contact-email-data" className="contact-item">
                            <p>info@email.com</p>
                        </li>
                        <li id="contact-location-data" className="contact-item location-item">
                            <p>New York, US</p>
                        </li>
                    </div>
                </ul>
            </section>

        </section>
    );
};

export default Footer;