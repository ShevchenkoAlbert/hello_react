import React, { Component } from 'react';
import logo from '../img/logo.png';
import {checkLogin, setUserLogin, setUserPassword, logOut} from './../actions/UserActions';
import  { connect } from  'react-redux';
import { Link} from 'react-router-dom'



class Header extends Component {
	render() {
	console.log(this.props)

		return (
			<header>
				<div className="logo_div">
					<img src={logo} alt="logo"/>
						<span id="loggedUser"> 
							{
								(this.props.user.isLogin === true) ? `Hello, ${this.props.user.name}` : 'Hello, guest' 
							}
						</span>
						<Link to='/userProfile'> Edit profile </Link> 
				</div>
				{
					this.props.user.isLogin ? 
					(
						<div className="inputs" id="inputs">
							<button id="logOut" onClick={this.props.logOut} > Log Out</button>
						</div>      
					) : ( 
						<div className="inputs" id="inputs">
							<input type="text" className="header_input" id="login" placeholder="login" onChange={ this.props.setUserLogin }/>
							<input type="password" className="header_input" id="password" placeholder="password" onChange={ this.props.setUserPassword } />
							<button id="singIn" className="header_input" onClick={ this.props.checkLogin }> Sing in </button>
						</div> 
					)
				}
			</header>
		)
	}
}

const mapStateToProps = (state) => {

  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkLogin: () => dispatch(checkLogin()),
		setUserLogin: (e) => dispatch(setUserLogin(e.target.value)),
		setUserPassword: (e) => dispatch(setUserPassword(e.target.value)),
		logOut: () => dispatch(logOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);