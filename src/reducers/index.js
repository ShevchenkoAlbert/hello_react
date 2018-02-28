
import { combineReducers } from 'redux'
import video from './video'
import advertising from './advertising'
import user from './user'
import loader from './loader'

export default combineReducers({
  video,
  advertising,
  user,
  loader
})