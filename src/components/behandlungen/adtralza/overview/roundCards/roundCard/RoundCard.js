import React from 'react';
import './RoundCard.css';

const RoundCard = (props) => {
    return (
        <div className='round-card-container'>
            <div className='round-card-logo-container'>
                <svg className='round-card-decoration' width="148" height="50" viewBox="0 0 148 50" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M40.1398 48.7299C29.3893 48.0829 26.743 47.274 30.0509 47.5976C38.9207 48.215 47.8278 48.1068 56.6792 47.274C71.4779 45.9028 85.9184 42.0161 99.3507 35.7888C110.112 30.5331 120.214 24.0732 129.452 16.5389C136.234 11.0389 141.857 6.99481 145.165 6.99481C145.33 6.99481 145.661 7.15656 145.826 7.15656C148.473 7.64185 147.315 12.9801 138.714 20.2595C130.279 27.3771 114.898 36.5976 93.2312 42.7446C78.5825 46.8577 63.4184 48.9506 48.1779 48.9629C45.0851 48.9629 42.376 48.869 40.1398 48.7299Z"
                        fill="url(#paint0_linear_1:733)"/>
                    <path
                        d="M112.084 18.4802C104.476 27.2154 96.8682 33.0389 97.3644 34.0095C97.6952 34.98 109.438 30.4507 120.519 20.4213C131.766 10.392 133.916 -0.446133 129.947 0.0391576C125.812 0.200921 119.858 9.90672 112.084 18.4802Z"
                        fill="#DA9BC5"/>
                    <path
                        d="M36.6447 49.5386C34.1026 49.3089 31.3984 48.987 28.3932 48.568H28.2278C22.8563 47.9816 17.5449 46.9535 12.35 45.4945C10.6961 45.0092 9.37288 44.5239 8.21513 44.2004C5.56883 43.2298 3.58416 42.5827 2.5918 42.0975C2.00301 41.7914 0.771035 40.7495 0.771035 40.7495C0.771035 40.7495 0.12782 40.4143 0.771267 39.73C1.41471 39.0457 15.0447 46.2101 27.7316 47.2739C40.4185 48.3378 30.5433 47.5974 31.3703 47.7592C34.0166 47.921 36.8283 48.0827 39.64 48.0827C46.5946 48.0578 53.5262 47.2985 60.3141 45.818C67.3887 44.0775 74.3481 41.9166 81.1537 39.3475C86.9495 37.3227 92.5875 34.8899 98.0238 32.0681C99.3469 31.2593 100.835 30.4505 102.324 29.6416C103.813 28.8328 105.136 27.8622 106.624 27.2152C107.743 26.6891 108.905 26.2562 110.098 25.9211C110.098 25.9211 110.428 25.7593 111.255 26.5681H111.751C111.87 26.6034 111.982 26.6581 112.082 26.7299V28.1858C111.09 30.6122 103.316 35.9504 99.1815 38.0534L95.2122 39.9945C89.2109 42.7786 82.9529 44.9993 76.5226 46.6269C72.8839 47.4357 69.08 48.0827 65.4413 48.568H65.2759C62.6296 48.8915 59.9833 49.2151 57.6678 49.3768C57.0371 49.4351 56.4175 49.489 55.8088 49.5386H36.6447Z"
                        fill="url(#paint1_linear_1:733)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1:733" x1="143.416" y1="29.773" x2="33.1495" y2="24.6323"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#97CAEB"/>
                            <stop offset="0.0667423" stopColor="#97CAEB"/>
                            <stop offset="0.1774" stopColor="#7CB7DD"/>
                            <stop offset="0.4178" stopColor="#4791C1"/>
                            <stop offset="0.6263" stopColor="#2076AD"/>
                            <stop offset="0.7924" stopColor="#0966A0"/>
                            <stop offset="0.8953" stopColor="#00609C"/>
                            <stop offset="1" stopColor="#00609C"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1:733" x1="-65.3835" y1="37.8365" x2="111.971" y2="37.8365"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#97CAEB"/>
                            <stop offset="0.2666" stopColor="#97CAEB"/>
                            <stop offset="0.3397" stopColor="#7CB7DD"/>
                            <stop offset="0.4986" stopColor="#4791C1"/>
                            <stop offset="0.6363" stopColor="#2076AD"/>
                            <stop offset="0.7461" stopColor="#0966A0"/>
                            <stop offset="0.8141" stopColor="#00609C"/>
                            <stop offset="1" stopColor="#00609C"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='round-card-svg' width="220" height="220" viewBox="0 0 220 220" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1:730)">
                        <circle cx="110" cy="100" r="90" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_1:730" x="0" y="0" width="220" height="220" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="10"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.596078 0 0 0 0 0.792157 0 0 0 0 0.921569 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1:730"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1:730" result="shape"/>
                        </filter>
                    </defs>
                    <image
                        x="50%"
                        y="50%"
                        height="100"
                        width="100"
                        transform="translate(-50,-60)"
                        // height="250"
                        href={props.img}/>
                </svg>
            </div>

            <div className='round-card-text-container'>
                <h3>{props.headline}</h3>
                <p>{props.text}</p>
                <a><strong>{props.buttonText}</strong></a>
            </div>
        </div>
    );
};

export default RoundCard;