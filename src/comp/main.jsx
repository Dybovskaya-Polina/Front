import React, { useState } from "react";
import "./main.css";

function Weather (props) {

  return (
    <div>
        <div className= 'container'>
        <div className="container_content">
        <div className="container_content_inner">
          <div className="title">
          <h2>The wheather in </h2>
          <h1>{props.city}, {props.country}</h1>
          </div>
        <div className="par">
        <h3>
        <div>
          <p>{(props.weather)[0].toUpperCase()+(props.weather).slice(1)}</p>
          <img
          alt="weather"
          className="weather-icon"
          img src={props.icon} 
          />
          <p>Tempreture:  {Math.round(props.temp - 273.15)} °C</p>
          <p>Wind: {props.wind} m/s</p>
          <p>Humidity: {props.humidity}%</p>
        </div>
        </h3>
        <h2></h2>
        </div>
        </div>
        </div>
        <div className="container_outer_img">
        <div className="img-inner">
        <img src={props.image}   alt="" className="container_img"/>
            </div>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
  );
};

export default Weather;
