import React from "react";
import {connect} from 'react-redux';
// import des mascottes
import normal from '../../img/01_Mascotte_normal.svg';
import pluie from '../../img/02_Mascotte_pluie.svg';
import froid from '../../img/03_Mascotte_froid.svg';
import chaud from '../../img/04_Mascotte_chaud.svg';
import canicule from '../../img/05_Mascotte_canicule.svg';
import glacial from '../../img/06_Mascotte_glacial.svg';
import pollution from '../../img/07_Mascotte_pollution.svg';
import nuit from '../../img/08_Mascotte_nuit.svg';

class Mascotte extends React.Component {



    // Conditions d'affichage de la mascotte avec Haute pollution en priorité
    getBear() {
        console.log("mascotte",this.props);

        if(this.props.dataMeteo.imgBackground.endsWith('n'))
            return nuit
        else if(this.props.dataMeteo.dataPol>=150)
            return pollution
        else if(this.props.dataMeteo.temperature<=0)
            return glacial
        else if(this.props.dataMeteo.temperature>=30)
            return canicule
        else if(this.props.dataMeteo.description.includes('pluie'))
            return pluie
        else if(this.props.dataMeteo.temperature<=10)
            return froid
        else if(this.props.dataMeteo.temperature>=20)
            return chaud
        else{
            return normal
        }
    }


    render() {
        return (
            <div className="mascotte-border">
               {this.props.loadedMeteo&& <img src={this.getBear()} alt="Mascotte du jour" style={{ height: "30vh" }}/>}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    dataMeteo :state.meteoReducer.dataMeteo,
    loadedMeteo: state.meteoReducer.loadedMeteo
})
export default connect(mapStateToProps)(Mascotte);
