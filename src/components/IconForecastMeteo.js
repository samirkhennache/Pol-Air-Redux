import React, { Component } from 'react';

class IconForecastMeteo extends Component {
    
      render() {
        let icon = `http://openweathermap.org/img/w/${this.props.icon}.png`
        
        return(
          <div>
            <img className="icon-meteo" src={icon} alt=""></img>
          </div>
        )
      }
    }
    
 
export default IconForecastMeteo;