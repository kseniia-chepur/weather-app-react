import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [forecast, setForecast] = useState(null);

  function searchByCoords() {
    let units = "metric";
    const apiKey = "9f2e2f52f885114eaafb1054b63cf92c";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getDailyForecast);
  }

  function getDailyForecast(response) {
    setForecast(response.data.daily);
    setLoadingStatus(true);
  }

  if (loadingStatus) {
    return (
      <div className="Forecast">
        <div className="row pb-3">
          
            {forecast.map(function (dailyForecast, index) {
              if (index > 0 & index < 7) {
                return (
                  <div className="col">
                    <DailyForecast data={dailyForecast} key={index} />
                  </div>
                );
              } else {
                return null;
              }
            })}

            {/* <div className="col daily-values">
           
          </div> */}
        
        </div>
      </div>
    );
  } else {
    searchByCoords();
    return null;
  }
}
