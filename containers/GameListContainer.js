import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchGameListIfNeeded} from '../actions'
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
      var output = <GameList games={this.props.games} />
    }
    return (
      <div>
        {output}
      </div>
    )
  }
})

export default GameListContainer

const mapStateToProps = (state) => {
  const { gameList } = state
  return {
    isFetching: gameList.isFetching,
    games: gameList.games
  }
}

export default connect(mapStateToProps)(GameListContainer)
