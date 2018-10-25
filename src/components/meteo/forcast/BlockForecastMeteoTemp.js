import React, { Component } from 'react';


class BlockForecastMeteoTemp extends Component {

    render() {
        return ( 
            <div>
                <h1>Max {this.props.temp_max}°C</h1>
                <h1>Min {this.props.temp_min}°C</h1>
            </div>
         );
    }
}
 
export default BlockForecastMeteoTemp;