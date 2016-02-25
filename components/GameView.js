import React, { PropTypes } from 'react'
import jQuery from 'jquery';
import DataTable from 'datatables.net';
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GameTeam from './GameTeam'
require('datatables.net-bs');

const GameView = React.createClass({
  componentDidMount: function() {
    //jQuery('#game_view').DataTable();
  },
  componentWillUpdate: function() {
    //var table = jQuery('#game_view').DataTable();
    //table.destroy();
  },
  componentDidUpdate: function() {
    //jQuery('#game_view').DataTable();
  },
  render () {
    return (
      <div>
        <GameTeam team={this.props.game.teams.data[0]} />
      </div>
    )
  }
})

export default GameView
