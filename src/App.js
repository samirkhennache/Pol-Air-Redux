import React, { Component } from "react";
import Home from "./Home";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ForecastMeteo from './components/meteo/ForecastMeteo'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'


class App extends Component {

  

  render() {

    const Accueil = props => <Link to="/" {...props} />
    const Forecastmeteo = props => <Link to="/ForecastMeteo" {...props} />


    return (

      <BrowserRouter>
      <div>
          <NavBar accueil={Accueil} forecastmeteo={Forecastmeteo}/>
 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ForecastMeteo" component={ForecastMeteo} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
