import React from 'react';
import './Pack.css';

const Pack = () => {
    return (
        <div className='container'>
            <div className='pack-container'>
                <div className='adtralza-pack-container'>
                    <img src="/images/adtralza-pack.png" alt="adtralza pack" className='packImg'/>
                    {/*<img src="/images/adtralza-pack_shadow.png" alt="adtralza shadow" className='packShadow'/>*/}
                </div>
                <div className='pack-text-container'>
                    <h3 className='blue'>It is the first and only biologic developed to specifically neutralize IL-13, a
                        key
                        driver of atopic dermatitis signs and symptoms(1,2)</h3>
                    <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
                </div>
            </div>
        </div>
    );
};

export default Pack;