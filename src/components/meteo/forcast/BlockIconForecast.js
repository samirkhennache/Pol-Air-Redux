import React from 'react'

const BlockIconForecast = (props) =>(
  <div className="icon-forecast">
    <img src={`/img/${props.icon_forecast}.png`} className="MeteoIcon" alt="" />
  </div>
)
export default BlockIconForecast