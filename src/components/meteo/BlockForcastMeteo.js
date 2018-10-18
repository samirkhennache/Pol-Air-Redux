import React, { Component } from 'react';
import BlockForcastMeteoDate from './BlockForcastMeteoDate';
import BlockForecastMeteoTemp from './BlockForecastMeteoTemp';
import './BlockForcastMeteo.css'
import axios from 'axios'

import Graphic from './Graphic'

const key = "012c3731b7b5a25ce2858d5bdf0c1134"
const unit = 'metric'
const lang = 'fr'
const url = 'http://api.openweathermap.org/data/2.5/forecast?q='

class BlockForcastMeteo extends Component {


  state = {
    city : this.props.city,
    tempMax: [],
    tempMin : [],
  }

  componentDidMount() {
    axios.get(`${url}${this.state.city},fr&lang=${lang}&APPID=${key}&units=${unit}`)
      .then(res => {
        let temp_min = []
        let temp_max = []
        for (let i = 1; i <= 4; i++) {
          let temperature_min = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
          temp_min.push(Math.floor(Math.min(...temperature_min.map(x=> x.main.temp_min))))

          let temperature_max = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
          temp_max.push(Math.floor(Math.max(...temperature_max.map(x=> x.main.temp_max))))
        }
        this.setState({
          tempMin : temp_min,
          tempMax: temp_max
      })
        //console.log(temp_max)
      })
  }


getDateAddOne(day) {
    const n = this.getDate(day) + 86400
    return n
}

getDate(day) {
    let d = new Date();
    let n = d.getTime() % 86400000
    let test = d.setTime(((d.getTime()-n)/1000)+86400*day)
    return test
}


  render() {

    return (
      <div>
        <h1>{this.state.city}</h1>
        <Graphic  tempMin={this.state.tempMin}  tempMax={this.state.tempMax} />
        <div>
          {this.state.tempMin.map((x, index) => (
             <div key={index} className='blockMeteo'>
             <BlockForcastMeteoDate dateApp={index+1} />
             <BlockForecastMeteoTemp temp_min={this.state.tempMin[index]} temp_max={this.state.tempMax[index]} />
           </div>
          ))}
        </div>
      </div>

     );
  }
}
 
export default BlockForcastMeteo;
