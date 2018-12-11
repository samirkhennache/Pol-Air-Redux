import React,{Component} from "react";
import {connect} from 'react-redux';
import {getFetchMeteo,getFetchMeteoCity} from './actions/meteoActions';
import {getPollution} from './actions/pollutionActions';
import {getForecastMeteo,getForecastMeteoCity} from './actions/forcastMeteoAction';
import PagePollution from "./components/Pollution/PagePollution";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BlockForcastMeteo from './components/meteo/forcast/BlockForcastMeteo'
import './form.css';
import NavBar from './menu/NavBar'
import Home from './components/meteo/Home'
import Footer from "./footer/Footer";
import Page404 from './components/page404/Page404';


const URL ="https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat="
class App extends Component {

	getLoc = () => {
		navigator.geolocation.getCurrentPosition(  (position) => {
			const latitude =  position.coords.latitude;
			const longitude =  position.coords.longitude;
			//mettre a jour les states apres la recuperation des lat et long
			this.props.getPollution(latitude,longitude)
				fetch(`${URL}${latitude}&lon=${longitude}&format=json`)
	.then(getFetchGeoLoc => getFetchGeoLoc.json())
	.then(data =>{
		this.props.getFetchMeteo(data)
		this.props.getForecastMeteo(data)
			})
		})
	}
    componentDidMount(){
			this.getLoc()
    }
	render() {
		return (
			<BrowserRouter>
        <div>
					<NavBar />
            <Switch>
							<Route  exact path="/" component ={Home}/>
							<Route exact path="/BlockForcastMeteo" component={BlockForcastMeteo} />
							<Route exact path="/HistoriquePollution" component ={PagePollution}/>
							<Route  component={Page404}/>
            </Switch>
					<Footer />
        </div>
    </BrowserRouter>
    );
  }
}
const mapStateToProps = state =>({
    dataForcastMeteo :state.forcastMeteoReducer,
    dataMeteo :state.meteoReducer,
    dataPol :state.pollutionReducer
})
export default connect(mapStateToProps,
	{getFetchMeteo,
		getFetchMeteoCity,
		getPollution,
		getForecastMeteo,
		getForecastMeteoCity
	})(App);
