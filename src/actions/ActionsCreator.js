import { CHECK_LOGIN, SET_USER_LOGIN, SET_USER_PASSWORD } from './../constants/constants'

export const checkLogin = (payload) => {
	return {
		type: CHECK_LOGIN,
		payload
	}
} 

export const setUserLogin = (payload) => {
	return {
		type: SET_USER_LOGIN,
		payload
	}
}

export const setUserPassword = (payload) => {
	return {
		type: SET_USER_PASSWORD,
		payload
	}
}


