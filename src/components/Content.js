import React, { Component } from 'react';
import preview from '../img/preview.png';
import spiner from '../img/jstips-animation.gif'
import {history} from '../store/configureStore'
import { connect } from 'react-redux'
import { getAsyncVideo, getFilterredContent, getSortedContent, superAsyncData, showLoader } from '../actions/GetContentActions';
import {FREE, PAY} from '../constants/constants'


class Content extends Component {

	checkAccess = (item) => {
		if(item.access === 'free') {
			history.push(`/video/${item.id}`)
		}
		else if (item.access === PAY && this.props.user) {
			history.push(`/video/${item.id}`)
		}
		else { alert('Sorry, you must registerred')					
		}
	}

	renderVideoBlock = (item,index) => {
		return (
			<div className="block_video" onClick={() => {this.checkAccess(item)}} key={item.id}> 
					<p> {item.title} </p>
					<img src={preview} alt="video_block"/> 
					<div className={item.access === 'free' ? 'access_block accessColorFree' : 'access_block accessColorPay' }>{item.access} </div>
			</div>
		)
	}
	
	renderReklamaBlock = (item) => {
		return (
			<div className="block_reklama" key={item.id}>
				<img src={item.url} alt="reklama_block"/>
			</div>
			)
	}

	render() {
		let i = 0;
		return (
			<div className="Content" id="content">
				<div className="buttons">
				 	<button id="getContent" onClick={ this.props.superAsyncData} > Get content</button>
				 	<button id="filterBut" onClick={this.props.getFilterredContent}>Filter videos</button>
				 	<button id="sortBut" onClick={this.props.getSortedContent}>Sort videos</button>
				</div>
				{ this.props.loader ?
					( 
						<div id="spiner" className="spiner">
							<img src={spiner} alt='spiner' />
						</div>
					) :	(
						<div className="videoContainer">
						 {  
							this.props.video.map((elem,index) =>  {
								let div =[];								
								const videoBlock = this.renderVideoBlock(elem,index)
								div = [videoBlock]
								if((index+1)%3 === 0 && this.props.advertising.length) {
									const reklamaBlock = this.renderReklamaBlock(this.props.advertising[i])
									div.push(reklamaBlock)
									i++
								}
									return div
								})
							}
						</div>
						)
					}
				
				</div>
		);		
	}
}

const mapStateToProps = (state) => {
	return {
		video: state.video.video,
		advertising: state.advertising.advertising,
		user: state.user.isLogin,
		loader: state.loader.loader
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showLoader: () => dispatch(showLoader()),
		getAsyncVideo: () => dispatch(getAsyncVideo()),
		getFilterredContent: () => dispatch(getFilterredContent()),
		getSortedContent: () => dispatch(getSortedContent()),
		superAsyncData: () => dispatch(superAsyncData())
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)

