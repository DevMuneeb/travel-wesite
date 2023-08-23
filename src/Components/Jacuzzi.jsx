import React from 'react';
import './Jacuzzi.css';
import { useMediaQuery } from 'react-responsive';

const Jacuzzi=()=>{
return(
        <div className="Jacuzzi">
        <div className="Jacuzzi-content">
        <div className="Jacuzzi-image"></div>
            <div className= "Jacuzzi-text">
                <p className="Jacuzzi_heading-1">Jazucci Private Spa</p>
                <p className="Jacuzzi_description-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras.   Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis </p>
                <button className='learn-more-btn3'>Learn More</button>
            </div>
           
        </div>
    </div>

    );


}

export default Jacuzzi;