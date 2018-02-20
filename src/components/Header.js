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

  singIn = () => {
    const {login, password, userLogin, userPassword} = this.state;
    (login === userLogin.trim()) && (password === userPassword.trim()) ? this.setState({showButton: true}) : this.setState({showError: true})
      
  }

  logOut = () => {
    this.setState({
    showButton: false,
    showError: false,
    userLogin: '',
    userPassword: ''
    })

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
          	  <input type="button" id="logOut" value="Log Out" onClick={this.logOut} />
            </div>      
          ) : ( 
            <div className="inputs" id="inputs">
              <input type="text" className="header_input" id="login" placeholder="login" onChange={ (event) => this.setState({userLogin: event.target.value})} />
              <input type="password" className="header_input" id="password" placeholder="password" onChange={ (event) => this.setState({userPassword: event.target.value})} />
              <input type="button" id="singIn" className="header_input" value="Sing in" onClick={this.singIn}/>
            </div> 
          )
        }
      </header>
		)
	}
}

export default Header;