import React from "react";

class Temperature extends React.Component{

  render() {
    return (
      <div>
      {this.props.temperature}
      </div>
    )
  }
}

export default Temperature;