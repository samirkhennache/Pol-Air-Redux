import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlockForcastMeteoDate from './BlockForcastMeteoDate';
import BlockForecastMeteoTemp from './BlockForecastMeteoTemp';
import './BlockForecastMeteo.css'
import BlockIconForecast from './BlockIconForecast';
import BlockForecastMeteoNow from './BlockForecastMeteoNow';
import Background from '../current/Background';
import Form from '../../../Form';



//import Graphic from './Graphic'



class BlockForcastMeteo extends Component {

componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {
    if(this.props.loadedForcast)
    return (
      <div className="bloc-page-meteo">
        <div>
        <Background imgBackground={this.props.dataMeteo.imgBackground} />
        </div>
        <Form />
        <BlockForecastMeteoNow className='blockMeteoNow' temperature={this.props.dataMeteo.temperature} description={this.props.dataMeteo.description} city={this.props.dataMeteo.city}/>
        {/* <Graphic  tempMin={this.props.tempMin}  tempMax={this.props.tempMax} /> */}
        <div className='back-blockMeteo'>
          {this.props.dataForcastMeteo.tempMin.map((x, index, t) => (
            <div key={index} >
              <div key={index} className='blockMeteo'>
                <BlockForcastMeteoDate dateApp={index+1} />
                <BlockIconForecast icon_forecast={this.props.dataForcastMeteo.icon_forecast[index]}/>
                <BlockForecastMeteoTemp temp_min={this.props.dataForcastMeteo.tempMin[index]} temp_max={this.props.dataForcastMeteo.tempMax[index]} />
              </div>
              {index !== t.length-1 ? <hr className="hr-meteo"/> : null }
            </div>
          ))}
        </div>
      </div>
     );
     else
     return <div>Wait</div>
  }
}
const mapStateToProps = state =>({

  dataForcastMeteo :state.forcastMeteoReducer.dataForcastMeteo,
  loadedForcast : state.forcastMeteoReducer.loadedForcast,
  dataMeteo :state.meteoReducer.dataMeteo,
})
export default connect(mapStateToProps)(BlockForcastMeteo);
