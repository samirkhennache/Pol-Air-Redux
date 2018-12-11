import React, { Component } from 'react';
import {connect} from 'react-redux';
import './IndiceDuJours.css';
import IndiceMeteoSolo from './IndiceMeteoSolo'
import IconMeteo from './IconMeteo'
import ButtonMeteo from './ButtonMeteo'


class MeteoDuJours extends Component {
  render() {
    return(
      <div>
        {<div className="indiceDuJour-index">
          <div><p className="indiceDuJour-part1">MÉTÉO</p></div>
          <div className="indiceDuJour-part2 indiceDuJour-part2-meteo">
            <div className="indice-smiley">
             {this.props.loadedMeteo && <div className="indice-smiley-child">
              <IndiceMeteoSolo
                temperature={this.props.dataMeteo.temperature}
                degres={this.props.dataMeteo.degre}
                />
                </div>}
                {this.props.loadedMeteo &&<div className="indice-smiley-child">
                  <IconMeteo icon={this.props.dataMeteo.icon}/>
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
}
const mapStateToProps = state =>({
    dataMeteo :state.meteoReducer.dataMeteo,
    loadedMeteo:state.meteoReducer.loadedMeteo
})
export default connect(mapStateToProps)(MeteoDuJours);