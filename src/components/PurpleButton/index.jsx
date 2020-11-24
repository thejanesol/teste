import React from "react";

import "./PurpleButton.css";

const PurpleButton = (props) => {
    return (
        <button className={`purple-button ${props.className}`} id={props.id}>{props.title}
        </button>
    );
};

export default PurpleButton;