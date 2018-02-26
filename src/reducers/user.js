import {CHECK_LOGIN, SET_USER_LOGIN, SET_USER_PASSWORD, LOG_OUT} from './../constants/constants'

const initialState = {
	name: null,
	pass: null,
	error: null,
	login: 'admin',
	password: 'admin',
	isLogin: false
}

export default  (state = initialState, action) => { 
	switch (action.type) {
		case CHECK_LOGIN: {
			const check = state.login === state.name && state.password === state.pass
			return {...state, isLogin: check}
		}
		case SET_USER_LOGIN: {
			return {...state, name: action.payload}
		}
		case SET_USER_PASSWORD: {
			return {...state, pass: action.payload}
		}

		case LOG_OUT: {
			return {...state, isLogin: false}
		}
		default: 
			return state
	}
}
