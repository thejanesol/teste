import React from "react";
import Navbar from '../../components/Navbar';
import HomeContent from '../../components/HomeContent';
import Logo from "../../components/Logo";

import "./Home.css";

const Home = () => {
    return (
        <section className="page" id="home-page">
            <Logo id="home-logo"/>
            <Navbar />
            <HomeContent />
        </section>
    );
};

export default Home;