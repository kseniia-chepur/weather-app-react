import React from "react";
import "./DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast">
      <div className="row pb-4">
        <div className="col daily-values">
          <div>Mon</div>
          <WeatherIcon code="01d" />
          <span className="max-temp">20°</span>
          <span className="min-temp">12°</span>
        </div>
      </div>
    </div>
  );
}