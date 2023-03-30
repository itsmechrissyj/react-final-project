import React , {useState} from "react";
import "./FutureForecast.css";
import axios from "axios";
import FutureForecastDay from "./FututeForecastDay";


export default function FutureForecast(props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);

function handleResponse (response){
setForecast(response.data.daily)
setLoaded(true);
}



if (loaded) { 
    return <div className="FutureForecast">
    <div className="row">
        <div className="col">
            <FutureForecastDay data={forecast[0]} />
        </div>
        </div>

    
    </div>  
    
 
} else {
    let apiKey = "96771e971243152d6b8948878c26adde";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
        
    axios.get(apiUrl).then (handleResponse);
    
    return null;
}}