import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='bg-lightgrey mb-1 card-container'>
            <img src={props.img} alt={props.headline} />
            <div className='container-small'>
                <h3>{props.headline}</h3>
                <p>{props.text}</p>
                {/*Swapping this out with Link from react-router-dom*/}
                <a className='purple'>{props.linkText}</a>
            </div>
        </div>
    );
};

export default Card;