import React, { PropTypes } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import Request from 'superagent';
import GameList from '../components/GameList'

const GameListContainer = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      loaded: false
    };
  },
  componentWillMount: function () {
    this.serverRequest = Request
      .get('http://lfstats.app/api/games/')
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
      var header = "Game List";
      var response = <GameList list={this.state.data} />;
    }
    else {
      var header = <Glyphicon glyph="refresh glyphicon-refresh-animate" />;
      var response = '';
    }

    return (
      <Panel header={header} bsStyle="info">
        {response}
      </Panel>
    )
  }
})

export default GameListContainer
