import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/ArrowForwardIos';

class ButtonForth extends React.Component {
  render() { 
    return ( 
      <div>
      <IconButton onClick={this.props.method} >
        <DeleteIcon />
      </IconButton>
    </div>
     );
  }
}

export default ButtonForth;