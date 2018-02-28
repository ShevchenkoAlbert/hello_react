
import { combineReducers } from 'redux'
import video from './video'
import advertising from './advertising'
import user from './user'
import loader from './loader'
import profile from './profile'

export default combineReducers({
  video,
  advertising,
  user,
  loader,
  profile
})