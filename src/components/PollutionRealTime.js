import React,{Component} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'; 
import {Typography,Grid,Card} from '@material-ui/core'
import IndiceDuJours from './IndiceDuJours'




class PollutionRealTime extends Component {
   state ={
    dataPol: null
   }
   componentDidMount() {
    getDataPol() {
        fetch('http://api.airvisual.com/v2/city?city=Paris&state=Ile-de-France&country=FRANCE&key=AgM8MuxtXNcfwPrHN')
        .then((jeRecupereLaReponseEtLaMetDansUnJson)=>{jeRecupereLaReponseEtLaMetDansUnJson.json()
        .then((IciLeJsonParser)=>{console.log(IciLeJsonParser.data.current.pollution.aqius)
        .catch(error => console.log('echecDuParsage', error))
        this.setState({dataPol:IciLeJsonParser.data.current.pollution.aqius})
          })
        })
    }
    
   }
    render() { 
       
        return (
           
            <Grid container >
                <Grid item >
                <Card className="card">
                    <CardActionArea>
                        { console.log("indice: "+this.state)}
                        <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                          Qualité de l'air
                        </Typography>
                        <IndiceDuJours   indice ={this.state.dataPol} />
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
               
                
                
            </Grid>
          );
    }
}
 
export default PollutionRealTime;