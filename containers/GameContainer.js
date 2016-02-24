import React, { PropTypes } from 'react'
import GameListContainer from './GameListContainer'
import GameViewContainer from './GameViewContainer'

const GameContainer = React.createClass({
  render () {
    return (
      this.props.params.gameId ? <GameViewContainer gameId={this.props.params.gameId} /> : <GameListContainer />
    )
  }
})

export default GameContainer
