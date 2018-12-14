import React from 'react';
import './indice-pollution-solo.css'


const GetFrenchIndice = (props) => {
  const {indice} = props
  if(indice<=12)
    return 1
  else if(indice<=25)
    return 2
  else if( indice<=37)
    return 3
  else if(indice<=50)
    return 4
  else if(indice<=100)
    return 5
  else if( indice<=125)
    return 6
  else if(indice<=150)
    return 7
  else if(indice<=175)
    return 8
  else if( indice<=200)
    return 9
  else if(indice<=300)
    return 10
  else
    return 11
}
const SoloStyleIndice =(props)=>{
  const {indice} = props;
  if(indice<=25)
    return 'solo-tres-faible'
  else if(indice<=50)
    return 'solo-faible'
  else if(indice<=125)
    return 'solo-moyen'
  else if(indice<=175)
    return 'solo-eleve'
  else if (indice>175)
    return'solo-tres-eleve'
}
const IndicePollutionSolo = (props) =>  (
  <div className={`indice-pollution-main ${SoloStyleIndice(props)}`}>
    <div className={`indice-pollution-solo`}>{GetFrenchIndice(props)}</div>
  </div>
);

export default IndicePollutionSolo;
