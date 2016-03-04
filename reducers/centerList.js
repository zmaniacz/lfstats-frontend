import * as ActionTypes from '../actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  centers: []
}

export function centerList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_CENTER_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case ActionTypes.RECEIVE_CENTER_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        centers: action.payload.centers,
        lastUpdated: action.payload.receivedAt
      })
    default:
      return state
  }
}

export default centerList
