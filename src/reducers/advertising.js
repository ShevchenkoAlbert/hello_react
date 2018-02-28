import {GET_ADVERTISING} from '../constants/constants'


const initialState = {
	advertising: [],
	error: null,
	isLoading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ADVERTISING: {
			return {...state, advertising: action.payload, isLoading: true}
		}

	default:
		return state	
	}
}
