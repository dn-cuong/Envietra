import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <img src={props.image} alt={props.name} />
            <p className="name">{props.name}</p>
            <p className='name-title'>{props.position}</p>
        </div>
    );
}

export default Card;
