import React from 'react';
import './Hero.css'; // You can create a CSS file for styling
import Explore from './Explore';
import Partner from './Partner';


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="Heading-1">The world's largest chain of hotels is Best Western</p>
                    <p className="description-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet,</p>
                     <Explore></Explore>
                    <Partner></Partner>
                </div>
                <div className="hero-image"></div>
            </div>
        </div>
    );
}

export default Hero;
