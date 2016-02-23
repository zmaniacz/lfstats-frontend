import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import GameList from '../components/GameList'

const GameContainer = React.createClass({
  render () {
    return (
      <Panel header="Game List" bsStyle="info">
        <GameList />
      </Panel>
    )
  }
})

export default GameContainer
