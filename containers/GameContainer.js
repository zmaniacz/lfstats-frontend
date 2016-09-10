import React, {Component} from 'react';
import GameListContainer from './GameListContainer';
import GameViewContainer from './GameViewContainer';

class GameContainer extends Component {
  render() {
    return (
      this.props.params.id ? <GameViewContainer gameId={this.props.params.id} /> : <GameListContainer />
    );
  }
}

export default GameContainer;