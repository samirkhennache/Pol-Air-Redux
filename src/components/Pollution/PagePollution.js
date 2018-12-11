import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';
import Form from '../form/Form'
class PagePollution extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = {  }
    render() {

			return (
				<div className="bloc-pollution">
						<Form />
					{this.props.loadedPollution &&	<PagePollutionToday city={this.props.dataMeteo.city} indice={this.props.dataPol} imgBackground={this.props.dataMeteo.imgBackground} />}
						<div className="bloc-conseil-historique">
							<ConseilsPollution className="test-border" indice={this.props.dataPol}/>
							<BlocPolluants/>
							<HistoriquePollution/>

						</div>
				</div>
			);
    }
}
const mapStateToProps = state =>({

	dataForcastMeteo :state.forcastMeteoReducer,
	dataMeteo :state.meteoReducer.dataMeteo,
	dataPol:state.pollutionReducer.dataPol,
	loadedPollution :state.pollutionReducer.loadedPollution

})
export default connect(mapStateToProps)(PagePollution);