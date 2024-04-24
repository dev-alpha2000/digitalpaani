

import React from 'react';
import '../App.css';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="WeatherDisplay">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
