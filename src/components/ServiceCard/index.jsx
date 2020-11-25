import React from "react";
import PurpleButton from "../../components/PurpleButton";

import "./ServiceCard.css";

const ServiceCard = (data) => {
    return (
        <section key={data.id} id={data.id} className="card">
            <img className="card-img" src={data.image} alt={data.title}/>
            <h4 className="card-title">{data.title}</h4>
            <p>{data.description}</p>
            <PurpleButton className={data.btnClass} id={data.btnId} title={data.btnTitle}/>
        </section>
    );
};

export default ServiceCard;