import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchForm() {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  function getWeatherForecast(response) {
    setWeatherData(
      <ul>
        <li>
          <h1>{response.data.name}</h1>
        </li>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].main}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].main}
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let units = "metric";
      let apiKey = "9f2e2f52f885114eaafb1054b63cf92c";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(getWeatherForecast);
    } else {
      alert("Please enter a city name");
    }
  }

  function saveInput(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
          onChange={saveInput}
        />
        <input type="submit" value="search" />
      </form>
      <Weather weather={weatherData} />
    </div>
  );
}
