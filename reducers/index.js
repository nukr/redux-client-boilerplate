import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos,
  routing: routeReducer
})

export default rootReducer
