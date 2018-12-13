import React from 'react';
import './indice-pollution-solo.css'

const IconMeteo =({icon}) =>(
  <div className="smiley-main">
    <div className="smiley-solo">
    <img className="MeteoSolo-index" src={`/img/${icon}.png`} alt="b"/>
    </div>
  </div>
)

export default IconMeteo;