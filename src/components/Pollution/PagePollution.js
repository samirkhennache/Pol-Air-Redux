import React, {Component} from 'react';
import IndiceDuJours from './IndiceDuJours';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'

class PagePollution extends Component {
    state = {  }
    render() { 
        return (  
            <div className="page-parent">
                <IndiceDuJours indice={this.props.indice}/>
                <ConseilsPollution indice={this.props.indice}/>
                <HistoriquePollution/>
            </div>
        );
    }
}
 
export default PagePollution;