import React from "react";
import './Icon.css';

class Icon extends React.Component{

  render() {
    let icon = `http://openweathermap.org/img/w/${this.props.icon}.png`
    
    return(
      <div>
        <img className="icon-meteo" src={icon} alt=""></img>
      </div>
    )
  }
}

export default Icon;
