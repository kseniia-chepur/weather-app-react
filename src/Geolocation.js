import React, { useState } from "react";
import axios from "axios";

export default function Geolocation() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  function requestGeolocationCoords() {
    // event.preventDefault();
    navigator.geolocation.getCurrentPosition(getGeolocationCoords);
  }
  function getGeolocationCoords(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    let key = "9f2e2f52f885114eaafb1054b63cf92c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
   
    axios.get(url).then(display);
  }

  function display(response) {
    console.log(response);
  }

  return (
    <div>
      <input
        type="submit"
        className="btn location-btn w-100 shadow-sm"
        onClick={requestGeolocationCoords()}
        value="location"
      />
    </div>
  );
}
