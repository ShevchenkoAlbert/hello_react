import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import SingleVideo from './components/SingleVideo';
import Profile from './components/Profile';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<Switch>
      		<Route exact path='/'  component={Content}
          />
          <Route path='/userProfile' component= {Profile} />
      		<Route path='/video/:index'   component= {SingleVideo} />
      	</Switch>
      		
      </div>
    );
  }
}

export default App

