import React, { Component } from 'react';
import {Typography,Paper} from '@material-ui/core'
import './IndiceDuJours.css'



class IndiceDuJours extends Component {
    //creaetion d'un tab pour afficher un la quilite de l'air
    state = {
       
        quality :["Très Faible","Faible","Moyen","Elevé","Très Elevé"],

      }
    
      //getQualite permet de retourner un element du quality 
      //en fonction de this.props.indice qui correspond a la valeur passé en props depuis le parent PollutionRealTime
    GetQuality(){

        if(this.props.indice<=25)
            return this.state.quality[0]
        else if(this.props.indice<=50)
            return this.state.quality[1]
        else if( this.props.indice<=75)
            return this.state.quality[2]
        else if(this.props.indice<=100)
            return this.state.quality[3]
        else
            return this.state.quality[4]
    }

      //styleIndice permet de recuperer le style de l'indice à partir du fichiet IndiceDuJours.css
    StyleIndice(){
        if(this.props.indice<=25)
            return 'tres-faible'
        else if(this.props.indice<=50)
            return 'faible'
        else if( this.props.indice<=75)
            return 'moyen'
        else if(this.props.indice<=100)
            return 'eleve'
        else
            return'tres-eleve'
    }

    render() { 
        
       return(
          
            <Paper className ="indice-du-jour">
                <Typography  variant="display2"  className="quality-typography">
                Qualité de l'air
                </Typography>
                <Typography variant="headline" className="quality" >{this.GetQuality()}</Typography>
                <span className ={`indice ${this.StyleIndice()}`}>{this.props.indice}</span>  
            </Paper>
        )  
    }
}
 
export default IndiceDuJours;