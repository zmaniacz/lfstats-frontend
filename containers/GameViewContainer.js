import React, { PropTypes } from 'react'
import Request from 'superagent';
import GameView from '../components/GameView'

const GameViewContainer = React.createClass({
  getInitialState: function () {
    return {
      data: {},
      loaded: false
    };
  },
  componentDidMount: function () {
    this.serverRequest = Request
      .get('http://lfstats.app/api/games/'+this.props.gameId+'?include=teams.scorecards')
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
