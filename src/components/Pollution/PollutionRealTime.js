import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import IndiceDuJours from './IndiceDuJours'
import './PollutionRealTime.css'


class PollutionRealTime extends Component {

    render() { 
    //test si jamais les dataPol sont null afficge  progress bar 
    if(this.props.dataPol === undefined)
        return (
            <div className="CircularProgress">
                <CircularProgress  />
            </div>
        )
        //création d'un Paper  pour afficher les résultats
        return (  
                <div>
                    {/* je passe en props au component child IndiceDuJours les props (indice max de la pollution) */}
                     <IndiceDuJours indice={this.props.dataPol} />
                </div>  
          );
    }
}
 
export default PollutionRealTime;