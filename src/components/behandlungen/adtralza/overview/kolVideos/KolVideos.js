import React from 'react';
import Video from "./video/Video";
import './KolVideos.css';

const videos = [{
    title: 'Video title',
    description: 'Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image',
    thumbnailUrl: ''
}, {
    title: 'Video title',
    description: 'Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image',
    thumbnailUrl: ''
}, {
    title: 'Video title',
    description: 'Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image',
    thumbnailUrl: ''
}, {
    title: 'Video title',
    description: 'Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image',
    thumbnailUrl: ''
}
];

const KolVideos = () => {
    return (
        <div className='container'>
            <h3>KOL Videos - get expert insights here</h3>
            <p>See what Key opinion leaders have to say about their experiences with Adtralza® </p>
            <div className='kol-video-container'>
                {videos.map(item => <Video key={Math.random()} {...item} />)}
            </div>
        </div>
    );
};

export default KolVideos;