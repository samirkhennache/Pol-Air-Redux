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
	const {dataMeteo,dataPol,loadedPollution} = props;
	const {city,imgBackground} = dataMeteo
	return(<div className="bloc-pollution">
			<Form />
		{loadedPollution &&	<PagePollutionToday city={city} indice={dataPol} imgBackground={imgBackground} />}
			<div className="bloc-conseil-historique">
				<ConseilsPollution className="test-border" indice={dataPol}/>
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