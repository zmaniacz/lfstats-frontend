import Request from 'superagent';

export const SET_CENTER_FILTER = 'SET_CENTER_FILTER'
export const SET_EVENT_FILTER = 'SET_EVENT_FILTER'
export const SHOW_ALL = 'SHOW_ALL'

export function setCenterFilter(id) {
  return {
    type: SET_CENTER_FILTER,
    payload: {
      center_id: id
    }
  }
}

export function setEventFilter(id) {
  return {
    type: SET_EVENT_FILTER,
    payload: {
      event_id: id
    }
  }
}

export const REQUEST_GAME_LIST = 'REQUEST_GAME_LIST'
export const RECEIVE_GAME_LIST = 'RECEIVE_GAME_LIST'

function requestGameList() {
  return {
    type: REQUEST_GAME_LIST
  }
}

function receiveGameList(json) {
  return {
    type: RECEIVE_GAME_LIST,
    payload: {
      games: json.data,
      receivedAt: Date.now()
    }
  }
}

function fetchGameList() {
  return function(dispatch) {
    dispatch(requestGameList())
    return Request.get('http://lfstats.app/api/games/')
      .end(function(error, response) {
        dispatch(receiveGameList(response.body))
      })
  }
}

function shouldFetchGameList(state) {
  const gameList = state.gameList
  if(gameList.games.length === 0) {
    return true
  }

  if(gameList.isFetching) {
    return false
  }

  return gameList.didInvalidate
}

export function fetchGameListIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchGameList(getState())) {
      return dispatch(fetchGameList())
    }
  }
}
