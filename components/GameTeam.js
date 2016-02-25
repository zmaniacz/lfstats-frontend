import React, { PropTypes } from 'react'

const GameTeam = React.createClass({
  render () {
    return (
      <div>{this.props.team.id}</div>
    )
  }
})

export default GameTeam
