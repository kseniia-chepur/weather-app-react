import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return <div className="Weather">{props.weather}</div>;
}
