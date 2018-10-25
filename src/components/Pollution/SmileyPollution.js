import React, {Component} from 'react';
import './smileyPollution.css'

class SmileyPollution extends Component {
    
    GetSmiley = () => {
        if(this.props.indice<=12)
            return ":D"
        else if(this.props.indice<=25)
            return ":D"
        else if( this.props.indice<=37)
            return ":)"
        else if(this.props.indice<=50)
            return ":)"
        else if(this.props.indice<=100)
            return ":-|"
        else if( this.props.indice<=125)
            return ":-|"
        else if(this.props.indice<=150)
            return ":("
        else if(this.props.indice<=175)
            return ":("
        else if( this.props.indice<=200)
            return "x-("
        else if(this.props.indice<=300)
            return "x-("
        else
            return "x-("
    }
    render() { 
        return (
            <div className="smiley-main">
                <div className={`smiley-solo`}>{this.GetSmiley()}</div>
            </div>
       
        );
    }
}
 
export default SmileyPollution;