import './App.css';
import React, { useEffect, useState} from "react";
import Form from './comp/forms';
import './styles/index.css'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Weather from './comp/main';
import { api } from './api';


export default function App () {

  const [state, setState] = useState({
      url:'https://img.freepik.com/free-vector/winter-blue-and-pink-gradient-background-vector_53876-117276.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1711929600&semt=ais',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jGIDAIDZPGHKtrUWlpBe7Pt6Jgm1BFIT8ChJdsH3ew&s',
      temp: 20,
      city: 'Your City',
      country: 'your country',
      weather: 'Future Weather',
      error: "",
      id: null
  })

  useEffect(()=> {
    getWeather()
  }, [])

  async function getWeather({city, categoryTemp} = {city : 'Moscow', categoryTemp : 'temp'}){

    const [img, weather] = await Promise.all([api.getImg(city), api.getWeather(city)])
    setState((prev) => ({...prev,
      url : img.results[0].urls.full, 
      temp: weather.main[categoryTemp], 
      id: weather.id, 
      city: weather.name, 
      country: weather.sys.country,
      weather: weather.weather[0].description, 
      icon: "http://openweathermap.org/img/wn/"+weather.weather[0].icon+'.png'}))
    console.log( img, weather,state.icon,state.temp);
  }



  return <div>
    <Form getWeather={getWeather}/>
    <Weather
    image={state.url} 
    icon={state.icon} 
    temp={state.temp} 
    city={state.city} 
    country={state.country}
    weather={state.weather}
    id={state.id}
    t={state.t}
    />
</div>

}



    

