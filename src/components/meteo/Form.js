import React from "react";
import PagePollution from "../Pollution/PagePollution";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BlockForcastMeteo from './forcast/BlockForcastMeteo'
import './form.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import Home from './Home'
import Page404 from '../Page404'
import Footer from "../Footer";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        height: 55,
        marginTop: 16,
    },
    input: {
    display: 'none',
    },
  });



// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=fr&APPID=0f53c26a9c88a54d8706c8b3c9d2b880

const api_Key_Current_Pol = "Wu8scKsgzFQ8Md6Jv";
// AgM8MuxtXNcfwPrHN -- clef guillaume
// ehvBN549ec3xDmbbW -- clef prudence
// fJ75xRvQChZAzF7qo -- clef Delph
// Wu8scKsgzFQ8Md6Jv -- Clef Samir
// 5tzeyxRv5omhmxG6P -- Clef paolo1
// K7ozT4wzfP89xvNDj -- Clef paolo2
// FSirY4x7sshw6meaw -- Clef paolo3


//Api Forecast

const key = "588b34ef0ccd1ce25e0cd600e9e852fb"
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
        icon_forecast : undefined,
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
        if(api_call.ok){
            const api_call_pol = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key=${api_Key_Current_Pol}`);
            const data_pol = await api_call_pol.json();
            if(api_call_pol.ok) {
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
}
else {
    this.setState({error : "Ville non reconnue"});
    alert("Veuillez verifier votre saisie !");
    e.preventDefault();
}
    }

    //Fetch city and country from JSON
    getAllCity = async () => {
        const data = await axios.get('')
        console.log(data.data)
    }

    //Fetch ForecastMeteo
    getForecastMeteo = (city) => {
      axios.get(`${url}${city}&lang=${lang}&APPID=${key}&units=${unit}`)
            .then(res => {
              let temp_min = []
              let temp_max = []
              let iconForecast = []
              for (let i = 1; i <= 4; i++) {
                let temperature_min = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                temp_min.push(Math.floor(Math.min(...temperature_min.map(x=> x.main.temp_min))))
      
                let temperature_max = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                temp_max.push(Math.floor(Math.max(...temperature_max.map(x=> x.main.temp_max))))

                let icone_forecast = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                iconForecast.push(Math.max(...icone_forecast.map(x=> x.weather[0].icon).slice(3,6).map(x => parseInt(x.slice(0,2), 10))))

              }
                iconForecast = iconForecast.map(x => x < 10 ? ("0" + x + "d") : (x + "d"))             
              
              this.setState({
                tempMin : temp_min,
                tempMax: temp_max,
                icon_forecast : iconForecast
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
    BlockForcastMeteo = props => <Link to="/BlockForcastMeteo" {...props} /> 
    pollution = props => <Link to="/HistoriquePollution" {...props} /> 

  // RENDER ////////////////////////////////////////////////////////////
  render() {
    const { classes } = this.props;
    return (
    <BrowserRouter>
            <div>
           <NavBar accueil={this.Accueil} forecastmeteo={this.BlockForcastMeteo}  historiquePollution ={this.pollution}/>
           <form className={classes.container} className="form-center" noValidate autoComplete="off" onSubmit ={this.getData}>
                <TextField
                    id="outlined-search"
                    label="Votre ville"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                />
                 <Button variant="contained" color="primary" type="submit" className="btn-valid" className={classes.button}>
                    Rechercher
                </Button>
            </form>

            <Switch>
                <Route exact path="/" render={(props)=><Home {...this.state}/>}/>
                <Route path="/BlockForcastMeteo" render={props => < BlockForcastMeteo {...this.state}/>} />            
                <Route path="/HistoriquePollution" render ={props => < PagePollution city={this.state.city} indice={this.state.dataPol} imgBackground={this.state.imgBackground} loading={this.state.loading}{...props} />} />
                <Route exact path="/*" component={Page404}/>
            </Switch>
            <Footer />
            </div>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(Form);
