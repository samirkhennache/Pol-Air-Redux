import React from "react";

class Form extends React.Component{

  render() {
    return (
      
    <form onSubmit={this.props.weatherSearch}>
      <input type ="text" name="city" placeholder="Paris"/>
      <button>OK</button>
    </form>
    )
  }
}

export default Form;
