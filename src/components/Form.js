import React from "react";

class Form extends React.Component{

  render() {
    return (

    <form onSubmit={this.props.getWeather}>
      <input type ="text" name="city" placeholder="Votre ville"/>
      <button className="btn-valid">Valider</button>
    </form>
    )
  }
}

export default Form;