import React from "react";
import "./HorizonEvents.css";
import sunrise from "@bybas/weather-icons/design/fill/animation-ready/sunrise.svg";
import sunset from "@bybas/weather-icons/design/fill/animation-ready/sunset.svg";

export default function HorizonEvents(props) {
  let hoursSunrise = props.sunrise.getHours();
  let minutesSunrise = props.sunrise.getMinutes();

  let hoursSunset = props.sunset.getHours();
  let minutesSunset = props.sunset.getMinutes();

  hoursSunrise = hoursSunrise < 10 ? `0${hoursSunrise}` : hoursSunrise;
  minutesSunrise = minutesSunrise < 10 ? `0${minutesSunrise}` : minutesSunrise;

  hoursSunset = hoursSunset < 10 ? `0${hoursSunset}` : hoursSunset;
  minutesSunset = minutesSunset < 10 ? `0${minutesSunset}`: minutesSunset;

  return (
    <ul className="mt-5 pt-5">
      <li>
        <img className="values-icon" src={sunrise} alt="sunrize icon" />
        <span>
          {hoursSunrise}:{minutesSunrise}
        </span>
      </li>
      <li>
        <img className="values-icon" src={sunset} alt="sunset icon" />
        <span>
          {hoursSunset}:{minutesSunset}
        </span>
      </li>
    </ul>
  );
}
