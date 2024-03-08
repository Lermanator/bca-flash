import "./DirectorCard.css";
import React, {useState} from 'react';

function DirectorCard(props) {
    const [activeContent, setActiveContent] = useState(1);

    const handleChangeContent = () => {
        setActiveContent(activeContent == 1 ? 2 : 1);
    }

    return (
        <div className="card">

            {activeContent == 1 && (
                <div className="face front">
                    <img className="directorImg" src={props.img}/>
                    <h5 className="boardMemberName">{props.firstName + " " + props.lastName}</h5>
                    <button onClick={handleChangeContent} onclassName="aboutBoardMember">{"About " + props.firstName}</button>
                </div>
            )}

            {activeContent == 2 && (
                <div className="face back">
                    <h5>{"About " + props.firstName}</h5>
                    <h6>{props.desc}</h6>
                    <button onClick={handleChangeContent} className="aboutBoardMember">Return to Main</button>
                </div>
            )}

        </div>
    )
}

export default DirectorCard;