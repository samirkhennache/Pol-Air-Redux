import React from "react";
import './Temperature.css';

class Temperature extends React.Component{

  render() {
    return (
      <div className="temperature">
      <p>{this.props.temperature} {this.props.degre}</p>
      </div>
    )
  }
}

export default Temperature;