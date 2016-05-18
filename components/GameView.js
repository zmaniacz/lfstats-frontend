import React, { PropTypes } from 'react'
import { PageHeader, Well } from 'react-bootstrap';
import GameTeam from './GameTeam'

const GameView = React.createClass({
  render () {
    if(this.props.game.teams.data[0].winner)
    {
      var winner = this.props.game.teams.data[0];
      var loser = this.props.game.teams.data[1];
    }
    else
    {
      var winner = this.props.game.teams.data[1];
      var loser = this.props.game.teams.data[0];
    }
    return (
      <div>
        <PageHeader>
          {this.props.game.name} - {this.props.game.teams.data[0].color} vs {this.props.game.teams.data[1].color} <small>{this.props.game.played_at} - {this.props.game.pdf}</small>
        </PageHeader>
        <Well>Numbers in parentheses are score adjustments due to penalties and elimination bonuses</Well>
        <GameTeam team={winner} />
        <GameTeam team={loser} />
      </div>
    )
  }
})

export default GameView
