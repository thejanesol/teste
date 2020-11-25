import React, { useState } from "react";
import service from "../../data/service.json";
import ServiceCard from "../../components/ServiceCard";

import "./Services.css";

import cardOneImg from "../../img/services/001-process.svg";
import cardOneTwo from "../../img/services/002-social-media.svg";
import cardOneThree from "../../img/services/003-responsive.svg";
import cardOneFour from "../../img/services/007-analysis.svg";
import cardOneFive from "../../img/services/004-social-media-1.svg";
import cardOneSix from "../../img/services/008-computer.svg";

const images = [cardOneImg, cardOneTwo, cardOneThree, cardOneFour, cardOneFive, cardOneSix];

const Services = () => {
    const [services] = useState(service);
    let counter = 0;

    return (
        <section id="services-page" className="page">
            <p className="subtitle services-title">OUR SERVICES</p>
            <h2 className="main-page-title services-title">What We Offer</h2>

            <section className="cards-conteiner">
                {services.map(service => {
                    return (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            btnId={`${service.btnId}`}
                            image={images[counter++]}
                            title={service.title}
                            description={service.description}
                            btnClass="service-card-btn"
                            btnTitle="SEE MORE"
                        />)
                })}
            </section>
        </section>
    );
};

export default Services;