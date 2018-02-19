import React, { Component } from 'react';

class Content extends Component {
  renderVideoBlock(item,index){
		return (
			<div className="block_video" key={index}> 
				<p> {item.title} </p>
				<img src={item.preview} /> 
				<div className="access_block">{item.access} </div>
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

  render() {

	let videoContain = this.props.videos.map((item,index) => {
		return (

			<div className="block_video" key={index}> 
				<p> {item.title} </p>
				<img src={item.preview} /> 
				<div className="access_block">{item.access} </div>
			</div>
			)
	})

	let reklamaContain = this.props.reklama.map((item) => {
		return (
			<div className="block_reklama" key={item.id}>
				<img src={item.url} />
			</div>
			)
	})
    return (
      <div className="Content" id="content">
		<div className="buttons">
			<button id="getContent">Get content</button>
			<button id="filterBut">Filter videos</button>
			<button id="sortBut">Sort videos</button>
		</div>
		<div id="content" className="videoContainer">
			{
				this.props.videos.map((item,index) => {
					// debugger
			
						if ((index+1)%3 === 0) { 
							return this.renderReklamaBlock(this.props.reklama)}
						else	return this.renderVideoBlock(item, index)
					
				})
			}


		</div>
      </div>
    );
			// {reklamaContain}
  }
}

export default Content;

