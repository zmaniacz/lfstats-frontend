import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import DataTable from 'datatables.net';
import { Table, Button, Panel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
require('datatables.net-bs');

var GameList = React.createClass({
  componentDidMount: function() {
    jQuery('#game_list').DataTable({
      "deferRender": true,
      "columns": [
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"}
      ]
    });
  },
  componentWillUpdate: function() {
    jQuery('#game_list').DataTable().destroy();
  },
  componentDidUpdate: function() {
    jQuery('#game_list').DataTable({
      "deferRender": true,
      "columns": [
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"},
        {"width": "20%"}
      ]
    });
  },
  render: function () {
    var table = this.props.games.map(function (d, index) {
      if(d.name === null)
        d.name = "Game " + d.id;

      return (
        <tr key={d.id}>
          <td><LinkContainer to={{ pathname: '/games/'+d.id }}><Button bsStyle={d.winner == 'red' ? "danger" : "success"} block>{d.name}</Button></LinkContainer></td>
          <td>{d.played_at}</td>
          <td>{d.green_score}</td>
          <td>{d.red_score}</td>
          <td>{d.pdf}</td>
        </tr>
      );
    });

    return (
      <Panel header="Game List" bsStyle="info">
        <Table striped bordered hover condensed responsive id="game_list">
          <thead>
            <tr>
              <th>Game</th>
              <th>Date</th>
              <th>Green Score</th>
              <th>Red Score</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </Table>
      </Panel>
    );
  }
});

export default GameList;
