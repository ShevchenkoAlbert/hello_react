import { SET_USER_NAME,
  SET_USER_SURNAME, 
  SET_USER_DAY_OF_BIRTH,
  SET_USER_MONTH_OF_BIRTH,
  SET_USER_YEAR_OF_BIRTH } from './../constants/constants'

export const setUserName = (payload) => {
	return {
		type: SET_USER_NAME,
		payload
	}
} 

export const setUserSurname = (payload) => {
	return {
		type: SET_USER_SURNAME,
		payload
	}
}

export const setUserDayOfBirth = (payload) => {
	return {
		type: SET_USER_DAY_OF_BIRTH,
		payload
	}
}

export const setUserMonthOfBirth = (payload) => {
	return {
		type: SET_USER_MONTH_OF_BIRTH,
		payload
	}
}

export const setUserYearOfBirth = (payload) => {
	return {
		type: SET_USER_YEAR_OF_BIRTH,
		payload
	}
}