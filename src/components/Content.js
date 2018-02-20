import React, { Component } from 'react';
import preview from './../img/preview.png'

class Content extends Component {
  renderVideoBlock = (item,index) => {
  		console.log(item.preview)
		return (
			<div className="block_video" key={index}> 
				<p> {item.title} </p>
				<img src={preview} /> 
				<div className={item.access === 'free' ? 'access_block accessColorFree' : 'access_block accessColorPay' }>{item.access} </div>
			</div>
		)
	}
  
  renderReklamaBlock(item) {
  	return (
  		<div className="block_reklama" key={item.id}>
  			<img src={item.url} />
  		</div>
  		)
  }

  getContentArray = (videos, reklama) => {
  	const reklama_block = this.props.reklama;
  	const lol = this.props.videos
  	const foo = lol.filter((item,index) => {

  		if( (index+1)%3 ===0) {
  			// return item = reklama_block.map( elem => elem)[0]
  			console.log('asdasdadasda', index)
  		}
  		return item

	  })
  	console.log(foo);

  }

  render() {

    return (
      <div className="Content" id="content">
		<div className="buttons">
			<button id="getContent">Get content</button>
			<button id="filterBut">Filter videos</button>
			<button id="sortBut" onClick={this.getContentArray} >Sort videos</button>
		</div>
		<div className="videoContainer">
			{
				this.props.videos.map((elem,index) =>  this.renderVideoBlock(elem,index))
			}


		</div>
      </div>
    );
			// {reklamaContain}
  }
}

export default Content;

