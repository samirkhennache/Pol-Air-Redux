import React, { Component } from 'react';
import './App.css';
import './components/Icon.css';
import Header from './components/Header';
import './components/Form.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Footer from './components/Footer';
import DateIndex from './components/DateIndex'



class App extends Component {

  render() {
    return (

<div className="page-parent" >
  <div className="page-child-top">
    <Header/>
  </div>
  <div className="page-child">
    <DateIndex />
  </div>
  <div className="page-child">
    <Titles/>
  </div>
  <div className="page-child">
    <Form />          
  </div>
  <div className="page-child-bottom">
    <Footer />
  </div>
</div>

    );
  }
}

export default App;