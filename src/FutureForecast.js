import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FutureForecast.css";


export default function FutureForecast() {

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