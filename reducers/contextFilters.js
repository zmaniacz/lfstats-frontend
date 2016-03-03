import { combineReducers } from 'redux'
import centerFilter from './centerFilter'
import eventFilter from './eventFilter'

const contextFilters = combineReducers({
  centerFilter,
  eventFilter
})

export default contextFilters
