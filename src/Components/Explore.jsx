import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import'./Explore.css'

const Explore = () => {
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('PREMIUM');
  const [selectedDate, setSelectedDate] = useState('');
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [showRoomTypeDropdown, setShowRoomTypeDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);


  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="explore">
      <div className='dropdown-Guest'>
        <label className='dropdown-label'>Guests:<br></br></label>
        <select className="select-guest" value={guests} onChange={handleGuestsChange}>
          <option value="2">2 Adult</option>
          <option value="3">3 Adult</option>
          <option value="4">4 Adult</option>
        </select>
      </div>
      <div className='dropdown-date'>
        <label className='dropdown-label'>Date:<br></br></label>
        <select  className='select-date' value={selectedDate} onChange={handleDateChange}>
          {Array.from({ length: 30 }, (_, index) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + index);
            const formattedDate = currentDate.toISOString().slice(0, 10);
            return <option key={formattedDate} value={formattedDate}>{formattedDate}</option>;
          })}
        </select>
      </div>

      <div className='dropdown-room'>
        <label className='dropdown-label'>Room Type:<br></br></label>
        <select className="select-Room" value={roomType} onChange={handleRoomTypeChange}>
          <option value="PREMIUM">Premium</option>
          <option value="LUXURY">Luxury Suite</option>
          <option value="SINGLE">Single Bedroom</option>
        </select>
      </div>

     
      <Link to="/booking">
                    <button className="booking-button2">Booking Room</button>
                </Link>
    </div>
  );
};

export default Explore;
