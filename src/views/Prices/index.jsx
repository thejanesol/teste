import React, { useState } from "react";
import { priceCards1, priceCards2, priceCards3 } from "../../data/price.js";
import PriceCard from "../../components/PriceCard";

import "./Prices.css";

const Prices = () => {

    const priceCards = [priceCards1, priceCards2, priceCards3];
    const [count, setCount] = useState(0);

    function setCurrentCardOnBtn(btnCounter) {
        if (count === btnCounter){
            return "current-carousel-btn"
        }
    }

    return (
        <section id="prices-page" className="page">
            <p className="subtitle">Pricing</p>
            <h2 className="main-page-title">Our Pricing</h2>
            <section className="cards-conteiner">
                {priceCards[count].map(price => {
                    return (
                        <PriceCard
                            id={price.id}
                            btnId={price.btnId}
                            title={price.title}
                            description={price.description}
                            amount={price.amount}
                            btnClass="price-card-btn"
                        />)
                })}
                <ul id="carousel-btns">
                    <li key="price-card-btn-1" id="price-card-btn-1">
                        <button class={`carousel-btn ${setCurrentCardOnBtn(0)}`} onClick={e => { setCount(0) }}>
                        </button>
                    </li>
                    <li key="price-card-btn-2" id="price-card-btn-2">
                        <button class={`carousel-btn ${setCurrentCardOnBtn(1)}`} onClick={e => { setCount(1) }}>
                        </button>
                    </li>
                    <li key="price-card-btn-3" id="price-card-btn-3">
                        <button class={`carousel-btn ${setCurrentCardOnBtn(2)}`} onClick={e => { setCount(2) }}>
                        </button>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default Prices;