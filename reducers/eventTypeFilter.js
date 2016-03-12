import * as ActionTypes from '../actions'

const initialState = {
  filter: ActionTypes.SHOW_ALL
}

function eventTypeFilter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_EVENT_TYPE_FILTER:
      return Object.assign({}, state, {
        filter: action.payload.filter
      })
    default:
        return state
  }
}

export default eventTypeFilter
