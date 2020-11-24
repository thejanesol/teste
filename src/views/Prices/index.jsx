import React, { useState } from "react";
import price from "../../data/price.json";
import PriceCard from "../../components/PriceCard";

import "./Prices.css";

const Prices = () => {
    const [prices] = useState(price);

    return (
        <section className="page" id="prices-page">
            <p class="subtitle">Pricing</p>
            <h2 class="main-page-title">Our Pricing</h2>
            <section className="cards-conteiner">
                {prices.map(price => {
                    return (
                        <PriceCard
                            btnId={price.btnId}
                            title={price.title}
                            description={price.description}
                            amount={price.amount}
                            btnClass="price-card-btn"
                        />)
                })}
            </section>
        </section>
    );
}

export default Prices;