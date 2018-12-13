import React from 'react';
import './indice-pollution-solo.css'


const GetFrenchIndice = (props) => {
  if(props.indice<=12)
    return 1
  else if(props.indice<=25)
    return 2
  else if( props.indice<=37)
    return 3
  else if(props.indice<=50)
    return 4
  else if(props.indice<=100)
    return 5
  else if( props.indice<=125)
    return 6
  else if(props.indice<=150)
    return 7
  else if(props.indice<=175)
    return 8
  else if( props.indice<=200)
    return 9
  else if(props.indice<=300)
    return 10
  else
    return 11
}
const SoloStyleIndice =(props)=>{
  if(props.indice<=25)
    return 'solo-tres-faible'
  else if(props.indice<=50)
    return 'solo-faible'
  else if( props.indice<=125)
    return 'solo-moyen'
  else if(props.indice<=175)
    return 'solo-eleve'
  else if (props.indice>175)
    return'solo-tres-eleve'
}
const IndicePollutionSolo = (props) =>  (
  <div className={`indice-pollution-main ${SoloStyleIndice(props)}`}>
    <div className={`indice-pollution-solo`}>{GetFrenchIndice(props)}</div>
  </div>
);

export default IndicePollutionSolo;
