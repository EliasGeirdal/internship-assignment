import React from 'react';
import Card from "./card/Card";
import './ClinicalTools.css';

const cards = [{
    headline: "Dosing guide",
    text: "Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). ",
    linkText: "Learn more about application and dosing",
    img: '/images/nurse.png'
}, {
    headline: "Patient injection made simple",
    text: "This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton. \n",
    linkText: "Watch the video",
    img: '/images/injection.png'
}];

const ClinicalTools = () => {
    return (
        <div className='container'>
            <h3>Clinical tools - at a glance</h3>
            <div className='ct-card-container'>
                {cards.map(item => <Card key={item.headline} {...item} />)}
            </div>
        </div>
    );
};

export default ClinicalTools;