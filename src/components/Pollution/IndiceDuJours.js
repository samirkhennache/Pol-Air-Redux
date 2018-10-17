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
      GetMessageQuality(){

        if(this.props.indice<=25)
            return this.state.quality[0]
        else if(this.props.indice<=50)
            return this.state.quality[1]
        else if( this.props.indice<=100)
            return this.state.quality[2]
        else if(this.props.indice<=125)
            return this.state.quality[3]
        else if(this.props.indice<=150)
            return this.state.quality[3]
        else if(this.props.indice<=175)
            return this.state.quality[4]
        else if(this.props.indice<=200)
            return this.state.quality[4]
        else if(this.props.indice<=300)
            return this.state.quality[5]
        else
            return this.state.quality[6]
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
    GetFrenchIndice = () => { 
        if(this.props.indice<=12)
            return 1
        else if(this.props.indice<=25)
            return 2
        else if( this.props.indice<=37)
            return 3
        else if(this.props.indice<=50)
            return 4
        else if(this.props.indice<=100)
            return 5
        else if( this.props.indice<=125)
            return 6
        else if(this.props.indice<=150)
            return 7
        else if(this.props.indice<=175)
            return 8
        else if( this.props.indice<=200)
            return 9
        else if(this.props.indice<=300)
            return 10
        else
            return 11
    }

    render() { 
        
       return(
          
            <Paper className ="indice-du-jour">
                {this.props.indice && <Typography  variant="display2"  className="quality-typography">
                Qualité de l'air
                </Typography>}
                {this.props.indice && <Typography variant="headline" className="quality" >{this.GetMessageQuality()}</Typography>}
                <span className ={`indice ${this.StyleIndice()}`}>{this.GetFrenchIndice()}</span>  
            </Paper>
        )  
    }
}
 
export default IndiceDuJours;