import "./Cards.css";
import React from "react";

const Cards = props => (

    <div className="cardholder">
        {props.children}
    </div>
);

export default Cards;