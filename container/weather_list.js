import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts'
import MyMapComponent from '../components/google_map';
import Dialog from 'material-ui/Dialog';


class WeatherList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            dialogopen: false,
        }
    }
    getWeather (data) {
        const temp = data.list.map(weather => weather.main.temp);
        const minTemp = data.list.map(mintemp => mintemp.main.temp_min);
        const maxTemp = data.list.map(maxtemp => maxtemp.main.temp_max);
        const {lat, lon} = data.city.coord;
        const population = data.city.population;
       
        return (
            <div key={data.city.id} className="result_heading">
            <div  className="table_row">
                <MyMapComponent 
                lat={lat} 
                lon={lon}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfW6kN66wZbJdRFIBVVFj8bUH3st0EQjw"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            <div className="temp_graph">
                <div>
                    <div className="my_graph">
                        <Chart data={temp} mintemp={minTemp} maxtemp={maxTemp} color="blue" />
                    </div>
                    <div>
                        
                    </div>
               </div>
            </div>

            <div className="pop_table_row">
                {population}
            </div>
            
        </div>

        )
    }
    render(){
        return (
            <section className="weather_list"> 
                <div className ="header_row">
                    <div className="row_heading">City</div>
                    <div className="row_heading">Temprature</div>
                    <div className="pop_heading">Population</div>
                    
                </div>
                <div>
                    {this.props.weather.map(this.getWeather)}
                </div>
            </section>
        )
    }
}

function mapStateToProps (state) {
   // console.log("reducer", state)
    return { weather: state.weather }
}
export default connect (mapStateToProps)(WeatherList);