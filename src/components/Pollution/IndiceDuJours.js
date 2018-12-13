import React from 'react';
import './IndiceDuJours.css'
import IndicePollutionSolo from './IndicePollutionSolo'
import SmileyPollution from './SmileyPollution'
import ButtonPollution from './ButtonPollution'
import {connect} from 'react-redux';

const  IndiceDuJours = (props) =>(
  <div>
    <div className="indiceDuJour-index">
      <div><p className="indiceDuJour-part1">POLLUTION</p></div>
      <div className="indiceDuJour-part2">
        <div className="bouton-plus-index">
          <ButtonPollution className="button-indice-index"/>
        </div>
        <div className="indice-smiley">
          <div className="indice-smiley-child">{props.loadedPollution && <IndicePollutionSolo indice={props.dataPol}/>}</div>
          <div className="indice-smiley-child">{props.loadedPollution && <SmileyPollution indice={props.dataPol}/>}</div>
        </div>
      </div>
    </div>
  </div>
  )
const mapStateToProps = state =>({
  dataPol:state.pollutionReducer.dataPol,
  loadedPollution : state.pollutionReducer.loadedPollution,
  dataCity : state.geolocReducer

})
export default connect(mapStateToProps)(IndiceDuJours);