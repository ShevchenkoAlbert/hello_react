import {CHECK_LOGIN, SET_USER_LOGIN, SET_USER_PASSWORD} from './../constants/constants'

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
			console.log(check)
			return {...state}
		}
		case SET_USER_LOGIN: {
			console.log('new action', action)
			return {...state, name: action.payload}
		}
		case SET_USER_PASSWORD: {
			return {...state, pass: action.payload}
		}
		default: 
			return state
	}
}
