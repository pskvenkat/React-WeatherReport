import React, { component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SearchBox from 'material-ui-search-bar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';

const style = {
    margin: 12,
    customWidth: {
        width: 300,
      },
  };

class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            term :'',
            country:[],
            countryCode:'',
            dialogopen: false,
        }
        
        this.inputChangeEvent = this.inputChangeEvent.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this)
    }

    componentDidMount() {
        fetch('http://country.io/names.json')
            .then(response => {
                return response.json();
            }).then(data => {
          
            this.setState({
                country: data
            });
        });
    }

     
    inputChangeEvent (event) {
        this.setState({term : event.target.value})
    }

    handleChange(item) {
        console.log(item.target.value)
        this.setState({countryCode:item.target.value})
    }
    onFormSubmit (e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term, this.state.countryCode);
        this.setState({term : ''})
    }

    onErrorSubmit(erroCode) {
       alert(code);
        //return erroCode
    }

    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
    

    render () {
         let country = this.state.country;
         let optionItems = Object.keys(country).map((countryList) =>
                <option value={countryList} key={countryList}>{country[countryList]}</option>
               // <MenuItem key={countryList} value={countryList} primaryText={country[countryList]} />
            );

        return (
            <form className="input-group" onSubmit={this.onFormSubmit} value={this.state.country.length}>
            <span className="country_list"> Country : </span>
            <div className="country_select">
                <select className="mdl-selectfield__select" onChange={this.handleChange}>
                    <option>Select the Country</option>
                    {optionItems}
                </select>
            </div>
            <TextField 
               hintText="Search the City"  
               value = {this.state.term}
               onChange={this.inputChangeEvent}
               style={style.customWidth}
            />
        
            <span>
                <RaisedButton type="submit" label="Search" secondary={true} style={style} />
            </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)