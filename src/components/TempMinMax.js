import React from "react";
import {Typography} from '@material-ui/core'

class TempMinMax extends React.Component{

  render() {
    return (
      <div>
         <Typography variant="Body" className="quality" > {this.props.temp_min}</Typography>
         <Typography variant="Body" className="quality" > {this.props.temp_max}</Typography>      
      </div>
    )
  }
}

export default TempMinMax;