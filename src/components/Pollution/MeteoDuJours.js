import React, { Component } from 'react';
import {connect} from 'react-redux';
import './IndiceDuJours.css';
import IndiceMeteoSolo from './IndiceMeteoSolo'
import IconMeteo from './IconMeteo'
import ButtonMeteo from './ButtonMeteo'


class MeteoDuJours extends Component {

    render() {
    if(this.props.dataMeteo !== undefined)
       return(
        <div>
           {<div className="indiceDuJour-index">
                <div><p className="indiceDuJour-part1">MÉTÉO</p></div>
                <div className="indiceDuJour-part2 indiceDuJour-part2-meteo">
                    <div className="indice-smiley">

                        <div className="indice-smiley-child"><IndiceMeteoSolo temperature={this.props.dataMeteo.temperature} degres={this.props.dataMeteo.degre}/></div>
                        <div className="indice-smiley-child"><IconMeteo icon={this.props.dataMeteo.icon}/></div>
                    </div>
                    <div className="bouton-plus-index">
                        <ButtonMeteo className="button-indice-index"/>
                    </div>
               </div>
            </div>}
        </div>
        )
    else return (<div>wait</div>)
    }
}
const mapStateToProps = state =>({
    dataMeteo :state.meteoReducer.dataMeteo,
})
export default connect(mapStateToProps)(MeteoDuJours);