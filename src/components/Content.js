import React, { Component } from 'react';
import preview from '../img/preview.png';
import spiner from '../img/jstips-animation.gif'
import {VideosBack} from '../videos';
import {AdvertisingBack} from './../videos'
import {history} from '../store/configureStore'
import { connect } from 'react-redux'
import {getVideoContent, getAdvertisingContent} from '../actions/GetContentActions';

const FREE = 'free';
const PAY = 'pay';
let sortAccess = FREE;
let access = FREE;

class Content extends Component {

	state = {
		showSpiner: false
	}

	checkAccess = (item) => {
		if(item.access === 'free') {
			history.push(`/video/${item.id}`)
		}
		else if (item.access === 'pay' && localStorage.isLogin === 'true') {
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

	// getContent = () => {
	// 	this.setState({showSpiner: true})
	// 	new Promise((resolve, reject) => {
	// 		setTimeout(function(){
	// 			let data = [VideosBack, AdvertisingBack]
	// 			resolve(data);
				
	// 		},1000);
	// 	}).then((data) =>{
	// 			let VideosBack = data[0];
	// 			let AdvertisingBack = data[1];
	// 			this.setState({videos: VideosBack, advertising: AdvertisingBack, showSpiner: false})}
	// 	)
	// }

	getFilterredContent = () => {
		const filterArray = VideosBack.filter((video) => video.access === access)
		this.setState({videos: filterArray, advertising: AdvertisingBack})
		access = access === PAY ? FREE : PAY;
	}

	sortVideo = (videoA, videoB) => {
		if (videoA.access === sortAccess) return 1
		else if (videoB.access === sortAccess) return -1
		else return 0
	}

	getSortedContent = () => {
		const sortArray = VideosBack.map((elem) => elem).sort(this.sortVideo)
		this.setState({videos: sortArray, advertising: AdvertisingBack})
		sortAccess = sortAccess === PAY ? FREE : PAY;
	}
	receiveAllContent = () => {
		this.props.getVideoContent()
		this.props.getAdvertisingContent()
	}

	render() {
		let i = 0;
		
		return (
			<div className="Content" id="content">
				<div className="buttons">
				 <button id="getContent" onClick={ this.receiveAllContent} > Get content</button>
				 <button id="filterBut" onClick={this.getFilterredContent}>Filter videos</button>
				 <button id="sortBut" onClick={this.getSortedContent}>Sort videos</button>
				</div>
				{ this.state.showSpiner ? 
					( 
						<div id="spiner" className="spiner">
							<img src={spiner} alt='spiner' />
						</div>
					) : (
						<div className="videoContainer">
						 {  
							this.props.video.map((elem,index) =>  {
								// debugger
								let div =[];
								
								const videoBlock = this.renderVideoBlock(elem,index)
								div = [videoBlock]
								if((index+1)%3 === 0) {
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
		advertising: state.advertising.advertising
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getVideoContent: () => dispatch(getVideoContent()),
		getAdvertisingContent: () => dispatch(getAdvertisingContent())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)

