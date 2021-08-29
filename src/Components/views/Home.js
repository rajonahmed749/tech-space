import React from 'react';
import About from '../home/About';
import Contact from '../home/Contact';
import Faq from '../home/Faq';
import Feature from '../home/Feature';
import Hero from '../home/Hero';
import Pricing from '../home/Pricing';
import Work from '../home/Work';

const Home = () => {
    return (
        <div className="main">
            <Hero />
            <About />
            <Feature />
            <Work />
            <Faq />
            <Pricing/>
            <Contact/>
        </div>
    );
};

export default Home;