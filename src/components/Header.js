import React, { Component } from 'react';
import logo from '../img/logo.png'
	


class Header extends Component {
	render() {
		console.log('user', this.props.user)
		return (
			<header>
				<div className="logo_div">
					<img src={logo} alt="logo"/>
						<span id="loggedUser"> 
							{
								(this.props.user.isLogin === true) ? `Hello, ${this.props.user.name}` : 'Hello, guest' 
							}
						</span>
				</div>
				{
					this.props.user.isLogin ? 
					(
						<div className="inputs" id="inputs">
							<button id="logOut" onClick={this.props.logOut} > Log Out</button>
						</div>      
					) : ( 
						<div className="inputs" id="inputs">
							<input type="text" className="header_input" id="login" placeholder="login" onChange={ (event) => this.props.setUserLogin(event.target.value) }/>
							<input type="password" className="header_input" id="password" placeholder="password" onChange={ (event) => this.props.setUserPassword(event.target.value) } />
							<button id="singIn" className="header_input" onClick={this.props.checkLogin}> Sing in </button>
						</div> 
					)
				}
			</header>
		)
	}
}

export default Header;