import React from 'react'
import './BlockForecastMeteoNow.css'

const BlockForecastMeteoNow = (props) => {
    
    return(
        <div>
            <img src={require(`../../../img/backgrounds/bkg${props.imgBackground}.jpg`)} className="meteoBackground"  alt="test"/>
            <h1>{props.imgBackground}</h1>
            <h1>{props.city}</h1>
            <h1>{props.temperature}</h1>
            <h1>{props.description}</h1>
        </div>
    )

}
export default BlockForecastMeteoNow