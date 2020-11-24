import React from "react";
import { Link } from "react-router-dom";

import HomeImage from "../../img/undraw_social_ideas_e8rj.svg";
import FacebookLogo from "../../img/social/purple-icons/003-facebook.svg";
import GooglePlusLogo from "../../img/social/purple-icons/002-google-plus.svg";
import TwitterLogo from "../../img/social/purple-icons/001-twitter-logo-silhouette.svg";
import InstagramLogo from "../../img/social/purple-icons/instagram.svg";
import PurpleButton from "../../components/PurpleButton";

import "./HomeContent.css";

const HomeContent = () => {
    return (
        <main id="home-content">
            <section>
                <ul id="social-media-nav">
                    <li>
                        <Link className="link" to="/">
                            <img src={FacebookLogo} alt="facebook logo" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/">
                            <img src={GooglePlusLogo} alt="google plus logo" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/">
                            <img src={TwitterLogo} alt="twitter logo" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/">
                            <img src={InstagramLogo} alt="instagram logo" />
                        </Link>
                    </li>
                </ul>
            </section>

            <section id="description">
                <h1 class="word-break main-page-title">
                    <span>SOCIAL</span>
                    <span>MEDIA FOR BUSINESS</span>
                </h1>

                <p id="description-text" class="word-break light-paragraph">
                    <span>PERFOMANCE BASED SOCIAL MEDIA AGENCY</span>
                    <span>WE ARE LOREM MEDIA</span>
                </p>

                <PurpleButton id="get-audit" title="GET A FREE AUDIT"/>
            </section>

            <section id="img-content">
                <img id="home-img" src={HomeImage} alt="undraw_social_ideas" />
            </section>
        </main>
    );
};

export default HomeContent;