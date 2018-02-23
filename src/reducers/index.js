
import { combineReducers } from 'redux'
import video from './video'
import advertising from './advertising'
import user from './user'

export default combineReducers({
  video,
  advertising,
  user
})