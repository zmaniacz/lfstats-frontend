import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchGameListIfNeeded } from '../actions'
import GameList from '../components/GameList'

const GameListContainer = React.createClass({
  componentDidMount() {
    const { dispatch, fetchGameList } = this.props
    dispatch(fetchGameListIfNeeded())
  },
  render () {
    if(this.props.isFetching || this.props.games.length === 0) {
      var output = <h1>Loading...</h1>
    } else {
      const center_id = this.props.contextFilters.centerFilter.center_id
      const event_id = this.props.contextFilters.eventFilter.event_id

      if(center_id > 0 || event_id > 0) {
        var filteredGames = this.props.games.filter((game) => {
          return ((center_id > 0 ? game.event.data.center.data.id == center_id : true) && (event_id > 0 ? game.event.data.id == event_id : true))
        })
        var output = <GameList games={filteredGames} />
      } else {
        var output = <GameList games={this.props.games} />
      }
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
