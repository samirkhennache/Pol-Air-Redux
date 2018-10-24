import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';

class ForecastMeteo extends Component {

  render() {

    return (
      <div>
        <BlockForcastMeteo imgBackground={this.props.imgBackground} description={this.props.description} temperature={this.props.temperature} icon_forecast={this.props.icon_forecast} tempMin={this.props.tempMin} tempMax={this.props.tempMax} city={this.props.city}/>
      </div>
     );
  }
}
 
export default ForecastMeteo;
