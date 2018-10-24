import React, {Component} from 'react';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import './pagePollution.css'
import IndicePollutionSolo from './IndicePollutionSolo';

class PagePollution extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <IndicePollutionSolo indice={this.props.indice}/>
                <ConseilsPollution indice={this.props.indice}/>
                <HistoriquePollution/>
            </div>
        );
    }
}
 
export default PagePollution;