import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';

class ForecastMeteo extends Component {
  render() { 
    return ( 
      <div>
        <BlockForcastMeteo dateApp={1} />
        <BlockForcastMeteo dateApp={2} />
        <BlockForcastMeteo dateApp={3} />
        <BlockForcastMeteo dateApp={4} />
        <BlockForcastMeteo dateApp={5} />
      </div>
     );
  }
}
 
export default ForecastMeteo;
