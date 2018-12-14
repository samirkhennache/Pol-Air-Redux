import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const ButtonPollution = () =>{

return(
  <div>
    <Fab component={Link} to="/HistoriquePollution" mini ="true" color="primary" aria-label="Add">
      <AddIcon />
    </Fab>
  </div>
);
}
export default (ButtonPollution);