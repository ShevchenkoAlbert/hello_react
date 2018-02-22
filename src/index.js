import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory()
console.log(history)

ReactDOM.render((
	    	// <Route  exact path="/" component={Header} />
	    	// <Route path="/:index" component={SingleVideo} />
  <Router history={history}>
	  <div> 
	    <Route component={App} />
	  </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
