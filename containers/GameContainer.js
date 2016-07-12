import React, {Component} from 'react';
import GameListContainer from './GameListContainer';
import GameViewContainer from './GameViewContainer';

class GameContainer extends Component {
  render() {
    return (
      this.props.params.gameId ? <GameViewContainer gameId={this.props.params.gameId} /> : <GameListContainer />
    );
  }
}

export default GameContainer;