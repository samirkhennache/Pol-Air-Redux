import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'


const ButtonPollution = () => (
  <div>
    <Button component={Link} to="/BlockForcastMeteo" variant="fab" mini color="primary" aria-label="Add" >
      <AddIcon />
    </Button>
  </div>
);

ButtonPollution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ButtonPollution;