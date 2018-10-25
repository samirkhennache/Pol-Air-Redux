import React from 'react'
import './BlockForecastMeteoNow.css'

const BlockForecastMeteoNow = (props) => {
    
    return(
        <div>
            <h1 className='blockMeteoNowCity'>{props.city}</h1>
            <div className='divRound'>
            <h1 className='blockMeteoNowTemperature'>{props.temperature}</h1>
            </div>
            <h1>{props.description}</h1>
        </div>
    )

}
export default BlockForecastMeteoNow