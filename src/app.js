import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { component } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import WeatherReport from '../components/main'
import reducers from '../reducers'

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
     <WeatherReport />
  </Provider>,
 document.getElementById('app'));
