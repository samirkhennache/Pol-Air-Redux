import React from "react";

class Temperature extends React.Component{

  render() {
    return (
      <div>
    Temperature (°C): {this.props.temperature}
      </div>
    )
  }
}

export default Temperature;