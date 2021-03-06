import React from "react";
import PurpleButton from "../../components/PurpleButton";
import AboutImage from "../../img/about-image.svg";

import "./About.css";

const About = () => {
    return (
        <section id="about-page" className="page">
            <img id="about-img" src={AboutImage} alt="undraw_social_dashboard_k3pt" />

            <section id="about-content">
                <p className="subtitle">Biography</p>
                <h2 className="main-page-title">Who We Are</h2>
                <p className="light-paragraph">
                    Lorem Media is a full-service social media agency.
                    We offer businesses innovative solutions that deliver
                    the right type of audience to you in the most effective
                    strategies possible. We strive to develop a community around
                    your business, polishing your branding, and improving your public
                    relations.
                </p>
                <p className="light-paragraph">
                    Social media is now one of the most powerful marketing
                    tools with the ability to communicate with a target audience in real time.
                </p>
                <p id="last-paragraph" className="light-paragraph">It's 2019: time to sink or swim.</p>

                <PurpleButton id="see-more" title="SEE MORE"/>

            </section>

        </section>
    );
};

export default About;