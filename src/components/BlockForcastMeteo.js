import React, { Component } from 'react';
import DateForcastMeteo from './DateForcastMeteo';
import IconForecastMeteo from './IconForecastMeteo';


class BlockForcastMeteo extends Component {
    render() { 
        return ( 
            <div>
                <DateForcastMeteo />
                <IconForecastMeteo />
            </div>
         );
    }
}
 
export default BlockForcastMeteo;