import "./HomeCard.css";
import React, {useState} from 'react';
import {Link} from "react-router-dom";

function HomeCardFinal(props) {

    return (
        <div className="homeCard">

            {(
                <div className="face front">
                    <h5 className="q">{props.question}</h5>
                    <h6 className="noBtns" style={{ lineHeight: '1.85' }}>{props.answer}</h6>
                    <img className="logo" src={props.image}></img>
                </div>
            )}

        </div>
    )
}


export default HomeCardFinal;