import * as ActionTypes from '../actions'

const initialState = {
  event_id: ActionTypes.SHOW_ALL
}

function eventFilter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_EVENT_FILTER:
      return Object.assign({}, state, {
        event_id: action.payload.event_id
      })
    default:
        return state
  }
}

export default eventFilter
