import React from "react";
import "./DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  console.log(props);
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
    <div className="DailyForecast">
      <h2>{getForecastDay()}</h2>
      <WeatherIcon code={props.data.weather[0].icon} width={50} />
      <p className="description pb-2">
        {props.data.weather[0].main}
      </p>
      <p className="max-temp">{getMaxTemp()}</p>
      <p className="min-temp">{getMinTemp()}</p>
    </div>
  );
}
