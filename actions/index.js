import axios from 'axios';
import CountryCode from'../data/country';
import Dialog from 'material-ui/Dialog';
const API_KEY = '6609d5d87fef30f6adb75204b9e9ff23';

const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const countryList ='https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json'

const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, CountryCode) {
    const url = `${Root_URL}&q=${city},${CountryCode}`;
    const request = axios.get(url)
      

    return {
        type:'FETCH_WEATHER',
        payload: request
    }
    
}