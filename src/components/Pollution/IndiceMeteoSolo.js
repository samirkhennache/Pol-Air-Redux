import React from 'react';
import './indice-pollution-solo.css'

const  IndicePollutionSolo =({temperature}) =>(
  <div className="indice-pollution-main color-meteoJour">
    <div className={`indice-meteo-solo`}>
      {temperature}<sup className="degre-index">°C</sup>
    </div>
  </div>
);

export default IndicePollutionSolo;