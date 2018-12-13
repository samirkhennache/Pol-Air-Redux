import React from 'react';
import {connect} from 'react-redux';
import './IndiceDuJours.css';
import IndiceMeteoSolo from './IndiceMeteoSolo'
import IconMeteo from './IconMeteo'
import ButtonMeteo from './ButtonMeteo'


const  MeteoDuJours =(props) => (
  <div>
    {<div className="indiceDuJour-index">
      <div><p className="indiceDuJour-part1">MÉTÉO</p></div>
      <div className="indiceDuJour-part2 indiceDuJour-part2-meteo">
        <div className="indice-smiley">
          {props.loadedMeteo && <div className="indice-smiley-child">
          <IndiceMeteoSolo
            temperature={props.dataMeteo.temperature}
            degres={props.dataMeteo.degre}
            />
            </div>}
            {props.loadedMeteo &&<div className="indice-smiley-child">
              <IconMeteo icon={props.dataMeteo.icon}/>
              </div>}
        </div>
        <div className="bouton-plus-index">
          <ButtonMeteo className="button-indice-index"/>
        </div>
      </div>
    </div>}
  </div>
)
const mapStateToProps = state =>({
    dataMeteo :state.meteoReducer.dataMeteo,
    loadedMeteo:state.meteoReducer.loadedMeteo
})
export default connect(mapStateToProps)(MeteoDuJours);