import {GET_VIDEO, GET_ADVERTISING} from './../constants/constants'
import {VideosBack, AdvertisingBack} from '../videos'

export const getVideoContent = (payload) => {
	return {
		type: GET_VIDEO,
		payload: VideosBack
	}
} 

export const getAdvertisingContent = (payload) => {
	return {
		type: GET_ADVERTISING,
		payload: AdvertisingBack
	}
}