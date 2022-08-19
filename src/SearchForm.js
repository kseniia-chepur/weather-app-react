import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ status: false });

  function getWeatherForecast(response) {
    setWeatherData({
      status: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      realFeels: Math.round(response.data.main.feels_like),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function searchByCity() {
    let units = "metric";
    const apiKey = "9f2e2f52f885114eaafb1054b63cf92c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getWeatherForecast);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchByCity();
  }

  function saveInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.status)
    return (
      <div>
        <form className="my-5" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
            onChange={saveInput}
          />
          <input type="submit" value="search" />
        </form>
        <Weather data={weatherData} />
      </div>
    );
  else searchByCity();
  return "Loading";
}
