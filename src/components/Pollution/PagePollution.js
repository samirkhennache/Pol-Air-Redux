import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';

class PagePollution extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = {  }
    render() {
			if(this.props.dataMeteo !== undefined)
			return (
				<div className="bloc-pollution">
						<PagePollutionToday city={this.props.dataMeteo.city} indice={this.props.dataPol} imgBackground={this.props.dataMeteo.imgBackground} />
						<div className="bloc-conseil-historique">
							<ConseilsPollution className="test-border" indice={this.props.dataPol}/>
							<BlocPolluants/>
							<HistoriquePollution/>
						</div>
				</div>
			);
			else
			return <div>wait</div>
    }
}
const mapStateToProps = state =>({

	dataForcastMeteo :state.forcastMeteoReducer,
	dataMeteo :state.meteoReducer.dataMeteo,
	dataPol:state.pollutionReducer.dataPol,

})
export default connect(mapStateToProps)(PagePollution);