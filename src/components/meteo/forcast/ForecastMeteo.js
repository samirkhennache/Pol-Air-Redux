import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';

class ForecastMeteo extends Component {

  render() {

    return (
      <div>
        <BlockForcastMeteo tempMin={this.props.tempMin} tempMax={this.props.tempMax} city={this.props.city}/>
      </div>
     );
  }
}
 
export default ForecastMeteo;
