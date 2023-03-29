import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {

    const [weatherData , setWeatherData] = useState({ ready: false })
   function handleResponse(response) {

    setWeatherData ({
ready: true,
temperature: response.data.main.temp,
wind: response.data.wind.speed,
city: response.data.name,
feelslike: response.data.main.feels_like,
humidity:  response.data.main.humidity,
description: response.data.weather[0].description,
iconUrl: response.data.weather.icon,
date: "Wednesday 17:00",


    });
  
 
   }

   if (weatherData.ready) {
    return (
    <div className="Weather">
        
            
        <form>
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control" 
            autoFocus="on" /></div>
          <div className="col-3">
            <input type="submit" 
            value="Search" 
            className="btn btn-primary w-100" /></div></div>
        </form>
      
<h1> {weatherData.city} </h1>  
<ul> 
<li> {weatherData.date}</li>
<li className="text-capitalize"> {weatherData.description} </li>
</ul>
<div className="row">
<div className="col-6">
    <img src={weatherData.iconUrl} alt={weatherData.description} />
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
    <span className="temperature-unit">°C</span></div>
    <div className="col-6">
        <ul>
      <li>  Feels like: {Math.round(weatherData.feelslike)} °C</li>
      <li>   Humidity: {weatherData.humidity}%</li>
      <li>  Wind: {Math.round(weatherData.wind)} km/h</li>
        </ul>
    </div>

</div>





    </div>); 




   } else {


    const apiKey = "96771e971243152d6b8948878c26adde"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    
    
return "Loading...."
}

}