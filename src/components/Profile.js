import React, { Component } from 'react';
import  { connect } from  'react-redux';
import {setUserName, setUserSurname, setUserDayOfBirth, setUserMonthOfBirth, setUserYearOfBirth } from '../actions/ProfileActions';
import {MONTH} from '../constants/constants'


class Profile extends Component {

	setDayInSelectOption = () => {
    let option =[];
    for (let i=1; i<32; i++) {
      option.push(<option key={i} value="{i}">{i}</option>)
    }
    return option
  }

  setMonthInSelectOption = () => { 
    let option = [];
    MONTH.map((elem,i) => {     
      option.push(<option key={i} value="{elem}">{elem}</option> )
    })
    return option
  }

  setYearInSelectOption = () => {
    let option =[];
    for (let i=2019; i>1918; i--) {
      option.push(<option key={i} value="{i}">{i}</option>)
    }
    return option
  }


	render() { 	
    return(
		<form>
      <label>
       Enter your name:
        <input type="text" placeholder="Name" onChange={ this.props.setUserName } required />
      </label>
      <label>
       Enter your surname:
        <input type="text" placeholder="Surname" onChange={ this.props.setUserSurname } required />
      </label>
      <input type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
      <label>
       Date of Birth:
        <select onChange={ this.props.setUserDayOfBirth } > {this.setDayInSelectOption()} </select>
        <select onChange={ this.props.setUserMonthOfBirth } > {this.setMonthInSelectOption()} </select>
        <select onChange={ this.props.setUserYearOfBirth } > {this.setYearInSelectOption()} </select>   
      </label>
      <textarea cols="30" rows="10" placeholder="Some information about yourself" />
      <button>Save changes</button>
    </form>
    )
	}

	}

	const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    setUserName: (e) => dispatch(setUserName(e.target.value)),
    setUserSurname: (e) => dispatch(setUserSurname(e.target.value)),
    setUserDayOfBirth: (e) => dispatch(setUserDayOfBirth(e.target.value)),
    setUserMonthOfBirth: (e) => dispatch(setUserMonthOfBirth(e.target.value)),
    setUserYearOfBirth: (e) => dispatch(setUserYearOfBirth(e.target.value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);