import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./Forecast";
import Geolocation from "./Geolocation";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ status: false });

  function getWeatherForecast(response) {
    console.log(response.data);
    setWeatherData({
      status: true,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
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
      <div className="SearchForm">
        <form className="form-group mt-3 p-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={saveInput}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn search-btn w-100 shadow-sm"
                value="Search"
              />
            </div>
            <div className="col-2">
              <Geolocation />
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
        <DailyForecast lon={weatherData.lon} lat={weatherData.lat} />
      </div>
    );
  else searchByCity();
  return "Loading...";
}
