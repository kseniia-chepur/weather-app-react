import React from "react";
import "./CurrentWeather.css";
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row my-5 weather-data">
        <div className="col-sm-4">
          <h1>{props.data.city}</h1>
          <CurrentDate date={props.data.date} />
        </div>
        <div className="col-sm-3">
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col-sm-2 mt-2">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i>
              <span className="humidity"> {props.data.humidity}%</span>
            </li>
            <li>
              <i class="fa-solid fa-wind"></i>
              <span className="wind"> {props.data.wind} km/h</span>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels like {props.data.feelsLike}°</li>
          </ul>
        </div>
        <div className="col-sm-3 weather-icon">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            width={130}
          />
        </div>
      </div>
    </div>
  );
}
