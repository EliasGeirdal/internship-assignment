import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='bg-lightgrey mb-1 card-container'>
            <img src={props.img}/>
            <div className='container-small'>
                <h3>{props.headline}</h3>
                <p>{props.text}</p>
                <a className='purple'>{props.linkText}</a>
            </div>
        </div>
    );
};

export default Card;