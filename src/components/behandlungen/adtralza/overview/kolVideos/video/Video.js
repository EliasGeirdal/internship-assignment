import React from 'react';
import './Video.css';

const Video = (props) => {
    return (
        <div className='video-container'>
            <div className='thumbnail-container'>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24.8714" cy="25.085" r="24.4861" fill="#C017A2"/>
                    <path
                        d="M34.6428 23.3528C35.9761 24.1226 35.9761 26.0471 34.6428 26.8169L21.4857 34.4132C20.1523 35.183 18.4857 34.2207 18.4857 32.6811L18.4857 17.4886C18.4857 15.949 20.1523 14.9868 21.4857 15.7566L34.6428 23.3528Z"
                        fill="white"/>
                </svg>
            </div>
            <div className='video-text-container'>
                <h5 className='m-0'>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Video;