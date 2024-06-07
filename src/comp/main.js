import React from "react";
import "./main.css";
import Form from "./forms";
const Weather = ( props) => {
  const tempp =Math.round(Number(props.temp) - 273.15)
  return (
    <div>
        <div className= 'container'>
        <div className="container_content">
        <div className="container_content_inner">
        <div className="title">
        <h1>Погода</h1>
        </div>
        <div className="par">
        <h3>
        <div>
          <p>{props.city},{props.country}</p>
          <p>{props.weather}</p>
        </div>
        </h3>
        </div>
        </div>
        </div>
        <div className="container_outer_img">
        <div className="img-inner">
        <img src={props.image}   alt="" class="container_img"/>
            </div>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
  );
};

export default Weather;
