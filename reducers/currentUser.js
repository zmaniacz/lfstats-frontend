import * as ActionTypes from '../actions'

const initialState = {
  name: null,
  id: null
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return Object.assign({}, state, {
        name: action.payload.name,
        id: action.payload.id
      })
    case ActionTypes.CLEAR_CURRENT_USER:
      return Object.assign({}, state, {
          name: null,
          id: null
      })
    default:
        return state
  }
}

export default currentUser
