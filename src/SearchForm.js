import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loading-icons";
import "./SearchForm.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loadingStatus: false });

  function getWeatherForecast(response) {
    setWeatherData({
      loadingStatus: true,
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

  function getGeolocationCoords(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const key = "9f2e2f52f885114eaafb1054b63cf92c";
      let units = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=${units}`;
      axios.get(url).then(getWeatherForecast);
    });
  }
 
  if (weatherData.loadingStatus)
    return (
      <div className="SearchForm">
        <form className="form-group mt-3 p-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-7">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={saveInput}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                className="btn search-btn w-100 shadow-sm"
                value="Search"
              />
            </div>
            <div className="col-sm-2">
              <button
                className="btn location-btn"
                onClick={getGeolocationCoords}
              >
                <i className="fa-solid fa-location-dot fa-2xl"></i>
              </button>
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
        <Forecast lon={weatherData.lon} lat={weatherData.lat} />
      </div>
    );
  else searchByCity();
  return (
    <div className="py-5">
      <ThreeDots fill="var(--accent-color)" fillOpacity={0.125} speed={0.5} />
      <p className="mt-3">Loading...</p>
    </div>
  );
}
