import React from "react";
import PagePollution from "../Pollution/PagePollution";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ForecastMeteo from './forcast/ForecastMeteo'
import './form.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import Home from './Home'




// Clés API
const api_Key_Current_Weather = "0f53c26a9c88a54d8706c8b3c9d2b880";
//http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=fr&APPID=0f53c26a9c88a54d8706c8b3c9d2b880
const api_Key_Current_Pol = "AgM8MuxtXNcfwPrHN";
// AgM8MuxtXNcfwPrHN -- clef guillaume
// ehvBN549ec3xDmbbW -- clef prudence


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
        humidityText: undefined,
        humidity: undefined,
        pourcentage: undefined,
        description: undefined,
        icon : undefined,
        degre : null,
        dataPol:undefined,
        error: undefined,
        loaded :false,
        tempMax: [],
        tempMin : [],
        loading: true, // permet de mettre en attente le chargement du background 
        imgBackground: undefined
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
            humidityText : "Humidité",
            humidity:response.main.humidity,
            pourcentage: "%",
            description: response.weather[0].description,
            icon : response.weather[0].icon, //sert à afficher l'icone et le background.
            imgBackground: response.weather[0].icon, //sert à afficher le background.
            degre : "C°",
            loading: false,
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
        e.preventDefault();// eviter que la page se recharge  a chaque recherche.
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
            humidityText : "Humidité",
            humidity: data.main.humidity,
            pourcentage : "%",
            description: data.weather[0].description,
            icon : data.weather[0].icon,
            degre : "C°",
            dataPol : data_pol.data.current.pollution.aqius,
            imgBackground: data.weather[0].icon,
            loading : false,
            error: ""
        })
        this.getForecastMeteo(city)
    }

    //Fetch ForecastMeteo
    getForecastMeteo = (city) => {
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
    
    componentDidMount(){
        //lance la methode getloc
        this.getLoc() 
    }

    ///link en variable
    Accueil = props => <Link to="/" {...props} />
    Forecastmeteo = props => <Link to="/ForecastMeteo" {...props} /> 
    pollution = props => <Link to="/HistoriquePollution" {...props} /> 

  // RENDER ////////////////////////////////////////////////////////////
  render() {
    return (
    <BrowserRouter>
            <div>
           <NavBar accueil={this.Accueil} forecastmeteo={this.Forecastmeteo}  historiquePollution ={this.pollution}/>
            <form className="form-center" onSubmit ={this.getData} >
                <input type ="text" name="city" placeholder="Votre ville" onChange={this.handleChange}/>
                <button className="btn-valid">Valider</button>
            </form>
            <Switch>
                <Route exact path="/" render={(props)=><Home {...this.state}/>}/>
                <Route path="/ForecastMeteo" render={props => < ForecastMeteo tempMin={this.state.tempMin} tempMax={this.state.tempMax} city={this.state.city} {...props}/>} />            
                <Route path="/HistoriquePollution" render ={props => < PagePollution city={this.state.city} indice={this.state.dataPol} imgBackground={this.state.imgBackground} loading={this.state.loading}{...props} />} />
            </Switch>
            </div>
      </BrowserRouter>
    )
  }
}

export default Form;