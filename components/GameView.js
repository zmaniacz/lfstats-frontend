import React, {Component} from 'react';
import GameTeam from './GameTeam';

class GameView extends Component {
  render() {
    if(this.props.game.teams.data[0].winner) {
      var winner = this.props.game.teams.data[0];
      var loser = this.props.game.teams.data[1];
    }
    else {
      var winner = this.props.game.teams.data[1];
      var loser = this.props.game.teams.data[0];
    }

    return (
      <div>
        <h3>
          {this.props.game.name} - {this.props.game.teams.data[0].color} vs {this.props.game.teams.data[1].color} <small>{this.props.game.played_at} - {this.props.game.pdf}</small>
        </h3>
        <h4>Numbers in parentheses are score adjustments due to penalties and elimination bonuses</h4>
        <GameTeam team={winner} />
        <GameTeam team={loser} />
      </div>
    );
  }
}

export default GameView;
