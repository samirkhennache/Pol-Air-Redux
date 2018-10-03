import React, { Component } from 'react';

class ButtonBack extends Component {
    render() { 
        return ( 
            <div>
            <button onClick={this.props.method}>BACK</button>
            </div>
         );
    }
}
export default ButtonBack;