import React from 'react';
import About from '../home/About';
import Feature from '../home/Feature';
import Hero from '../home/Hero';

const Home = () => {
    return (
        <div className="main">
            <Hero />
            <About/>
            <Feature/>
        </div>
    );
};

export default Home;