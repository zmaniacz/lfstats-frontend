import { combineReducers } from 'redux'
import centerFilter from './centerFilter'
import eventTypeFilter from './eventTypeFilter'
import eventFilter from './eventFilter'

const contextFilters = combineReducers({
  centerFilter,
  eventTypeFilter,
  eventFilter
})

export default contextFilters
