import React from 'react';
import Cover from "./cover/Cover";
import Pack from "./pack/Pack";
import RoundCards from "./roundCards/RoundCards";
import Il13 from "./il13/IL13";
import ClinicalTools from "./clinicalTools/ClinicalTools";
import KolVideos from "./kolVideos/KolVideos";
import References from "./references/References";

const Overview = () => {
    return (
        <div>
            <section className='bg-darkblue'><Cover/></section>
            <section className='bg-lightgrey'><Pack/></section>
            <section className='bg-white'><RoundCards/></section>
            <section className='bg-lightgrey'><Il13/></section>
            <section className='bg-white'><ClinicalTools/></section>
            <section className='bg-lightgrey'><KolVideos/></section>
            <section className='bg-grey'><References/></section>
        </div>
    );
};

export default Overview;