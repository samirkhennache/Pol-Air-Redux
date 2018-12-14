import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlockForcastMeteoDate from './BlockForcastMeteoDate';
import BlockForecastMeteoTemp from './BlockForecastMeteoTemp';
import './BlockForecastMeteo.css'
import BlockIconForecast from './BlockIconForecast';
import BlockForecastMeteoNow from './BlockForecastMeteoNow';
import Background from '../current/Background';
import Form from '../../form/Form';



//import Graphic from './Graphic'



class BlockForcastMeteo extends Component {

componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {
    const {dataMeteo,loadedForcast,dataForcastMeteo} = this.props
    const {imgBackground,temperature,description,city} = dataMeteo
    const {icon_forecast,tempMin,tempMax} =dataForcastMeteo
    if(loadedForcast)
    return (
      <div className="bloc-page-meteo">
        <div>
        <Background imgBackground={imgBackground} />
        </div>
        <Form />
        <BlockForecastMeteoNow className='blockMeteoNow' temperature={temperature} description={description} city={city}/>
        {/* <Graphic  tempMin={tempMin}  tempMax={tempMax} /> */}
        <div className='back-blockMeteo'>
          {tempMin.map((x, index, t) => (
            <div key={index} >
              <div key={index} className='blockMeteo'>
                <BlockForcastMeteoDate dateApp={index+1} />
                <BlockIconForecast icon_forecast={icon_forecast[index]}/>
                <BlockForecastMeteoTemp temp_min={tempMin[index]} temp_max={tempMax[index]} />
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