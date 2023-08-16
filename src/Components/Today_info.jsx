import React, { useState, useEffect } from 'react';
import './Today_info.css';

const Today_info = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState({});
  const API_KEY = 'e9dc5f58ec6952b5c03a0c2771b4b04a';
  const { latitude, longitude } = locationData;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;


  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position);
          const { latitude, longitude } = position.coords;
          setLocationData({ latitude, longitude });
        },
        error => {
          console.error('Error fetching location:', error);
        }
      );
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (latitude !== undefined && longitude !== undefined) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <div className='Today_info'>
      <h1 className='label'></h1>
      <div className="date_info">
      <div className="date-icon"></div>
      <p className='label_date'>Today Date</p>
      <p className='current_Date'>{currentDate.toLocaleDateString()}</p>
      </div>
      <div className="time_info">
      <div className="time-icon"></div>
      <p className='label_time'>Current Time</p>
      <p className='current_Time'> {currentTime.toLocaleTimeString()}</p>
      </div>
      <div className='temp_info'>
      <div className="temp-icon"></div>
     <p className='label_temp'> Temperature weather</p>
      <h3 className='current_Temp'> {weatherData.main && weatherData.main.temp} °C</h3>
      </div>
      </div>
   
  );
};

export default Today_info;
