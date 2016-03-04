import { combineReducers } from 'redux'
import contextFilters from './contextFilters'
import centerList from './centerList'
import eventList from './eventList'
import gameList from './gameList'

const rootReducer = combineReducers({
  contextFilters,
  centerList,
  eventList,
  gameList
})

export default rootReducer
