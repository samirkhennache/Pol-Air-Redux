import React from "react";
import {connect} from 'react-redux';
import {getFetchMeteo} from './actions/meteoActions';
import {getPollution} from './actions/pollutionActions';
import {getForecastMeteo} from './actions/forcastMeteoAction';
import PagePollution from "./components/Pollution/PagePollution";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BlockForcastMeteo from './components/meteo/forcast/BlockForcastMeteo'
import './form.css';
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/meteo/Home'

import Footer from "./components/Footer";
import Page404 from './components/Page404';
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
      backgroundColor: 'white',
      opacity: 0.5,
      borderRadius: 5,
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

//const normalizecity = [city, city_district, locality, town, borough, municipality, village, hamlet, quarter, neighbourhood]

// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//588b34ef0ccd1ce25e0cd600e9e852fb -- clef de Delph
//0f53c26a9c88a54d8706c8b3c9d2b880 -- clef de quelqu'un

const api_Key_Current_Pol = "Wu8scKsgzFQ8Md6Jv";
// AgM8MuxtXNcfwPrHN -- clef guillaume
// ehvBN549ec3xDmbbW -- clef prudence
// fJ75xRvQChZAzF7qo -- clef Delph
// Wu8scKsgzFQ8Md6Jv -- Clef Samir
// 5tzeyxRv5omhmxG6P -- Clef paolo1
// K7ozT4wzfP89xvNDj -- Clef paolo2
// FSirY4x7sshw6meaw -- Clef paolo3




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
        error: false,
        loaded :false,
        tempMax: [],
        tempMin : [],
        icon_forecast : undefined,
        loading: true, // permet de mettre en attente le chargement du background
        imgBackground: undefined
    }

    //Fetch Geoloc via IP
    getLoc = () => {
        navigator.geolocation.getCurrentPosition(  (position) => {
            const latitude =  position.coords.latitude;
            const longitude =  position.coords.longitude;
            //mettre a jour les states apres la recuperation des lat et long
            console.log(latitude);
            this.props.getPollution(latitude,longitude)
              fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
		.then(getFetchGeoLoc => getFetchGeoLoc.json())
		.then(data =>{
            this.props.getFetchMeteo(data)
            this.props.getForecastMeteo(data)
        })
        })
    }
    // Fetch SearchBar
    getData = async (e) => {
        let city = this.state.value;
        const units = "&units=metric";
        const lang = "&lang=fr";
        e.preventDefault();// eviter que la page se recharge  a chaque recherche.
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
        const data = await api_call.json();
        if(api_call.ok){
            const api_call_pol = await fetch(`https://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key=${api_Key_Current_Pol}`);
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
                    error: "",

                })
                this.getForecastMeteo(city)
            }

        }
        else {
        this.setState({ error : true });
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    componentDidMount(){
        //lance la methode getloc
        this.getLoc()
       // this.props.fetchGeolocation()
    }

    ///link en variable
    Accueil = props => <Link to="/" {...props} />
    BlockForcastMeteo = props => <Link to="/BlockForcastMeteo" {...props} />
    pollution = props => <Link to="/HistoriquePollution" {...props} />

  // RENDER ////////////////////////////////////////////////////////////
  render() {
    console.log("stores form == ",this.props);


    const { classes } = this.props;
    return (
    <BrowserRouter>
        <div>
            <NavBar accueil={this.Accueil} forecastmeteo={this.BlockForcastMeteo}  historiquePollution ={this.pollution}/>
            <Switch>
                <Route  exact path="/" render={(props)=>
                    <div>
                        <form className="{classes.container} form-center" noValidate autoComplete="off" onSubmit ={this.getData}>
                            {!this.state.error &&
                            <TextField
                                label="Votre ville"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}

                            />
                            }
                            {this.state.error &&
                            <TextField
                            error
                            label="Vérifiez votre saisie !"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}

                            />
                            }
                            <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                Rechercher
                            </Button>
                        </form>
                   <Home />
                    </div>
                }/>
                <Route exact path="/BlockForcastMeteo" render={props =>
                    <div>
                        <form className="{classes.container} form-center" noValidate autoComplete="off" onSubmit ={this.getData}>
                        {!this.state.error &&
                            <TextField
                                label="Votre ville"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}

                            />
                            }
                            {this.state.error &&
                            <TextField
                            error
                            label="Vérifiez votre saisie !"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}

                            />
                            }
                            <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                Rechercher
                            </Button>
                        </form>
                        < BlockForcastMeteo/>
                    </div>
                } />
                <Route exact path="/HistoriquePollution" render ={props =>
                    <div>
                        <form className="{classes.container} form-center" noValidate autoComplete="off" onSubmit ={this.getData}>
                        {!this.state.error &&
                            <TextField
                                label="Votre ville"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}

                            />
                            }
                            {this.state.error &&
                            <TextField
                            error
                            label="Vérifiez votre saisie !"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}

                            />
                            }
                            <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                Rechercher
                            </Button>
                        </form>
                        < PagePollution />
                    </div>
                }/>
                <Route  component={Page404}/>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = state =>({
    dataForcastMeteo :state.forcastMeteoReducer,
    dataMeteo :state.meteoReducer,
    dataPol :state.pollutionReducer

})
export default connect(mapStateToProps,{getFetchMeteo,getPollution,getForecastMeteo})(withStyles(styles)(Form));
