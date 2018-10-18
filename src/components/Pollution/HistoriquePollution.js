import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



///declaration de varriables globales
const url = 'https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/ind_idf_agglo/FeatureServer/0/query?where=1%3D1&outFields=date_echea,valeur,qualificat&returnGeometry=false&outSR=4326&f=json'
let myDates = [];
let myLabel = [];
let myData  = [];
let allData = null;

class HistoriquePollution extends Component {
    state = {
        value: 0,
        ///chartData objet du graphique
        chartData: {}
    }
    //fonction qui lance le fecth asynchrone
    GetChartData = async () => {
        const call = await fetch(url)
        allData = await call.json()
        allData =allData.features.sort(function(a,b){return a.attributes.date_echea - b.attributes.date_echea}) 
        //recuperation de data sur une année
        this.GetYear();    
    }

    GetYear(){
        //toute mes dates
        myLabel =[];
        ///l'axe x :les dates
        myDates= [];
        ///axe y: les indices
        let myYearData=[];
        let chartData ={}
       const data = allData.map(element =>{
            let date  = new Date(element.attributes.date_echea)
            myLabel.push(date.toLocaleDateString('fr'));
            myData.push(element.attributes.valeur); 
            return element;
           })
           ///boucle pour filter les dates 
           let counter = 7;
           myLabel.map((element,index) =>{
               if(counter === 7 ){
                    myDates.push(element)
                    myYearData.push(myData[index])
                    counter =0;
                    return element;
                   
               }
               counter++;
               return element;
           } )
           myDates.push(myLabel[myLabel.length-1]);
           myYearData.push(myData[myData.length-1])  
           ///créer un clone de l'objet state 
            chartData ={
            labels:myDates,
            datasets:[{
                label:'indice',
                fill:true,
                pointRadius:0,
                borderColor:"#2C2A2A",
                data:myYearData,
            }]
    
        }
        //mettre à jour les state
           this.setState({chartData: chartData})
          return(data)
        }

        ///methode pour recuperer 1 mois 
    GetMonth(){

        let date =[];
        let data =[];
        let chartData ={}
        for (let i= 0; i<31; i++){

            date.push(myLabel[myLabel.length-31+i])
            data.push(myData[myData.length-31+i])
            chartData ={
                labels:date,
                datasets:[{
                    label:'indice',
                    fill:false,
                    pointRadius:0,
                    //backgroundColor:"#2C2A2A",
                    borderColor:"#2C2A2A",
                    data:data,
                }]
            }
       
        }   
       return(chartData)
    }    
    //methode pour recuperer les dates d'une semaine
    GetWeek(){
        let date =[];
        let data =[];
        let chartData ={}
        for (let i=0 ;i<7; i++){
            date.push(myLabel[myLabel.length-7+i])
            data.push(myData[myData.length-7+i])
            chartData ={
                labels:date,
                datasets:[{
                    label:'indice',
                    fill:false,
                    pointRadius:0,
                    //backgroundColor:"#2C2A2A",
                    borderColor:"#2C2A2A",
                    data:data,
                }]
            }
        }
       return(chartData)
    }

    componentDidMount() {
       ///recuperation des données au lancement du DOM
        this.GetChartData(); 
    }
    ///evement qui lorsque on passe d'un onglet à un autre 
    handleChange = (event, value) => {
        this.setState({ value });
        console.log(value);
        
      };
    render() {
        return (

        <div>
            <Paper>
            <Tabs 
            value={this.state.value}
            onChange={this.handleChange}
            textColor="primary"
            centered
            >
                <Tab label="Année" />
                <Tab label="Mois" />
                <Tab label="Semaine" />
            </Tabs>
            </Paper>
            {/* declenche la recuperation des données pour toute l'année */}
            {this.state.value === 0 && <Line data ={this.state.chartData}
                 options={{
                    title: {
                        display: true,
                        text: 'Indice de Pollution',
                        fontSize:30,
                    },
                       scales:{
                           yAxes:[{
                               ticks :{
                                   beginAtZero:true,
                               }
                           }]
                       }          
                }}
            />}
            {/* declenche la recuperation des données pour le mois  */}
            {this.state.value === 1 && <Line data ={this.GetMonth()} 
             options={{
                title: {
                    display: true,
                    text: 'Indice de Pollution',
                    fontSize:30,
                },
                    scales:{
                        yAxes:[{
                            ticks :{
                                beginAtZero:true,
                            }
                        }]
                    }          
                }}
            />}
            {/* declenche la recuperation des données pour la semaine*/}
            {this.state.value === 2 &&  <Line data ={this.GetWeek()} 
             options={{
                title: {
                    display: true,
                    text: 'Indice de Pollution',
                    fontSize:30,
                },
                    scales:{
                        yAxes:[{
                            ticks :{
                                beginAtZero:true,
                            }
                        }]
                    }          
                }}
            />}
      </div>
        );
    }
}

export default HistoriquePollution;