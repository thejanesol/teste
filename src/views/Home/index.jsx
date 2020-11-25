import React from "react";
import Navbar from '../../components/Navbar';
import HomeContent from '../../components/HomeContent';
import Services from '../Services';
import About from '../About';
import Contact from '../Contact';
import Logo from "../../components/Logo";

import "./Home.css";
import Prices from "../Prices";

const Home = () => {
    return (
        <>
            <section className="page" id="home-page">
                <Logo id="home-logo" />
                <Navbar />
                <HomeContent />
            </section>
            
            <About />
            <Services />
            <Prices />
            <Contact />
        </>
    );
};

export default Home;