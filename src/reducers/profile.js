import { SET_USER_NAME,
  SET_USER_SURNAME, 
  SET_USER_DAY_OF_BIRTH,
  SET_USER_MONTH_OF_BIRTH,
  SET_USER_YEAR_OF_BIRTH } from './../constants/constants'

const initialState = {
	name: null,
	surname: null,
	day: 0,
	month: 0,
	year: 0
}

export default  (state = initialState, action) => { 
	switch (action.type) {
		case SET_USER_NAME: {
			return {...state, name: action.payload}
		}
		case SET_USER_SURNAME: {
			return {...state, surname: action.payload}
		}
		case SET_USER_DAY_OF_BIRTH: {
			return {...state, day: action.payload}
		}

		case SET_USER_MONTH_OF_BIRTH: {
			return {...state, month: action.payload}
		}
		case SET_USER_YEAR_OF_BIRTH: {
			return {...state, year: action.payload}
		}
		default: 
			return state
	}
}

