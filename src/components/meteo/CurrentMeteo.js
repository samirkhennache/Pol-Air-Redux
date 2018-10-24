import React from 'react';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Icon from './Icon';
import Description from './Description';


//http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=fr&APPID=0f53c26a9c88a54d8706c8b3c9d2b880
const api_Key = "0f53c26a9c88a54d8706c8b3c9d2b880"
const units = "&units=metric";
const lang = "&lang=fr";


class CurrentMeteo extends React.Component {

  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidityText: undefined,
    humidity: undefined,
    pourcentage: undefined,
    description: undefined,
    icon : undefined,
    degre : null,
    city : this.props.city,
    Loading: true
}

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}${units}${lang}&APPID=${api_Key}`)
    .then(data => data.json())
    .then(data =>

      this.setState ({
    temperature : Math.floor(data.main.temp),
    temp_min : data.main.temp_min,
    temp_max : data.main.temp_max,
    humidityText: "Humidité",
    humidity: data.main.humidity,
    pourcentage : "%",
    description: data.weather[0].description,
    icon : data.weather[0].icon,
    degre : "°C",
  }))
  }


  render() {
    return (
      <div>
        <Temperature
        temperature={this.state.temperature}
        degre={this.state.degre}
        />
        <Description 
        description={this.state.description}
        />
        <Humidity 
        humidityText={this.state.humidityText}
        humidity={this.state.humidity}
        pourcentage={this.state.pourcentage}
        />
        <Icon 
        icon={this.state.icon}
        />


      </div>

    )
  }
}

export default CurrentMeteo;
