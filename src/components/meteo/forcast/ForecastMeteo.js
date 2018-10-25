import React, { Component } from "react";
import BlockForcastMeteo from './BlockForcastMeteo';
import Footer from '../../Footer';

class ForecastMeteo extends Component {

  render() {

    return (
      <div>
        <BlockForcastMeteo tempMin={this.props.tempMin} tempMax={this.props.tempMax} city={this.props.city}/>
        <Footer />
      </div>
     );
  }
}
 
export default ForecastMeteo;
