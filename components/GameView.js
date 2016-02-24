import React, { PropTypes } from 'react'

const GameView = React.createClass({
  render () {
    return (
      <div>{this.props.game.id}</div>
    )
  }
})

export default GameView
