import React, { Component } from 'react';
import logo from '../img/logo.png'
	


class Header extends Component {
	state = {
		showButton: false,
		showError: false,
		login: 'admin',
		password: 'admin',
		userLogin: '',
		userPassword: ''
	}

 setAccess = () => {
		localStorage.setItem('isLogin', true) 
	}


	singIn = () => {
		const {login, password, userLogin, userPassword} = this.state;
		if (login === userLogin.trim() && password === userPassword.trim()) {
			this.setState({showButton: true}) 
			this.setAccess()
		}  
		else  {
			this.setState({showError: true})
			alert('Uncorrect login or password. Try again')
		}
			
	}

	logOut = () => {
		this.setState({
		showButton: false,
		showError: false,
		userLogin: '',
		userPassword: ''
		})
		localStorage.setItem('isLogin', false)

	}

	render() {
		return (
			<header>
				<div className="logo_div">
					<img src={logo} alt="logo"/>
						<span id="loggedUser"> 
							{
								(this.state.showButton === true) && (this.state.userLogin !== '') ? `Hello, ${this.state.userLogin}` : 'Hello, guest' 
							}
						</span>
				</div>
				{
					this.state.showButton ? 
					(
						<div className="inputs" id="inputs">
							<button id="logOut" onClick={this.logOut} > Log Out</button>
						</div>      
					) : ( 
						<div className="inputs" id="inputs">
							<input type="text" className="header_input" id="login" placeholder="login" onChange={ (event) => this.setState({userLogin: event.target.value})} />
							<input type="password" className="header_input" id="password" placeholder="password" onChange={ (event) => this.setState({userPassword: event.target.value})} />
							<button id="singIn" className="header_input" onClick={this.singIn}> Sing in </button>
						</div> 
					)
				}
			</header>
		)
	}
}

export default Header;