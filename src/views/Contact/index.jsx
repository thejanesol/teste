import React from "react";
import PurpleButton from "../../components/PurpleButton";
import Footer from "../../components/Footer";

import "./Contact.css";

const Contact = () => {
    return (
        <section className="page" id="contact-page">
            <p className="subtitle">Newsletter</p>
            <h2 className="contact-page-title">Do you want to get
            <span className="main-page-title special-news">Special News?</span></h2>

            <form action="/">
                <input type="email" name="email" id="email-input" required placeholder="Drop Your Email"/>
                <PurpleButton
                className="subscribe-btn" id="subscribe-form-btn" title="Subscribe"/>
            </form>

            <Footer/>
        </section>
    );
};

export default Contact;