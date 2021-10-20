import React from 'react';
import './Footer.css';

const links = [{
    name: 'Contact',
}, {
    name: 'Imprint'
}, {
    name: 'Conditions'
}, {
    name: 'Terms of use'
}, {
    name: 'Privacy'
}, {
    name: 'Cookie content'
},]

const Footer = () => {
        return (
            <div className='bg-blue'>
                <div className='footer-outer-container'>
                    <div className='footer-container'>
                        <img src='/images/leologo.png'/>
                        <div className='copyright-text'>
                            <p>© Copyright LEO Pharma 2020
                                LEO and the LEO Lion Design
                                are registered trademarks
                                of LEO Pharma
                                All rights reserved
                            </p>
                        </div>
                    </div>
                    <div className='footer-links'>
                        {links.map(item => <p key={item.name}>{item.name}</p>)}
                    </div>
                </div>
            </div>
        );
    }
;

export default Footer;