import { GET_VIDEO} from '../constants/constants'

const initialState = {
	video: [],
	error: null,
	isLoading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEO: {
			return {...state, video: action.payload, isLoading: true}
		}
	default:
		return state	
	}
} 
