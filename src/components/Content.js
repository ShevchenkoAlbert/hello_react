import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import preview from './../img/preview.png';
import spiner from './../img/jstips-animation.gif'
import {VideosBack} from './../videos';
import {AdvertisingBack} from './../videos'

const FREE = 'free';
const PAY = 'pay';
let sortAccess = FREE;
let access = FREE

class Content extends Component {
  state = {
    videos: [],
    advertising: [],
    showSpiner: false
  }


  renderVideoBlock = (item,index) => {
		return (
			<div className="block_video" key={item.id}> 
        <Link to={`/video/${item.id}`}>
				  <p> {item.title} </p>
          <img src={preview} alt="video_block"/> 
				  <div className={item.access === 'free' ? 'access_block accessColorFree' : 'access_block accessColorPay' }>{item.access} </div>
			  </Link>
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

  getContent = () => {
    this.setState({showSpiner: true})
    new Promise((resolve, reject) => {
      setTimeout(function(){
        let data = [VideosBack, AdvertisingBack]
        resolve(data);
        
      }, 1500);
    }).then((data) =>{
        let VideosBack = data[0];
        let AdvertisingBack = data[1];
        this.setState({videos: VideosBack, advertising: AdvertisingBack, showSpiner: false})}
    )
  }

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
  

  render() {
    let i = 0;
    return (
      <div className="Content" id="content">
        <div className="buttons">
			   <button id="getContent" onClick={this.getContent}>Get content</button>
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
              this.state.videos.map((elem,index) =>  {
                let div =[];
                const videoBlock = this.renderVideoBlock(elem,index)
                div = [videoBlock]
                if((index+1)%3 === 0) {
                  const reklamaBlock = this.renderReklamaBlock(this.state.advertising[i])
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

export default Content;

