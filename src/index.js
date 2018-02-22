import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SingleVideo from './components/SingleVideo'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <Router>
   <div> 
    	<Route exact path="/" component={App} />
    	<Route path="/video/:index" component={SingleVideo} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
