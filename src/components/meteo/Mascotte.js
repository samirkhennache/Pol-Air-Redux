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


 const getBearc = (props) =>{
     const {dataMeteo,dataPol} = props;
     const {imgBackground,temperature,description} = dataMeteo
  if(imgBackground.endsWith('n'))
      return nuit
  else if(dataPol>=150)
      return pollution
  else if(temperature<=0)
      return glacial
  else if(temperature>=30)
      return canicule
  else if(description.includes('pluie'))
      return pluie
  else if(temperature<=10)
      return froid
  else if(temperature>=20)
      return chaud
  else{
      return normal
  }
}
const Mascotte = (props) =>{
const {loadedMeteo} = props;
return (
  <div className="mascotte-border">
    {loadedMeteo&& <img src={getBearc(props)} alt="Mascotte du jour" style={{ height: "30vh" }}/>}
  </div>
)
}
const mapStateToProps = state =>({
  dataMeteo :state.meteoReducer.dataMeteo,
  loadedMeteo: state.meteoReducer.loadedMeteo,
  dataPol:state.pollutionReducer.dataPol,
})
export default connect(mapStateToProps)(Mascotte);