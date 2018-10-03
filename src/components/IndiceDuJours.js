import React, { Component } from 'react';


class IndiceDuJours extends Component {
    state = {
        quality :["Très Faible","Faible","Moyen","Elevé","Très Elevé"],
        indice : this.props.indice,
      }
      GetQuality(){

        if(this.state.indice<=25)
            return this.state.quality[0]
        else if(this.state.indice>25 && this.state.indice<=50)
            return this.state.quality[1]
        else if(this.state.indice>50 && this.state.indice<=75)
            return this.state.quality[2]
        else if(this.state.indice>75 && this.state.indice<=100)
            return this.state.quality[3]
        else
            return this.state.quality[4]
      }

    render() { 
       return(
            <div>
                <p>{this.GetQuality()}</p>
                <div>{this.state.indice}</div>
            </div>
       )
             
        
    }
}
 
export default IndiceDuJours;