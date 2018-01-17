import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import repos from './repos'

export default combineReducers({
  routing: routerReducer,
  repos
})