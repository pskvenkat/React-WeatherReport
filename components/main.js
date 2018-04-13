import React, { component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../container/searchBar'
import Header from './header';
import WeatherList from '../container/weather_list'

export default  class WeatherReport extends React.Component {
    render () {
        return (
            
            <MuiThemeProvider>
                <section>
                    <Header />
                    <SearchBar />
                    <WeatherList />
                </section>
            </MuiThemeProvider>
            
        )
    }
}