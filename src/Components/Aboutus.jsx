import React from 'react';
import Explore from './Explore';
import Partner from './Partner';
import './Aboutus.css'
import { useMediaQuery } from 'react-responsive';
const Aboutus =()=>{


    return(
        <div className="about-us">
        <div className="aboutus-content">
        <div className="aboutus-image"></div>
            <div className= "about-text">
                <p className="about_heading-1">Ordinary Best Western 5 Stars Hotel Since 1998</p>
                <p className="about_description-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras.   Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis</p>
                <button className='learn-more-btn'>Learn More</button>
            </div>
           
        </div>
    </div>
    );


}
export default Aboutus;