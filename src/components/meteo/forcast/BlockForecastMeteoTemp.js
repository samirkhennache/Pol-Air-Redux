import React from 'react';

const BlockForecastMeteoTemp = (props) =>(
  <div className="temp-forecast">
    <div className="temp-forecast-max">{props.temp_max}°C</div>
    <div className="sep-forecast"></div>
    <div className="temp-forecast-min">{props.temp_min}°C</div>
  </div>
)

export default BlockForecastMeteoTemp;