import { combineReducers } from 'redux'
import contextFilters from './contextFilters'
import centerList from './centerList'
import gameList from './gameList'

const rootReducer = combineReducers({
  contextFilters,
  centerList,
  gameList
})

export default rootReducer
