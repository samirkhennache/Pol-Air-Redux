import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';

class ForecastMeteo extends Component {

  render() {

    console.log(this.props)

    return (
      <div>
        <BlockForcastMeteo tempMin={this.props.tempMin} tempMax={this.props.tempMax} city={this.props.city}/>
      </div>
     );
  }
}
 
export default ForecastMeteo;
