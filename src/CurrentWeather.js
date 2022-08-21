import React from "react";
import "./CurrentWeather.css";
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import HorizonEvents from "./HorizonEvents";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-4">
          <h1 className="city">{props.data.city}</h1>
          <CurrentDate date={props.data.date} />
        </div>
        <div className="col-4">
          <Temperature
            celsius={props.data.temperature}
            realFeels={props.data.realFeels}
          />
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <i class="fa-solid fa-droplet"></i>
              <span className="humidity">  {props.data.humidity}%</span>
            </li>
            <li>
              <i class="fa-solid fa-wind"></i>
              <span className="wind"> {props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <HorizonEvents
            sunrise={props.data.sunrise}
            sunset={props.data.sunset}
          />
        </div>
      </div>

      <WeatherIcon code={props.data.icon} alt={props.data.description} />
    </div>
  );
}
