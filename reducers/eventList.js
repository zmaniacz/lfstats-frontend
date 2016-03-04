import * as ActionTypes from '../actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  events: []
}

export function eventList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_EVENT_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case ActionTypes.RECEIVE_EVENT_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        events: action.payload.events,
        lastUpdated: action.payload.receivedAt
      })
    default:
      return state
  }
}

export default eventList
