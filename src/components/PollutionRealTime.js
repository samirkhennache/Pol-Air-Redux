import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import IndiceDuJours from './IndiceDuJours'
import './PollutionRealTime.css'

//j'ai declare url en génirique pour faciliter la recherche des villes par la suite 
const city =  "Paris"
let stateCity = "Ile-de-France"
let country = "FRANCE"
const key = "ehvBN549ec3xDmbbW";
const url =`http://api.airvisual.com/v2/city?city=${city}&state=${stateCity}&country=${country}&key=${key}`

class PollutionRealTime extends Component {
    // dataPol permet de recuperer les donnees du fichier json l'indice du jours 
   state ={
    dataPol:undefined,
   }
    
   // getDataPol methode pour appeler l'api
   getDataPol() {
    fetch(url).then((resp)=>resp.json()).then((res)=>{this.setState({dataPol:res.data.current.pollution.aqius})});
    }
    
    //componentDidMount :faire l'appel de l'api au moment de la creation du DOM 
    componentDidMount() {
       
        this.getDataPol()
    }
    render() { 
    //test si jamais les dataPol sont null afficge  progress bar 
    if(this.state.dataPol === undefined)
        return (
            <div className="CircularProgress">
                <CircularProgress  />
            </div>
        )
        //création d'un Paper  pour afficher les résultats
        return (  
                <div>
                    {/* je passe en props au component child IndiceDuJours les props (indice max de la pollution) */}
                     <IndiceDuJours indice ={this.state.dataPol} /> 
                </div>  
          );
    }
}
 
export default PollutionRealTime;