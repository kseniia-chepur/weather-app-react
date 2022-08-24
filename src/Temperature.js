import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div>
        <span className="current-value">{Math.round(props.celsius)}</span>
        <span className="units">°C </span>
      </div>
    </div>
  );
}
