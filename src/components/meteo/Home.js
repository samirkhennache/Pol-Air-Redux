import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
//import PrintSearch from './current/PrintSearch'
import MeteoDuJours from '../Pollution/MeteoDuJours'
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
//import Titles from '../Titles';
import Footer from '../Footer';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container">
            
                <Grid container> {/*Container global*/}
                    
                    <Grid item xs={12} md={7}> 
                        <Grid container className="home-opacity"> {/*Container logo + city + date + description*/}
                            
                            <Grid item xs={4} md={4}> {/*Container logo*/}
                                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description} imgBackground={this.props.imgBackground}/> }
                            </Grid>
                            
                            <Grid item xs={8} md={8} direction={'column'} align="right" className="home-city-date-description"> {/*Container city + date + description*/}
                                <div className="city-all-pages">{this.props.city}</div>
                                <DateIndex className="date-all-page"/>
                                <div className="comment-all-page">{this.props.description}</div>
                               
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} md={5} direction={'raw'} wrap="nowrap" justify="center"> {/*Container indices polution + météo*/}
                            
                                <IndiceDuJours indice={this.props.dataPol} />
                                <span className="index-vertical-row"></span>
                                {/* attention le composant meteo du jour est dans pollution, c'est une copie de indice du jour */}
                                <MeteoDuJours temperature={this.props.temperature} degres={this.props.degre} icon={this.props.icon}/>
                            
                        </Grid>
                        
                        <Grid item xs={12} md={12}>
                            <Footer />
                        </Grid>
                </Grid>
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>
                
            </div>
        );
    }
}

export default Home;