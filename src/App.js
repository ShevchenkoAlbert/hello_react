import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import SingleVideo from './components/SingleVideo';
import { Route, Switch } from 'react-router-dom';
import  { connect } from  'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<Switch>
      		<Route exact path='/' component={Content}/>
      		<Route path='/video/:index'   component= {SingleVideo} />
      	</Switch>
      		
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  user: state.user,
  video: state.video,
  advertising: state.video
 }
}
export default connect(mapStateToProps)(App)

