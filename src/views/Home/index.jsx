import React from "react";
import Navbar from '../../components/Navbar';
import HomeContent from '../../components/HomeContent';

import "./Home.css";

const Home = () => {
    return (
        <section className="page" id="home-page">
            <Navbar />
            <HomeContent />
        </section>
    );
};

export default Home;