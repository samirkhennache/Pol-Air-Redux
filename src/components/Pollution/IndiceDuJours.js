import React from 'react';
import './IndiceDuJours.css'
import IndicePollutionSolo from './IndicePollutionSolo'
import SmileyPollution from './SmileyPollution'
import ButtonPollution from './ButtonPollution'
import {connect} from 'react-redux';









// //styleIndice permet de recuperer le style de l'indice à partir du fichiet IndiceDuJours.css

// StyleIndice = (props) =>{
//   if(props.indice<=25)
//     return 'tres-faible'
//   else if(props.indice<=50)
//     return 'faible'
//   else if( props.indice<=75)
//     return 'moyen'
//   else if(props.indice<=100)
//     return 'eleve'
//   else
//     return'tres-eleve'
// }
// GetFrenchIndice = (props) =>{
//   if(props.indice<=12)
//     return 1
//   else if(props.indice<=25)
//     return 2
//   else if( props.indice<=37)
//     return 3
//   else if(props.indice<=50)
//     return 4
//   else if(props.indice<=100)
//     return 5
//   else if( props.indice<=125)
//     return 6
//   else if(props.indice<=150)
//     return 7
//   else if(props.indice<=175)
//     return 8
//   else if( props.indice<=200)
//     return 9
//   else if(props.indice<=300)
//     return 10
//   else
//     return 11
// }


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