import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import	{	Provider	}	from	'react-redux'
import configureStore from './store/configureStore'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory()
const	store	=	configureStore();
console.log(store)

ReactDOM.render((
	<Provider store={store}>
  	<Router history={history}>
	  	<div> 
	    	<Route component={App} />
	  	</div>
  	</Router>
  </Provider>
), document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./App', () => {
		ReactDOM.render((
			<Provider store={store}>
  			<Router history={history}>
	  			<div> 
	    			<Route component={App} />
	  			</div>
  			</Router>
  		</Provider>
		), document.getElementById('root'))
	})
}
registerServiceWorker();