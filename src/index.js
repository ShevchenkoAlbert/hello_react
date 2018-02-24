import React from 'react';
import ReactDOM from 'react-dom';
import	{	Provider	}	from	'react-redux'
import { store, history }  from './store/configureStore'
import { Router } from 'react-router-dom'
import './index.css';
import Routes from './router'

ReactDOM.render((
	<Provider store={store}>
  	<Router history={history}>
	    <Routes />
  	</Router>
  </Provider>
), document.getElementById('root'));
