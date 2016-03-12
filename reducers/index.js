import { combineReducers } from 'redux'
import currentUser from './currentuser'
import contextFilters from './contextFilters'
import centerList from './centerList'
import eventList from './eventList'
import gameList from './gameList'

const rootReducer = combineReducers({
  currentUser,
  contextFilters,
  centerList,
  eventList,
  gameList
})

export default rootReducer
