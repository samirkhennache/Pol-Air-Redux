import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonPollution = () => {

  return (
    <div>
      <Button variant="fab" mini color="primary" aria-label="Add" >
      <i className="material-icons">directions_walk</i>
      </Button>
    </div>
  );
}

ButtonPollution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ButtonPollution;