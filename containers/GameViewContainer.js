import React, { PropTypes } from 'react'
import Request from 'superagent';
import Config from 'Config';
import GameView from '../components/GameView'

const GameViewContainer = React.createClass({
  getInitialState: function () {
    return {
      data: {},
      loaded: false
    };
  },
  componentWillMount: function () {
    this.serverRequest = Request
      .get(Config.serverUrl+'games/'+this.props.gameId+'?include=teams.scorecards')
      .end(function(err, res) {
        this.setState({
          data: res.body.data,
          loaded: true
        });
      }.bind(this));
  },
  componentWillUnmount: function () {
    this.serverRequest.abort();
  },
  render () {
    if(this.state.loaded) {
      var response = <GameView game={this.state.data} />
    }
    else {
      var response = "Loading";
    }

    return (
      <div>{response}</div>
    )
  }
})

export default GameViewContainer
