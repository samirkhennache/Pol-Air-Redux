import React from "react";
import {Typography} from '@material-ui/core'

class Humidity extends React.Component{

  render() {
    return (
      <div>
        <Typography variant="Body" className="quality" >{this.props.humidity}</Typography>
       
      </div>
    )
  }
}

export default Humidity;