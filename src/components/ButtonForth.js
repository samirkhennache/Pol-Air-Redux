import React, { Component } from 'react';

class ButtonForth extends Component {
    render() { 
        return ( 
            <button onClick={this.props.method}>FORTH</button>
         );
    }
}
 
export default ButtonForth;