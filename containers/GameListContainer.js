import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ActionTypes from '../actions'
import GameList from '../components/GameList'

const GameListContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchGameList } = this.props
    dispatch(ActionTypes.fetchGameListIfNeeded())
  },
  render () {
    if(this.props.isFetching || this.props.games.length === 0) {
      var output = <h1>Loading...</h1>
    } else {
      const centerFilter = this.props.contextFilters.centerFilter.filter
      const eventFilter = this.props.contextFilters.eventFilter.filter

      var filteredGames = this.props.games

      if(centerFilter != ActionTypes.SHOW_ALL) {
        filteredGames = filteredGames.filter((game) => {
          return (game.event.data.center.data.id == centerFilter)
        })
      }

      if(eventFilter != ActionTypes.SHOW_ALL) {
        filteredGames = filteredGames.filter((game) => {
          switch (eventFilter) {
            case ActionTypes.SHOW_LEAGUE_EVENTS:
              return (game.event.data.type == 'league')
            case ActionTypes.SHOW_SOCIAL_EVENTS:
              return (game.event.data.type == 'social')
            case ActionTypes.SHOW_TOURNAMENT_EVENTS:
              return (game.event.data.type == 'tournament')
            default:
              return (game.event.data.id == eventFilter)
          }
        })
      }

      var output = <GameList games={filteredGames} />
    }
    return (
      <div>
        {output}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  const { gameList, contextFilters } = state
  return {
    isFetching: gameList.isFetching,
    games: gameList.games,
    contextFilters: contextFilters
  }
}

export default connect(mapStateToProps)(GameListContainer)
