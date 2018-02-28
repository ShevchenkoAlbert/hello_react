import React from 'react';
import { Route, Switch} from 'react-router-dom'
import App from './App'
import SingleVideo from './components/SingleVideo'


const Routes = (props) => {
	return (
  		<Switch>
  			<Route path = '/' component = {App} />
  			<Route path = '/videos/:index' component={SingleVideo} />
  		</Switch>
	)
}

export default Routes