import React from "react";

class TempMinMax extends React.Component{

  render() {
    return (
      <div>
      <p>Minimales: {this.props.temp_min}</p>
      <p>Maximales: {this.props.temp_max}</p>
      </div>
    )
  }
}

export default TempMinMax;