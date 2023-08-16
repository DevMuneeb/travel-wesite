import React, { useState } from 'react';
import './OurRoomSuites.css'; // Create this CSS file for styling

const OurRoomSuites = () => {
  const numCards = 4; // Number of cards you have
  const cardWidth = 300; // Width of each card including margin

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollClick = (direction) => {
    let newPosition;

    if (direction === 'left') {
      newPosition = scrollPosition - cardWidth;
      if (newPosition < -cardWidth * numCards) {
        newPosition = 0;
      }
    } else {
      newPosition = scrollPosition + cardWidth;
      if (newPosition > 0) {
        newPosition = -cardWidth * (numCards - 1);
      }
    }
    
    if (direction === 'right') {
        newPosition = scrollPosition - cardWidth;
        if (newPosition < -cardWidth * numCards) {
          newPosition = 0;
        }
      } else {
        newPosition = scrollPosition + cardWidth;
        if (newPosition > 0) {
          newPosition = -cardWidth * (numCards - 1);
        }
      }

    setScrollPosition(newPosition);
  };

  return (
    <div className="room-and-suites-container">
      <div className="section-heading">
       <h3>Our Rooms and Suites</h3>
        <button className="scroll-button" onClick={() => handleScrollClick('left')}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M15.2929 3.29297L6.58594 12L15.2929 20.707L16.7069 19.293L9.41394 12L16.7069 4.70697L15.2929 3.29297Z" />
</svg>
             
    
        </button>
        <button className="scroll-button" onClick={() => handleScrollClick('right')}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
   <path d="M7.29297 4.70697L14.586 12L7.29297 19.293L8.70697 20.707L17.414 12L8.70697 3.29297L7.29297 4.70697Z" />
    </svg></button>
      </div>
      <div className="scroll-container">
        <div className="image-scroll-wrapper">
          <div
            className="image-scroll-content"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            <div className="card1">
              <div className="Room-image1"></div>
              <h3 className='DeluxRoom'>Delux </h3>
            </div>
            <div className="card2">
              <div className="Room-image2"></div>
              <h3 className='StandardRoom'>Standard</h3>
            </div>
            <div className="card3">
              <div className="Room-image3"></div>
              <h3 className='PremiumRoom'>Premium Room</h3>
            </div>
            <div className="card4">
              <div className="Room-image4"></div>
              <h3 className='PremiumRoom'>Family Room</h3>
            </div>
            <div className="card1">
              <div className="Room-image1"></div>
              <h3 className='DeluxRoom'>Delux Room</h3>
            </div>
            <div className="card2">
              <div className="Room-image2"></div>
              <h3 className='StandardRoom'>Standard Room</h3>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRoomSuites;
