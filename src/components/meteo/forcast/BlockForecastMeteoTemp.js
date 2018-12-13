import React from 'react';

// class BlockForecastMeteoTemp extends Component {

//     render() {
//         return (
//             <div className="temp-forecast">
//                 <div className="temp-forecast-max">{this.props.temp_max}°C</div>
//                 <div className="sep-forecast"></div>
//                 <div className="temp-forecast-min">{this.props.temp_min}°C</div>
//             </div>
//          );
//     }
// }


const BlockForecastMeteoTemp = (props) =>(
  <div className="temp-forecast">
    <div className="temp-forecast-max">{props.temp_max}°C</div>
    <div className="sep-forecast"></div>
    <div className="temp-forecast-min">{props.temp_min}°C</div>
  </div>
)


export default BlockForecastMeteoTemp;