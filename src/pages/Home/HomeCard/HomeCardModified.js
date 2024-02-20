import "./HomeCard.css";
import React, {useState} from 'react';
import {Link} from "react-router-dom";

function HomeCardModified(props) {

    return (
        <div className="homeCard">

            {(
                <div className="face front">
                    <h5 className="q">{props.question}</h5>
                    <h6 style={{ lineHeight: '1.85' }}>{props.answer}</h6>
                    <Link to={props.link}>
                        <button>{props.btn}</button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to={props.link2}>
                        <button>{props.btn2}</button>
                    </Link>
                </div>
            )}

        </div>
    )
}


export default HomeCardModified;