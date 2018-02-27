import {GET_VIDEO, GET_ADVERTISING, FREE, PAY } from './../constants/constants'
import {VideosBack, AdvertisingBack} from '../videos'

let access = FREE;
let sortAccess = FREE;

export const getVideoContent = (payload) => {
	return {
		type: GET_VIDEO,
		payload
	}
} 

export const getAdvertisingContent = (payload) => {
	return {
		type: GET_ADVERTISING,
		payload
	}
}

export const getAsyncVideo = () => dispatch => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			let data = [VideosBack, AdvertisingBack]
			resolve(data)
		}, 1500)
	}).then((data) => {
			dispatch(getAdvertisingContent(data[1]))
			dispatch(getVideoContent(data[0]));
		})
	.catch((err) => {
		debugger
	})
}

export const getFilterredContent = () => dispatch => {
	new Promise((resolve, reject) => {
		setTimeout(()=> {
    	let filterVideoContent = VideosBack.filter((elem) => elem.access === access)
    	access = access === PAY ? FREE : PAY;
    	let data = [filterVideoContent, AdvertisingBack]
    	resolve(data)
		},1000)
	}).then((data) => {
		dispatch(getAdvertisingContent(data[1]))
		dispatch(getVideoContent(data[0]));
	})
}

export const getSortedContent = () => dispatch => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const sortVideo = (videoA, videoB) => {
				if (videoA.access === sortAccess) return 1
				else if (videoB.access === sortAccess) return -1
				else return 0
			}

			let sortedVideoContent = VideosBack.map((elem) => elem).sort(sortVideo)
			sortAccess = sortAccess === PAY ? FREE : PAY;
			let data = [sortedVideoContent, AdvertisingBack]
			resolve(data)
		},1000)
	}).then((data) => {
		dispatch(getAdvertisingContent(data[1]))
		dispatch(getVideoContent(data[0]));
	})
}