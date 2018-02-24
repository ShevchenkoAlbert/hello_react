import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import SingleVideo from './components/SingleVideo';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as actions from './actions/ActionsCreator';
import  { connect } from  'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log('from app ', this.props)
    return (
      <div className="App">
      	<Header checkLogin={this.props.checkLogin} 
          setUserLogin={this.props.setUserLogin}
          setUserPassword={this.props.setUserPassword}
          isLogin={this.props.isLogin} />
      	<Switch>
      		<Route exact path='/' component={Content}/>
      		<Route path='/video/:index'   component= {SingleVideo} />
      	</Switch>
      		
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    video: state.video,
    advertising: state.video
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(App)

