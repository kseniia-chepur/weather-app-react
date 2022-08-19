import React, { useState } from "react";

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
        <li>
          <span className="temperature">{props.celsius}</span>
          <span className="temperature-units">
            {" "}
            °C |
            <a href="/" onClick={displayFahrenheit}>
              F
            </a>
          </span>
        </li>
        <li>
          <i class="fa-solid fa-temperature-half"></i>RealFeels{" "}
          {props.realFeels}
        </li>
      </div>
    );
  else
    return (
      <div className="Temperature">
        <li>
          <span className="temperature">{convertToFahrenheit()}</span>
          <span className="temperature-units">
            °
            <a href="/" onClick={displayCelsius}>
              C
            </a>
            |F
          </span>
        </li>
        <li>
          <i class="fa-solid fa-temperature-half"></i>RealFeels{" "}
          {convertToFahrenheitRealFeels()}
        </li>
      </div>
    );
}
