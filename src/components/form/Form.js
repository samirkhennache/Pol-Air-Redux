import React from "react";
import {connect} from 'react-redux';
import {getFetchMeteoCity} from '../../actions/meteoActions';
import {getPollution} from '../../actions/pollutionActions';
import {getForecastMeteoCity} from '../../actions/forcastMeteoAction';

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

// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//588b34ef0ccd1ce25e0cd600e9e852fb -- clef de Delph
//0f53c26a9c88a54d8706c8b3c9d2b880 -- clef de quelqu'un
// CLASS //////////////////////////////////////////////////////////////
class Form extends React.Component{
  state ={
    error: false,
    value:""
  }
    // Fetch SearchBar
  getData = async (e) => {
    const {getPollution,getFetchMeteoCity,getForecastMeteoCity} = this.props
    let city = this.state.value
    const units = "&units=metric";
    const lang = "&lang=fr";
    e.preventDefault();// eviter que la page se recharge  a chaque recherche.
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
    const data = await api_call.json();
    if(api_call.ok){
        getPollution(data.coord.lat,data.coord.lon)
        getFetchMeteoCity(city)
        getForecastMeteoCity(city)
        this.setState({ error : false });
    }
    else {
    this.setState({ error : true });
    }
  }

  handleChange =(e) =>{
    this.setState({value :e.target.value})
  }

  // RENDER ////////////////////////////////////////////////////////////
render() {
  const { classes } = this.props;
  return (
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
    )
  }
}
export default connect(null,
  {getFetchMeteoCity,
    getPollution,
    getForecastMeteoCity
  })(withStyles(styles)(Form));
