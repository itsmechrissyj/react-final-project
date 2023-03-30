import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FutureForecast.css";
import axios from "axios";


export default function FutureForecast(props) {
function handleResponse (response){
    console.log(response.data);
}
let longtitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
    let apiKey = "96771e971243152d6b8948878c26adde";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    
axios.get(apiUrl).then (handleResponse);
return (
    <div className="FutureForecast">
        <div className="row">
            <div className="col">
                <div className="<FutureForecast-day">
Thursday</div>
<WeatherIcon code="01d" size={30} />
<div className="FutureForecast-temperatures">
 <span className="FutureForecast-temperature-max">19°</span>
 <span className="FutureForecast-temperature-min">10°</span>
 </div>


            </div>

        </div>


    </div>)
}