import Request from 'superagent';

export const SET_CENTER_FILTER = 'SET_CENTER_FILTER'
export const SET_EVENT_FILTER = 'SET_EVENT_FILTER'

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

export const REQUEST_CENTER_LIST = 'REQUEST_CENTER_LIST'
export const RECEIVE_CENTER_LIST = 'RECEIVE_CENTER_LIST'

function requestCenterList() {
  return {
    type: REQUEST_CENTER_LIST
  }
}

function receiveCenterList(json) {
  return {
    type: RECEIVE_CENTER_LIST,
    payload: {
      centers: json.data,
      receivedAt: Date.now()
    }
  }
}

export function fetchCenterList() {
  return function(dispatch) {
    dispatch(requestCenterList())
    return Request.get('http://lfstats.app/api/centers')
      .end(function (error, response) {
        dispatch(receiveCenterList(response.body))
      })
  }
}

export const REQUEST_EVENT_LIST = 'REQUEST_EVENT_LIST'
export const RECEIVE_EVENT_LIST = 'RECEIVE_EVENT_LIST'

function requestEventList() {
  return {
    type: REQUEST_EVENT_LIST
  }
}

function receiveEventList(json) {
  return {
    type: RECEIVE_EVENT_LIST,
    payload: {
      events: json.data,
      receivedAt: Date.now()
    }
  }
}

export function fetchEventList() {
  return function(dispatch) {
    dispatch(requestEventList())
    return Request.get('http://lfstats.app/api/events')
      .end(function (error, response) {
        dispatch(receiveEventList(response.body))
      })
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
    return Request.get('http://lfstats.app/api/games/?include=event.center')
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
