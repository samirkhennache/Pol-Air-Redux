import React from "react";
// import des mascottes
import normal from '../../img/01_Mascotte_normal.svg';
import pluie from '../../img/02_Mascotte_pluie.svg';
import froid from '../../img/03_Mascotte_froid.svg';
import chaud from '../../img/04_Mascotte_chaud.svg';
import canicule from '../../img/05_Mascotte_canicule.svg';
import glacial from '../../img/06_Mascotte_glacial.svg';
import pollution from '../../img/07_Mascotte_pollution.svg';

class Mascotte extends React.Component {



    // Conditions d'affichage de la mascotte avec Haute pollution en priorité
    getBear() {

        if(this.props.dataPol>=100)
            return pollution
        else if(this.props.temperature<=0)
            return glacial
        else if(this.props.temperature>=30)
            return canicule
        else if(this.props.description.includes('pluie'))
            return pluie
        else if(this.props.temperature<=10)
            return froid
        else if(this.props.temperature>=20)
            return chaud
        else{
            return normal
        }
    }


    render() { 
        return ( 
            <div >
                <img src={this.getBear()} alt="Mascotte du jour"/>
                <p>{this.props.temperature} {this.props.dataPol} {this.props.description}</p>
            </div>
        )
    }
}
    
export default Mascotte;