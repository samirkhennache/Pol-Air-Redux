import React, { Component } from 'react';
import Axios from 'axios'

const url = "http://api.openweathermap.org/data/2.5/forecast?q=paris,fr&lang=fr&APPID=012c3731b7b5a25ce2858d5bdf0c1134&units=metric"


class BlockForecastMeteoTemp extends Component {
    state = { 
        tempMax: [],
        tempMin : [],
    }

    componentDidMount() {
        Axios.get(url)
        .then(response => {
            const temp_min = response.data.list.filter((x) => x.dt >= this.getDate()  &&  x.dt <= this.getDateAddOne())
            const temp_max = response.data.list.filter((x) => x.dt >= this.getDate()  &&  x.dt <= this.getDateAddOne())
            this.setState({
                tempMin : Math.floor(Math.min(...temp_min.map(x=> x.main.temp_min))) ,
                tempMax: Math.floor(Math.max(...temp_max.map(x=> x.main.temp_max)))   
            })
        })
        //.then(resp => console.log("tempMin" ,this.state.tempMin))
        //console.log(this.getAllTemp())
    }


    

    

    getDateAddOne() {
        const n = this.getDate() + 86400
        return n
    }

    getDate() {
        let d = new Date();
        let n = d.getTime() % 86400000
        let test = d.setTime(((d.getTime()-n)/1000)+86400*this.props.dateForTemp)
        return test
    }


    render() {
        return ( 
            <div>
                <h1>Min {this.state.tempMin}°C</h1>
                <h1>Max {this.state.tempMax}°C</h1>
            </div>
         );
    }
}
 
export default BlockForecastMeteoTemp;