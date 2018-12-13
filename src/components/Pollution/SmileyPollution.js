import React from 'react';
import './smileyPollution.css'
import Smiley from './Smiley'

const GetSmiley = ({indice}) => {
  if(indice<=25)
    return 'smiley-tres-faible'
  else if(indice<=50)
    return 'smiley-faible'
  else if( indice<=125)
    return 'smiley-moyen'
  else if(indice<=175)
    return 'smiley-eleve'
  else if (indice>175)
    return'smiley-tres-eleve'
  }

const SmileyPollution = ({indice}) => (
  <div className="smiley-main">
    <div className={`smiley-solo`}>
      <Smiley img={GetSmiley(indice)} />
    </div>
  </div>
);


export default SmileyPollution;