import React from 'react';
import Explore from './Explore';
import Partner from './Partner';
import './LaVie.css'
import { useMediaQuery } from 'react-responsive';
const LaVie =()=>{


    return(
        <div className="LaVie">
        <div className="LaVie-content">
       <div className= "LaVie-text">
                <p className="LaVie_heading-1">La Vie Restaurant</p>
                <p className="LaVie_description-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras.</p>
                <ul className='LaVie-list'> 
                    <li className='list-item1'>Vienna Bar </li>
                    <li className='list-item2'>Rolio Club</li>
                    <li className='list-item3'>In Room Dinning  </li>
                </ul>
                <button className='learn-more-btn2'>Learn More</button>
            </div>
            <div className="LaVie-image"></div>
        </div>
    </div>
    );


}
export default LaVie;