import React , {useState, useEffect} from "react";
import "./FutureForecast.css";
import axios from "axios";
import FutureForecastDay from "./FutureForecastDay";



export default function FutureForecast(props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);

useEffect(() => {
   setLoaded(false)
;}, [props.coordinates]);


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
        <div className="col">
            <FutureForecastDay data={forecast[1]} />
        </div>
        <div className="col">
            <FutureForecastDay data={forecast[2]} />
        </div>
        <div className="col">
            <FutureForecastDay data={forecast[3]} />
        </div>
        <div className="col">
            <FutureForecastDay data={forecast[4]} />
    
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