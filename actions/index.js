import Request from 'superagent';
import Config from 'Config';

export const SET_CENTER_FILTER = 'SET_CENTER_FILTER'
export const SET_EVENT_TYPE_FILTER = 'SET_EVENT_TYPE_FILTER'
export const SET_EVENT_FILTER = 'SET_EVENT_FILTER'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_SOCIAL_EVENTS = 'SHOW_SOCIAL_EVENTS'
export const SHOW_LEAGUE_EVENTS = 'SHOW_LEAGUE_EVENTS'
export const SHOW_TOURNAMENT_EVENTS = 'SHOW_TOURNAMENT_EVENTS'

export function setCenterFilter(filter) {
  return {
    type: SET_CENTER_FILTER,
    payload: {
      filter: filter
    }
  }
}

export function setEventTypeFilter(filter) {
  return {
    type: SET_EVENT_TYPE_FILTER,
    payload: {
      filter: filter
    }
  }
}

export function setEventFilter(filter) {
  return {
    type: SET_EVENT_FILTER,
    payload: {
      filter: filter
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
    return Request.get(Config.serverUrl+'centers')
      .end(function (error, response) {
        dispatch(receiveCenterList(response.body))
      })
  }
}

function shouldFetchCenterList(state) {
  const centerList = state.centerList
  if(centerList.centers.length === 0) {
    return true
  }

  if(centerList.isFetching) {
    return false
  }

  return centerList.didInvalidate
}

export function fetchCenterListIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchCenterList(getState())) {
      return dispatch(fetchCenterList())
    }
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
    return Request.get(Config.serverUrl+'events')
      .end(function (error, response) {
        dispatch(receiveEventList(response.body))
      })
  }
}

function shouldFetchEventList(state) {
  const eventList = state.eventList
  if(eventList.events.length === 0) {
    return true
  }

  if(eventList.isFetching) {
    return false
  }

  return eventList.didInvalidate
}

export function fetchEventListIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchEventList(getState())) {
      return dispatch(fetchEventList())
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
    return Request.get(Config.serverUrl+'games/?include=event,center')
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

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'

export function setCurrentUser(json) {
  return {
    type: SET_CURRENT_USER,
    payload: json
  }
}

export function clearCurrentUser() {
  return {
    type: CLEAR_CURRENT_USER
  }
}

