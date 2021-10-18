import React from 'react';
import RoundCard from "./roundCard/RoundCard";
import './RoundCards.css';

// pack this into json
let card1Headline = 'Long term sustained improvement';
let card1Text = '9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). '
let card1ButtonText = 'See efficacy and trial data';
let card1ImgUrl = '/images/9outof10.png';

let card2Headline = 'Improvements in the burden of disease';
let card2Text = 'Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).';
let card2ButtonText = 'Learn more about quality of life improvements';
let card2ImgUrl = '/images/handWithHeart.svg';

let card3Headline = 'Good safety profile';
let card3Text = 'The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks* and 52 weeks(19).';
let card3ButtonText = 'See safety profile ';
let card3ImgUrl = '/images/handWithAcceptance.svg';

const childProps =
    {
        props: [{
            headline: card1Headline,
            text: card1Text,
            buttonText: card1ButtonText,
            img: card1ImgUrl
        }, {
            headline: card2Headline,
            text: card2Text,
            buttonText: card2ButtonText,
            img: card2ImgUrl
        }, {
            headline: card3Headline,
            text: card3Text,
            buttonText: card3ButtonText,
            img: card3ImgUrl
        }]
    }

const RoundCards = () => {
    return (
        <div className='container'>
            <div className='round-cards-container'>
                {childProps.props.map(item => <RoundCard {...item} />)}
            </div>
        </div>
    );
};

export default RoundCards;