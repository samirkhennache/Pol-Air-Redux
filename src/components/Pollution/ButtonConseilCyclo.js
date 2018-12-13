import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonPollution = () => (
  <div>
    <Button variant="fab" mini color="primary" aria-label="Add">
    <i className="material-icons">directions_bike</i>
    </Button>
  </div>
  );

ButtonPollution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ButtonPollution;