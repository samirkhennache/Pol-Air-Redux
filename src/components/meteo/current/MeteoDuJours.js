import React from 'react';
import {connect} from 'react-redux';
import '../../Pollution/IndiceDuJours.css'
import IndiceMeteoSolo from './IndiceMeteoSolo'
import IconMeteo from './IconMeteo'
import ButtonMeteo from '../../Pollution/ButtonMeteo'


const  MeteoDuJours =(props) =>{
const {loadedMeteo,dataMeteo} = props;
const {temperature,degre,icon} = dataMeteo
return(
  <div>
    {<div className="indiceDuJour-index">
      <div><p className="indiceDuJour-part1">MÉTÉO</p></div>
      <div className="indiceDuJour-part2 indiceDuJour-part2-meteo">
        <div className="indice-smiley">
          {loadedMeteo && <div className="indice-smiley-child">
          <IndiceMeteoSolo
            temperature={temperature}
            degres={degre}
            />
            </div>}
            {loadedMeteo &&<div className="indice-smiley-child">
              <IconMeteo icon={icon}/>
              </div>}
        </div>
        <div className="bouton-plus-index">
          <ButtonMeteo className="button-indice-index"/>
        </div>
      </div>
    </div>}
  </div>
)
}
const mapStateToProps = state =>({
    dataMeteo :state.meteoReducer.dataMeteo,
    loadedMeteo:state.meteoReducer.loadedMeteo
})
export default connect(mapStateToProps)(MeteoDuJours);