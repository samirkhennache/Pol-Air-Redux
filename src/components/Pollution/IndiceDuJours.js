import React from 'react';
import './IndiceDuJours.css'
import IndicePollutionSolo from './IndicePollutionSolo'
import SmileyPollution from './SmileyPollution'
import ButtonPollution from './ButtonPollution'
import {connect} from 'react-redux';

const  IndiceDuJours = (props) =>{
const {loadedPollution,dataPol} = props
return(
  <div>
    <div className="indiceDuJour-index">
      <div><p className="indiceDuJour-part1">POLLUTION</p></div>
      <div className="indiceDuJour-part2">
        <div className="bouton-plus-index">
          <ButtonPollution className="button-indice-index"/>
        </div>
        <div className="indice-smiley">
          <div className="indice-pollution-child">{loadedPollution && <IndicePollutionSolo indice={dataPol}/>}</div>
          <div className="indice-smiley-child">{loadedPollution && <SmileyPollution indice={dataPol}/>}</div>
        </div>
      </div>
    </div>
  </div>
  )
}
const mapStateToProps = state =>({
  dataPol:state.pollutionReducer.dataPol,
  loadedPollution : state.pollutionReducer.loadedPollution,
  dataCity : state.geolocReducer

})
export default connect(mapStateToProps)(IndiceDuJours);