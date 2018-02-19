import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import {VideosBack, AdvertisingBack} from './videos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content videos={VideosBack} reklama={AdvertisingBack} />
      </div>
    );
  }
}

export default App;
