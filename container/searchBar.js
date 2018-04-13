import React, { component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SearchBox from 'material-ui-search-bar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
    margin: 12,
    customWidth: {
        width: 200,
      },
  };

class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {term :''}
        
        this.inputChangeEvent = this.inputChangeEvent.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    inputChangeEvent (event) {
        this.setState({term : event.target.value})
    }

    onFormSubmit (e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''})
    }

    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
            <DropDownMenu 
            value={this.state.value} 
            onChange={this.handleChange}
            >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu> 
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