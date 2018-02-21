import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {VideosBack} from './../videos';

class SingleVideo extends Component {
  render() {
  	console.log(VideosBack)
  	return (
  		<div className="title">
          <h1>Тут будет видео на которое ты кликнул и обрати внимание на роуты)</h1>
          <Link to="/"><button>Вернутся назад</button></Link>
      </div>
  	);
  }
}

export default SingleVideo