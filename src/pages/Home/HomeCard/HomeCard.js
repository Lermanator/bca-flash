import "./HomeCard.css";
import React, {useState} from 'react';

function HomeCard(props) {

    return (
        <div className="card">

            {(
                <div className="face front">
                    <button onclassName="aboutBoardMember">{props.question}</button>
                    <h6>{props.answer}</h6>
                </div>
            )}

        </div>
    )
}

export default HomeCard;