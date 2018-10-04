import React from "react";
// import '../App.css'




// const api_Key_Current= "0f53c26a9c88a54d8706c8b3c9d2b880";
class Form extends React.Component{

  // state = {
  //   temperature: undefined,
  //   city: undefined,
  //   humidity: undefined,
  //   description: undefined,
  //   icon : undefined,
  //   degre : null,
  //   error: undefined
  // }

  // getWeather = async (e) => {
  //   //const city = e.target.elements.city.value;
  //   const units = "&units=metric";
  //   const lang = "&lang=fr";
  //   //e.preventDefault();

  //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris${units}${lang}&APPID=${api_Key_Current}`);
  //   const data = await api_call.json();
  //   console.log(data);

  //   this.setState({
  //     temperature : Math.floor(data.main.temp),
  //     city: data.name,
  //     humidity: data.main.humidity,
  //     description: data.weather[0].description,
  //     icon : data.weather[0].icon,
  //     degre : "C°",
  //     error: ""
  //   })
  // }  

 
  render() {
    return (

    <form  onSubmit ={this.props.getWeather}>
      <input type ="text" name="city" placeholder="Votre ville"/>
      <button  className="btn-valid">Valider</button>
    </form>
    )
  }
}

export default Form;