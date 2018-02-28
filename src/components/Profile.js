import React, { Component } from 'react';
import  { connect } from  'react-redux';
import { } from '../actions/ProfileActions';

class Header extends Component {

	setDayInSelectOption = () => {
		let option =[];
			for (let i=1; i<=31; i++) {
				option.push(<option key={i} value="{i}">{i}</option>)
        }
      return option
			}


	render() { 	
		<form>
      <label>
       Enter your name:
        <input type="text" placeholder="Name" required />
      </label>
      <label>
       Enter your surname:
        <input type="text" placeholder="Surname" required />
      </label>
      <input type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
      <label>
       Date of Birth:
        <select type="number" min="1" max="31" required >
        	{this.setDayInSelectOption()}
        </select>
        <input type="number" placeholder="month" />
        <input type="number" placeholder="year" /> 
      </label>
      <textarea cols="30" rows="10" placeholder="Some information about yourself" />
      <button>Save changes</button>
    </form>
	}

	}

	const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);