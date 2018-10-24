import React from "react";


const PrintSearch = ({city,temperature,description,humidity,icon,degre}) => {
    return (
      <div>
        <p>{city}</p>
        <p>{temperature}{degre}</p>
        <p>{description}</p>
        <p>Humidité : {humidity} %</p>
        <p>{icon}</p>
      </div>
    )
}

export default PrintSearch;