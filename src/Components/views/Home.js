import React from 'react';
import About from '../home/About';
import Faq from '../home/Faq';
import Feature from '../home/Feature';
import Hero from '../home/Hero';
import Work from '../home/Work';

const Home = () => {
    return (
        <div className="main">
            <Hero />
            <About />
            <Feature />
            <Work />
            <Faq />
        </div>
    );
};

export default Home;