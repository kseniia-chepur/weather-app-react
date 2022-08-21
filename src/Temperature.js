import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  function convertToFahrenheitRealFeels() {
    return Math.round((props.realFeels * 9) / 5 + 32);
  }

  if (unit === "celsius")
    return (
      <div className="Temperature">
        <div className="mt-2">
          <span className="current-value">{props.celsius}</span>
          <span className="units">
            °C |
            <a href="/" onClick={displayFahrenheit}>
              {" "}
              F
            </a>
          </span>
        </div>
        <div className="mt-4">
          Feels like <strong>{props.realFeels}°</strong>
        </div>
      </div>
    );
  else
    return (
      <div className="Temperature">
        <div className="mt-2">
          <span className="current-value">{convertToFahrenheit()}</span>
          <span className="units">
            °
            <a href="/" onClick={displayCelsius}>
              C
            </a>{" "}
            | F
          </span>
        </div>
        <div className="mt-4">
          Feels like <strong>{convertToFahrenheitRealFeels()}°</strong>
        </div>
      </div>
    );
}
