import React from 'react';
import './IL13.css';

let headline = 'Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.';
let paragraph1 = 'By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).';
let paragraph2 = 'Adtralza® selectively modulates the dysregulated immune system by(1):';
let bulletpoints = ['— Reducing markers of skin inflammation', "— Improving markers of skin barrier integrity", '— Reducing epidermal thickness']
let buttonText = 'Watch the video';

const Il13 = () => {
    return (
        <div className='container'>
            <div className='il13-container'>
                <div>
                    <h3>{headline}</h3>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <ul>
                        {bulletpoints.map(item => <li>{item}</li>)}
                    </ul>
                    <div className='bg-purple il13-button'>
                        <h3>{buttonText}</h3>
                    </div>
                    <p>Duration: 2:43</p>
                </div>
                <div className='il13-image-container'>
                    <img className='il13Img' src='/images/il13cytokine.png' alt='cytokine'/>
                </div>
            </div>
        </div>
    );
};

export default Il13;