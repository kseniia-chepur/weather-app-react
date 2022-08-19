import React from "react";
import "./Weather.css";
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature";

export default function Weather(props) {
  return (
    <div className="Weather">
      <ul className="text-center">
        <li>
          <h1 className="city">{props.data.city}</h1>
        </li>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <Temperature
          celsius={props.data.temperature}
          realFeels={props.data.realFeels}
        />
        <li>
          <span className="weather-description">{props.data.description}</span>
        </li>
        <li>
          <i className="fa-solid fa-droplet"></i> Humidity
          <span> {props.data.humidity}</span>%
        </li>
        <li>
          <i className="fa-solid fa-wind"></i> Wind
          <span> {props.data.wind} km/h</span>
        </li>
      </ul>
      <img
        className="img-fluid weather-icon"
        src={props.data.icon}
        alt={props.data.description}
      />
    </div>
  );
}
