
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux' 
import rootReducer from '../reducers'
import logger from 'redux-logger'

export const history = createBrowserHistory();

export const store = createStore(
  	rootReducer, 
    applyMiddleware(
      logger,
      routerMiddleware(history)
      )
  	)
