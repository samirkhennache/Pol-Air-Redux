import React, { Component } from 'react';
import './App.css';


import Header from './components/Header';
import './components/Form.css';
import Titles from './components/Titles';
import Form from './components/Form';
import City from './components/City';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import Description from './components/Description';
import Icon from './components/Icon';
import TempMinMax from './components/TempMinMax';
import Footer from './components/Footer';
import DateIndex from './components/DateIndex'


const api_Key_Current= "0f53c26a9c88a54d8706c8b3c9d2b880";

class App extends Component {

state = {
  temperature: undefined,
  temp_min: undefined,
  temp_max: undefined,
  city: undefined,
  humidity: undefined,
  description: undefined,
  icon : undefined,
  error: undefined
}

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const units = "&units=metric";
    const lang = "&lang=fr";
    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature : Math.floor(data.main.temp),
      temp_min : data.main.temp_min,
      temp_max : data.main.temp_max,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon : data.weather[0].icon,
      error: ""
    })
  }

  render() {

    return (
      <div className="page-parent" >
        <div className="page-child-top">
          <Header/>
        </div>
        <div className="page-child">
          <DateIndex />
        </div>
        <div className="page-child">
          <Titles/>
        </div>
        <div className="page-child" >
          <Form getWeather = {this.getWeather}/>
          <City
            city={this.state.city}
          />
          <Temperature
            temperature={this.state.temperature}
          />
          <Humidity
            humidity={this.state.humidity}
          />
          <Description
            description={this.state.description}
          />
          <Icon
            icon={this.state.icon}
          />
          <TempMinMax 
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          />
        </div>
        <div className="page-child-bottom">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
