import React, { Component } from 'react';
import Axios from 'axios';

const url = "http://api.openweathermap.org/data/2.5/forecast?q=paris,fr&lang=fr&APPID=012c3731b7b5a25ce2858d5bdf0c1134&units=metric"

class ForecastMeteo extends Component{

GetData(){
    Axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
}

componentDidMount(){
    this.GetData();
}

    render(){
        return(
            <div>
            </div>
        )
    }
}

export default ForecastMeteo;