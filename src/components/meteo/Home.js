import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
//import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
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
                    
                    <Grid item xs={12} md={6}> 
                        <Grid container className="home-opacity"> {/*Container logo + city + date + description*/}
                            
                            <Grid item xs={4} md={4}> {/*Container logo*/}
                                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description} imgBackground={this.props.imgBackground}/> }
                            </Grid>
                            
                            <Grid item xs={8} md={8} direction={'column'} align="right" className="index-city-date-description"> {/*Container city + date + description*/}
                                <div className="city-all-pages">{this.props.city}</div>
                                <DateIndex className="date-all-page"/>
                                <div className="comment-all-page">{this.props.description}</div>
                               
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}> {/*Container indices polution + météo*/}
                        <Grid container xs={12} md={6}> {/*Container logo + city + date + description*/}
                            <Grid item xs={6} md={3}> {/*Container poltution (indice + icone)*/}
                                <IndiceDuJours indice={this.props.dataPol} />
                            </Grid>
                            <Grid item xs={6} md={3}> {/*Container météo (température + icone*/}
                                {this.props.temperature} 
                                {this.props.degre}
                                {/*humidity={this.props.humidity}
                                pourcentage={this.props.pourcentage}/>*/}
                                <Icon icon={this.props.icon}/> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;