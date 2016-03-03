import * as ActionTypes from '../actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  games: []
}

export function gameList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_GAME_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case ActionTypes.RECEIVE_GAME_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        games: action.payload.games,
        lastUpdated: action.payload.receivedAt
      })
    default:
      return state
  }
}

export default gameList
