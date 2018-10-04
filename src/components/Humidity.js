import React from "react";

class Humidity extends React.Component{

  render() {
    return (
      <div>
      {this.props.humidity}
      </div>
    )
  }
}

export default Humidity;