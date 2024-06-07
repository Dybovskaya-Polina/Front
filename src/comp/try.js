import React from "react";
import "./try.css";

const CurrentWeather = ( props) => {
  const tempp =Math.round(Number(props.temp) - 273.15)
  return (
    <div>
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{ props.city},{props.country}</p>
          <p className="weather-description">{props.weather}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          img src={props.icon} 
        />
      </div>
      <div className="bottom">
        <p className="temperature">{tempp}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              -°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">-</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">-</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">-</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CurrentWeather;
