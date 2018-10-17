import React,{Component} from 'react';
import IndiceDuJours from './IndiceDuJours'
import './PollutionRealTime.css'


class PollutionRealTime extends Component {
    
  
    render() { 
        //création d'un Paper  pour afficher les résultats
        return (  
                <div>
                    {/* je passe en props au component child IndiceDuJours les props (indice max de la pollution) */}
                     <IndiceDuJours indice ={this.props.dataPol} /> 
                </div>  
          );
    }
}
 
export default PollutionRealTime;