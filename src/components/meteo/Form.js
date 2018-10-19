import React from "react";
// imports pollution
// import PollutionRealTime from '../Pollution/PollutionRealTime'
// imports météo
import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
import PagePollution from "../Pollution/PagePollution";
import IndiceDuJours from '../Pollution/IndiceDuJours'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ForecastMeteo from './forcast/ForecastMeteo'
import Titles from '../Titles';
import Footer from '../Footer';
import DateIndex from '../date/DateIndex'
import './form.css';
import axios from 'axios'

import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
// import Home from "../Home";
// imports mascottes
import Mascotte from './Mascotte'



// Clés API
const api_Key_Current_Weather = "0f53c26a9c88a54d8706c8b3c9d2b880";
const api_Key_Current_Pol = "ehvBN549ec3xDmbbW";


//Api Forecast

const key = "012c3731b7b5a25ce2858d5bdf0c1134"
const unit = 'metric'
const lang = 'fr'
const url = 'http://api.openweathermap.org/data/2.5/forecast?q='

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
        error: undefined,
        loaded :false,
        tempMax: [],
        tempMin : [],
    }
    // Fetch Geoloc via IP
    getLoc = async (e) => {
        navigator.geolocation.getCurrentPosition(  (position) => {
            const latitude =  position.coords.latitude;
            const longitude =  position.coords.longitude;
            //mettre a jour les states apres la recuperation des lat et long
            this.setState({loaded :true});
            ///si loaded = true lance le fetch pour recuperer le nom de la ville 
            ///pour eviter de lancer le fetch  meteo avant la fin du fetch recuparation ville 
            ///j'ai créer la fonction GetMetoePollution que j'ai appellé apres la recuperation des infos ville
            if(this.state.loaded){
                fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
                .then(res => res.json())
                .then(response => this.GetMeteoPollution(response.address.city,latitude,longitude) )
                
            }
        })
        
    }        
    //methode GetMeteoPollution qui lance le fetch de meteo et la pollution
    GetMeteoPollution(city,latitude,longitude){ 
    const units = "&units=metric";
    const lang = "&lang=fr";
    
    //fetch meteo
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
        }))
       //fetch pollution
        fetch(`http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${api_Key_Current_Pol}`)
        .then(res => res.json())
        .then(response => this.setState({ dataPol : response.data.current.pollution.aqius }))
        this.getForecastMeteo(city)
    } 


    
    // Fetch SearchBar
    getData = async (e) => {
        let city = this.state.value;
        const units = "&units=metric";
        const lang = "&lang=fr";
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
        const data = await api_call.json();
        const api_call_pol = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key=${api_Key_Current_Pol}`);
        const data_pol = await api_call_pol.json();
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
        this.getForecastMeteo(city)
    }

    //Fetch ForecastMeteo
    getForecastMeteo = (city) => {
        console.log("into function", city)
      axios.get(`${url}${city},fr&lang=${lang}&APPID=${key}&units=${unit}`)
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
                tempMax: temp_max,
            })
            
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
        

    //Fin Fetch ForecastMeteo

    handleChange = (event) => {
        this.setState({value: event.target.value})
        
    }
    
    home =() => (
    <div className="page-parent" >

        <div className="page-child">
          <DateIndex />
        </div>
        <div className="page-child">
            <Titles/>
        </div>        
       
        <div className="page-child">
        { this.state.dataPol && <Mascotte temperature={this.state.temperature} dataPol={this.state.dataPol} description={this.state.description}/> }
            <PrintSearch
            city={this.state.city}
            temperature={this.state.temperature} 
            degre={this.state.degre}
            description={this.state.description}
            humidity={this.state.humidity}/>
            <Icon icon={this.state.icon}/>
        </div>
        <div className="page-child">
        <IndiceDuJours indice={this.state.dataPol} />
        </div>
        <div className="page-child-bottom">
        <Footer />
        </div>   
    </div>
        
    )
    componentDidMount(){
        this.getLoc() 
    }

  // RENDER ////////////////////////////////////////////////////////////
  render() {
    console.log( "render");
    console.log('city into render',this.state.city)
    const pagePollution = props => < PagePollution indice={this.state.dataPol} />
    const pageForecastmeteo = props => < ForecastMeteo tempMin={this.state.tempMin} tempMax={this.state.tempMax} city={this.state.city}/>
    const Accueil = props => <Link to="/" {...props} />
    const Forecastmeteo = props => <Link to="/ForecastMeteo" {...props} /> 
    const pollution = props => <Link to="/HistoriquePollution" {...props} /> 


    return (
    <BrowserRouter>
            <div>
           <NavBar accueil={Accueil} forecastmeteo={Forecastmeteo}  historiquePollution ={pollution}/>
            <form className="page-child" onSubmit ={this.getData} >
                <input type ="text" name="city" placeholder="Votre ville" onChange={this.handleChange}/>
                <button className="btn-valid">Valider</button>
            </form>
            

            <Switch>
                <Route exact path="/" component={()=>this.home()}/>
                <Route path="/ForecastMeteo" component={pageForecastmeteo} />            
                <Route path="/HistoriquePollution" component ={pagePollution} />
            </Switch>
            </div>
      </BrowserRouter>
    
    )
  }
}

export default Form;