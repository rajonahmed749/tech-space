import React from 'react';
import About from '../home/About';
import Hero from '../home/Hero';

const Home = () => {
    return (
        <div className="main">
            <Hero />
            <About/>
        </div>
    );
};

export default Home;