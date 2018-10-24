import React, { Component } from 'react';
import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
import Titles from '../Titles';
import Footer from '../Footer';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>        
                <div><DateIndex/></div>
                <div><Titles/></div>
                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description} imgBackground={this.props.imgBackground}/> }       
                                
                <PrintSearch
                    city={this.props.city}
                    temperature={this.props.temperature} 
                    degre={this.props.degre}
                    description={this.props.description}
                    humidity={this.props.humidity}
                    pourcentage={this.props.pourcentage}/>
                    <Icon icon={this.props.icon}/>            
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>
                <IndiceDuJours indice={this.props.dataPol} />
                <Footer />
            </div>
        
         );
    }
}

export default Home;