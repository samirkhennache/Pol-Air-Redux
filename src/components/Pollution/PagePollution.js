import React from 'react';
import {connect} from 'react-redux';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';
import Form from '../form/Form'


const PagePollution =(props) =>{
	window.scrollTo(0, 0)
	return(<div className="bloc-pollution">
			<Form />
		{props.loadedPollution &&	<PagePollutionToday city={props.dataMeteo.city} indice={props.dataPol} imgBackground={props.dataMeteo.imgBackground} />}
			<div className="bloc-conseil-historique">
				<ConseilsPollution className="test-border" indice={props.dataPol}/>
				<BlocPolluants/>
				<HistoriquePollution/>

			</div>
	</div>)
}
const mapStateToProps = state =>({

	dataForcastMeteo :state.forcastMeteoReducer,
	dataMeteo :state.meteoReducer.dataMeteo,
	dataPol:state.pollutionReducer.dataPol,
	loadedPollution :state.pollutionReducer.loadedPollution

})
export default connect(mapStateToProps)(PagePollution);