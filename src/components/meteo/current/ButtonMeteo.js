import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'


const styles = {
  root: {
    variant:"fab"
  },

};
const ButtonPollution = (props) =>{
  const { classes } = props;
  return(
    <div>
      <Button component={Link} to="/BlockForcastMeteo" variant= {classes.root.variant} mini color="primary" aria-label="Add" >
        <AddIcon />
      </Button>
    </div>
  );
}
export default withStyles(styles)(ButtonPollution);