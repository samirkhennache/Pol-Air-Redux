import React from 'react';
import Form from './Form';
import PrintSearch from '../PrintSearch';
import Icon from './Icon';


const api_Key = "0f53c26a9c88a54d8706c8b3c9d2b880"

class FormSearch extends React.Component {

state = {
  temperature: undefined,
  temp_min: undefined,
  temp_max: undefined,
  city: undefined,
  humidity: undefined,
  description: undefined,
  icon : undefined,
  degre : undefined
}

  weatherSearch = async (e) => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const units = "&units=metric";
    const lang = "&lang=fr";

    const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key}`)
    const data = await call.json();

    this.setState ({
      city : city,
      temperature : Math.floor(data.main.temp),
      temp_min : data.main.temp_min,
      temp_max : data.main.temp_max,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon : data.weather[0].icon,
      degre : "°C",
})
}

  render() {
    return (
      <div>
        <Form weatherSearch={this.weatherSearch}/>
        <PrintSearch
         city={this.state.city}
         temperature={this.state.temperature} 
         degre={this.state.degre}
         description={this.state.description}
         humidity={this.state.humidity}
         />
        <Icon 
        icon={this.state.icon}
        />
      </div>
    );
  }
}

export default FormSearch;
