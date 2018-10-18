import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';

class ForecastMeteo extends Component {

  state = {
    city : 'paris'
  }

  render() {
    
    return (
      <div>
        <BlockForcastMeteo city={this.state.city} />
      </div>
     );
  }
}
 
export default ForecastMeteo;
