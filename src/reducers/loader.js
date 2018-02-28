import { SHOW_LOADER } from '../constants/constants'

const initialState = {
	loader: false

}

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER: {
			return {...state, loader: action.payload}
		}
	default:
		return state	
	}
} 
