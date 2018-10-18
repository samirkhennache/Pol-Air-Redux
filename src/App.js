import React, { Component } from "react";
// import Home from "./components/Home";
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import ForecastMeteo from './components/meteo/forcast/ForecastMeteo'
// // import HistoriquePollution from './components/Pollution/HistoriquePollution'
// // import PagePollution from './components/Pollution/PagePollution'
// import { Link } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Form from "./components/meteo/Form";


class App extends Component {
  
  render() {

    // const Accueil = props => <Link to="/" {...props} />
    // const Pollutions = props => <Link to='/HistoriquePollution' {...props} />
    // const Forecastmeteo = props => <Link to="/ForecastMeteo" {...props} /> 
    return ( 
    <div>
      <Form/>
    </div>

      // <BrowserRouter>
      // <div>
      //     <NavBar accueil={Accueil} forecastmeteo={Forecastmeteo}  historiquePollution ={Pollutions}/>
 
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/ForecastMeteo" component={ForecastMeteo} />
      //       {/* <Route path="/HistoriquePollution" component ={PagePollution} /> */}
      //     </Switch>
      //   </div>
      // </BrowserRouter>

    );
  }
}

export default App;
