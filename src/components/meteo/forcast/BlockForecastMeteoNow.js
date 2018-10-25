import React from 'react'
import Grid from '@material-ui/core/Grid';

const BlockForecastMeteoNow = (props) => {
    
    return(
        <div>
      <Grid container className='today-bloc'>
        <Grid item xs={6}>
        <div className='divRound'>
            <h1 className='blockMeteoNowTemperature'>{props.temperature}°C</h1>
            </div>
        </Grid>
        <Grid item xs={6} >
        <div className="font-ville" >{props.city}</div>
        <div className="font-aujourdhui" >Aujourd'hui</div>
        <div className="font-messageQuality">{props.description}</div>
        </Grid>
      </Grid>
    </div>
    )

}
export default BlockForecastMeteoNow