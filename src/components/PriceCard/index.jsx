import React from "react";
import PurpleButton from "../../components/PurpleButton";

import "./PriceCard.css";

const PriceCard = (data) => {
    return (
        <section className="card price-card">
            <h4 className="card-title">{data.title}</h4>
            <p className="light-paragraph card-price-description">{data.description}</p>
            <p className="amount">{data.amount}</p>
            <PurpleButton className={data.btnClass} id={data.btnId} title="See Details"/>
        </section>
    );
};

export default PriceCard;