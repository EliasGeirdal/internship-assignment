import React from 'react';
import Header from "../header/Header";
import Behandlungen from "../behandlungen/Behandlungen";
import Footer from "../footer/Footer";

const Main = () => {
    return (
        <div>
            <Header/>
            <Behandlungen/>
            <Footer/>
        </div>
    );
};

export default Main;