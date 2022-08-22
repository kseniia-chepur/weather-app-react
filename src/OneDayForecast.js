import React from "react";
import "./OneDayForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function OneDayForecast(props) {
  function getForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];    
    return day;
  }

  function getMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }

    function getMinTemp() {
      let minTemp = Math.round(props.data.temp.min);
      return minTemp;
    }


  
  return (
    <div className="col daily-values">
      <div>{getForecastDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} width={50}/>
      <span className="max-temp">{getMaxTemp()}</span>
      <span className="min-temp">{getMinTemp()}</span>
    </div>
  );
}
