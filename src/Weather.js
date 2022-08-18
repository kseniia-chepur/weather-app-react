import React from "react";
import "./Weather.css";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row current-weather">
        <div className="col-sm-4">
          <h1 className="city">{props.data.city}</h1>
          <CurrentDate date={props.data.date} />
        </div>
        <div className="col-sm-4 d-flex">
          <img
            className="img-fluid weather-icon"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="clear"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="temperature-units">
            <a href="/" className="active">
              °C
            </a>
            |<a href="/">F</a>
          </span>
        </div>
        <div className="col-sm-4 description">
          <span className="weather-description">{props.data.description}</span>
        </div>
      </div>
      <div className="row current-values">
        <div className="col">
          <p>
            <i className="fa-solid fa-droplet"></i> Humidity
            <span> {props.data.humidity}</span>%
          </p>
          <p>
            <i className="fa-solid fa-wind"></i> Wind
            <span> {props.data.wind} km/h</span>
          </p>
          <i className="fa-solid fa-temperature-half"></i> RealFeels
          <span> {props.data.realFeels}</span>°
        </div>
      </div>
    </div>
  );
}
