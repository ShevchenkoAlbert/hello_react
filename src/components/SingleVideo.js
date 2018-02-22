import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {VideosBack} from './../videos';
import './singleVideoStyle.css'

class SingleVideo extends Component {
	getQueryVariable = () => {
   const query = window.location.pathname;
   const pair = query.split('/');
   const index = Number(pair[pair.length-1]);
   return index;    
	}

  state ={
    showFullDescription: false 
  }

  showDescription = () => {
    this.setState({showFullDescription: true })
  }

  hideDescription = () => {
    this.setState({showFullDescription: false})
  }


  render() {
  	const index = this.getQueryVariable()-1;
  	const video = VideosBack[index];
  	console.log(video.url)
  	return (
  		<div>
       	<div className="row">
       		<div className="videoFrame" id="video">
       				<iframe id="ytplayer" type="text/html" src={video.src} frameBorder="0" allowFullScreen />
       		</div>
					<div className="aside" id="aside">
						<p>{video.title}</p>
						<p>genre: {video.genre}</p>
						<p>year: {video.year}</p>
						<p>time: {video.time}</p>
					</div>
				</div>
				<div className="descriptionBlock" >
          {
            this.state.showFullDescription ? 
            (
              <div id="largeDescription">
                <p> {video.largeDescription}</p>
                <button onClick={this.hideDescription}> Hide description </button>
              </div>

            ) : (
              <div id="shortDescription">
                <p> {video.shortDescription} </p>
                <button onClick={this.showDescription}> Read more </button> 
              </div>)
          }
        </div>
        <div className="row back"> 
        	<Link to="/">
        		<button>Вернутся назад</button>
        	</Link>
        </div>
      </div>
  	);
  }
}

export default SingleVideo


