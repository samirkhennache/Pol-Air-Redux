import React, { Component } from 'react';
import BlockForcastMeteoDate from './BlockForcastMeteoDate';
import BlockForecastMeteoTemp from './BlockForecastMeteoTemp';
import './BlockForcastMeteo.css'


class BlockForcastMeteo extends Component {
    render() { 
        return ( 
            <div className="blockMeteo">
                <BlockForcastMeteoDate date={this.props.dateApp} />
                <BlockForecastMeteoTemp dateForTemp={this.props.dateApp} />
            </div>
         );
    }
}
 
export default BlockForcastMeteo;