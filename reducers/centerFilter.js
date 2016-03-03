import * as ActionTypes from '../actions'

const initialState = {
  center_id: ActionTypes.SHOW_ALL
}

function centerFilter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CENTER_FILTER:
      return Object.assign({}, state, {
        center_id: action.payload.center_id
      })
    default:
        return state
  }
}

export default centerFilter
