import React from "react";
// imports pollution
import PollutionRealTime from '../Pollution/PollutionRealTime'
// imports météo
import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
// imports mascottes
import Mascotte from './Mascotte'



// Clés API
const api_Key_Current_Weather = "0f53c26a9c88a54d8706c8b3c9d2b880";
const api_Key_Current_Pol = "AgM8MuxtXNcfwPrHN";


// CLASS //////////////////////////////////////////////////////////////
class Form extends React.Component{
    
    // state
    state ={
        value: undefined,
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        icon : undefined,
        degre : null,
        dataPol:undefined,
        error: undefined 
    }
    
    componentWillMount() {
        this.getLoc()        
    }
    // Fetch Geoloc via IP
   getLoc = () => {
    
        navigator.geolocation.getCurrentPosition( (position) => {
            const latitude =  position.coords.latitude;
            const longitude =  position.coords.longitude;
            console.log(longitude);
            console.log(latitude);
        
            if(latitude && longitude){
                fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
                .then(res => res.json())
                .then(response => this.setState({ value: response.address.city }))
            }

            if(this.state.value) {
                let city = this.state.value;
                const units = "&units=metric";
                const lang = "&lang=fr";
        
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`)
                .then(res => res.json())
                .then(response => 
                    this.setState({
                        temperature : Math.floor(response.main.temp),
                        city: response.name,
                        humidity: response.main.humidity,
                        description: response.weather[0].description,
                        icon : response.weather[0].icon,
                        degre : "C°",
                        
                        error: ""
                    })    
                )
                fetch(`http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${api_Key_Current_Pol}`)
                .then(res => res.json())
                .then(response => this.setState({ dataPol : response.data.current.pollution.aqius }))
            }
        })
    }
   


    // Fetch SearchBar
    getData = async (e) => {
        let city = this.state.value;
        const units = "&units=metric";
        const lang = "&lang=fr";
        e.preventDefault();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
        const data = await api_call.json();
        console.log(data);
        const api_call_pol = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key=${api_Key_Current_Pol}`);
        const data_pol = await api_call_pol.json();
        console.log(data_pol);

        // setState
        this.setState({
            temperature : Math.floor(data.main.temp),
            temp_min : data.main.temp_min,
            temp_max : data.main.temp_max,
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon : data.weather[0].icon,
            degre : "C°",
            dataPol : data_pol.data.current.pollution.aqius,
            error: ""
        })
    }


    handleChange = (event) => {
        this.setState({value: event.target.value})
    }



  // RENDER ////////////////////////////////////////////////////////////
  render() {
    
    //navigator.geolocation.getCurrentPosition( (position) =>  console.log(position.coords.longitude))
    //navigator.geolocation.getCurrentPosition( (position) =>  console.log(position.coords.latitude))


    return (

    <div>

        <form onSubmit ={this.getData}>
            <input type ="text" name="city" placeholder="Votre ville" value={this.state.value} onChange={this.handleChange}/>
            <button className="btn-valid">Valider</button>
        </form>
       <div>
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
        


        {this.state.dataPol && <PollutionRealTime dataPol={this.state.dataPol} />}

        { this.state.dataPol && this.state.dataPol && <Mascotte temperature={this.state.temperature} dataPol={this.state.dataPol} /> }

    </div>
    )
  }
}

export default Form;