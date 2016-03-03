import { combineReducers } from 'redux'
import contextFilters from './contextFilters'
import gameList from './gameList'

const rootReducer = combineReducers({
  contextFilters,
  gameList
})

export default rootReducer
