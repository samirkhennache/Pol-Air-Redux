import React from "react";

class Humidity extends React.Component{

  render() {
    return (
      <div>
      Taux d'humidité (%): {this.props.humidity}
      </div>
    )
  }
}

export default Humidity;