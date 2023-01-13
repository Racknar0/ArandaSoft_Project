import React from 'react';

const Hero = () => {
    return (
        <>
        <div className="hero">
            <p> Recetas </p>
            <p> para todos </p>
        </div>
        <div className='hero-medium'>
            <img className='img-hero' src="./assets/bcq.jpg" alt="" />
            <p className='recipes'> Recetas </p>
            <p className='to-all'> para todos </p>
        </div>
        </>
    );
};

export default Hero;
