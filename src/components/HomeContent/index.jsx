import React from "react";
import HomeImage from "../../img/home-image.svg";
import PurpleButton from "../../components/PurpleButton";

import FacebookLogo from "../../img/social-icons/purple/facebook-icon.svg";
import GooglePlusLogo from "../../img/social-icons/purple/google-plus-icon.svg";
import TwitterLogo from "../../img/social-icons/purple/twitter-icon.svg";
import InstagramLogo from "../../img/social-icons/purple/instagram-icon.svg";

import "./HomeContent.css";
import SocialMediaNav from "../SocialMediaNav";

const HomeContent = () => {
    return (
        <main id="home-content">
            <SocialMediaNav className="home-social-icons"
            FacebookLogo = {FacebookLogo}
            GooglePlusLogo = {GooglePlusLogo}
            InstagramLogo = {InstagramLogo}
            TwitterLogo = {TwitterLogo}
            />
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