import React  from 'react';
import ModalesPolluants from './ModalesPolluants';
import './BlocPolluants.css'

const BlocPolluants= () => (
  <div className="bloc-polluants">
      <hr className="hr-meteo"/>
      <div className="polluants">
        <ModalesPolluants/>
      </div >
      <hr className="hr-meteo"/>
  </div>
);


export default BlocPolluants;